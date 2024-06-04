import { ArrowRight } from '@nutui/icons-react-taro';
import { ActionSheet, Cell } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import {
  stopPullDownRefresh,
  usePullDownRefresh,
  useRouter,
} from '@tarojs/taro';
import { useEffect, useMemo, useState } from 'react';

import ModalSpace from './ModalSpace';
import RoomTitle from './RoomTitle';
import SpaceBreadcrumbs from './SpaceBreadcrumbs';

import type { GetSpaceIdsResponse } from '@/api';

import { deleteSpaceId, getRoomId, getSpace, getSpaceIds } from '@/api';
import { Affix, Empty } from '@/components';
import { useRequest } from '@/hooks';
import BasicLayout from '@/layouts/BasicLayout';
import { RouterUtil, Toast } from '@/utils';

type SpaceType = GetSpaceIdsResponse[0];

export interface Router {
  params: {
    roomId: string;
    spaceIdPath?: string;
  };
}

// 最大储物空间层级
const MAX_LEVEL = 3;

const Page = () => {
  const {
    params: { roomId, spaceIdPath },
  } = useRouter() as Router;

  // 是否显示创建/编辑空间弹窗
  const [showModalSpace, setShowModalSpace] = useState<boolean>(false);
  // 是否显示操作栏
  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);
  // 当前操作的储物空间
  const [currentSpace, setCurrentSpace] = useState<SpaceType>();

  // 储物空间 id 路径
  const spaceIdPathResult = useMemo(() => {
    // 字符转义
    const str = decodeURIComponent(spaceIdPath ?? '');
    const arr = str?.split(',').map((item) => Number(item)) ?? [];
    return { str, arr };
  }, [spaceIdPath]);

  useEffect(() => {
    if (spaceIdPathResult?.str) {
      fetchRoomPath({ ids: spaceIdPathResult?.str });
    }
  }, [spaceIdPathResult]);

  // 下拉刷新
  usePullDownRefresh(async () => {
    await fetchSpace({
      roomId,
      parentId: `${spaceIdPathResult?.arr.at(-1)}`,
    });
    stopPullDownRefresh();
  });

  // 获取房间详情
  const { data: room, run: fetchRoom } = useRequest(getRoomId, {
    defaultParams: { id: roomId },
  });

  // 获取储物空间路径信息
  const { data: spacePath = [], run: fetchRoomPath } = useRequest(getSpaceIds, {
    manual: true,
  });

  // 获取储物空间列表
  const { data, run: fetchSpace } = useRequest(getSpace, {
    defaultParams: {
      roomId,
      parentId: `${spaceIdPathResult?.arr.at(-1)}`,
    },
  });

  // 删除储物空间
  const { run: deleteSpace } = useRequest(deleteSpaceId, {
    manual: true,
    onSuccess() {
      Toast.success('删除成功');
      fetchSpace({
        roomId,
        parentId: `${spaceIdPathResult?.arr.at(-1)}`,
      });
    },
  });

  return (
    <BasicLayout>
      {spaceIdPath ? (
        // 如果路由中存在储物空间 id 路径，说明非一级储物空间，显示路径面包屑
        <SpaceBreadcrumbs path={spacePath} />
      ) : (
        // 反之则说明是房间下的第一级空间，显示房间名}
        <RoomTitle
          roomId={Number(roomId)}
          roomName={room?.name}
          onEdit={() => {
            fetchRoom({ id: roomId });
          }}
        />
      )}
      {data?.length ? (
        <View>
          {data.map((item) => (
            <View
              key={item.id}
              onLongPress={() => {
                setShowActionSheet(true);
                setCurrentSpace(item);
              }}
            >
              <Cell
                align="center"
                title={item.name}
                description={item.remark}
                extra={
                  spaceIdPathResult?.arr?.length < MAX_LEVEL ? (
                    <ArrowRight width="16px" height="16px" />
                  ) : null
                }
                onClick={() => {
                  if (spaceIdPathResult?.arr?.length >= MAX_LEVEL) return;
                  RouterUtil.navigateTo('/pages/room/space/index', {
                    roomId,
                    spaceIdPath: spaceIdPathResult?.arr
                      .concat(item.id)
                      .join(','),
                  });
                }}
              />
            </View>
          ))}
        </View>
      ) : (
        <Empty title="暂无储物空间" description="请先添加" />
      )}
      {/* 创建储物空间按钮，当层级超过3级时不再允许添加 */}
      {spaceIdPathResult?.arr?.length <= MAX_LEVEL && (
        <Affix
          onClick={() => {
            setShowModalSpace(true);
          }}
        />
      )}
      <ActionSheet
        title={currentSpace?.name}
        visible={showActionSheet}
        options={[{ name: '编辑' }, { name: '删除', danger: true }]}
        cancelText="取消"
        onSelect={(_, index) => {
          if (index === 0) {
            setShowModalSpace(true);
          } else if (index === 1) {
            Toast.confirm({
              title: '是否删除该储物空间？',
              content: '请先删除下级储物空间和空间中的物品',
              success() {
                deleteSpace({ id: `${currentSpace?.id}` });
              },
            });
          }
          setShowActionSheet(false);
        }}
        onCancel={() => {
          setShowActionSheet(false);
        }}
      />
      {/* 创建储物空间弹窗 */}
      <ModalSpace
        visible={showModalSpace}
        spaceId={currentSpace?.id}
        roomId={Number(roomId)}
        roomName={room?.name}
        parentSpaceId={spaceIdPathResult?.arr.at(-1)}
        parentSpaceName={spacePath?.at(-1)?.name}
        onSuccess={() => {
          fetchSpace({
            roomId,
            parentId: `${spaceIdPathResult?.arr.at(-1)}`,
          });
          setShowModalSpace(false);
          setCurrentSpace(undefined);
        }}
        onCancel={() => {
          setShowModalSpace(false);
          setCurrentSpace(undefined);
        }}
      />
    </BasicLayout>
  );
};

export default Page;
