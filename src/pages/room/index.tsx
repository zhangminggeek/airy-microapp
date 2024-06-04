import { AddCircle } from '@nutui/icons-react-taro';
import { View } from '@tarojs/components';
import {
  stopPullDownRefresh,
  useDidShow,
  usePullDownRefresh,
} from '@tarojs/taro';
import { useState } from 'react';

import styles from './index.module.scss';
import ModalRoom from './ModalRoom';
import Room from './Room';

import { getRoom } from '@/api';
import { Empty, Header, Title } from '@/components';
import { useRequest } from '@/hooks';
import BasicLayout from '@/layouts/BasicLayout';
import { useUserStore } from '@/models';
import { EventUtil } from '@/utils';

const Page = () => {
  const { orgId } = useUserStore((state) => state);

  // 是否显示弹窗
  const [showModalRoom, setShowModalRoom] = useState<boolean>(false);

  // 监听组织切换事件
  EventUtil.useEvents(EventUtil.EventsKey.ORGANIZATION_CHANGE, (id: number) => {
    fetchRoom({ orgId: `${id}` });
  });

  useDidShow(() => {
    fetchRoom({ orgId: `${orgId}` });
  });

  // 下拉刷新
  usePullDownRefresh(async () => {
    await fetchRoom({ orgId: `${orgId}` });
    stopPullDownRefresh();
  });

  // 获取房间列表
  const { data, run: fetchRoom } = useRequest(getRoom, {
    manual: true,
  });

  return (
    <BasicLayout>
      <Header
        className={styles.header}
        extra={
          <AddCircle
            onClick={() => {
              setShowModalRoom(true);
            }}
          />
        }
        onOrganizationChange={(id) => {
          fetchRoom({ orgId: `${id}` });
        }}
      />
      <View className={styles.body}>
        <Title>房间列表</Title>
        <View>
          {data?.length ? (
            data.map((room) => (
              <Room
                key={room.id}
                id={room.id}
                name={room.name}
                belongingsList={room.belongingsList}
              />
            ))
          ) : (
            <Empty title="暂无房间" description="请先创建" />
          )}
        </View>
      </View>
      {/* 创建房间 */}
      <ModalRoom
        visible={showModalRoom}
        onSuccess={() => {
          setShowModalRoom(false);
          fetchRoom({ orgId: `${orgId}` });
        }}
        onCancel={() => {
          setShowModalRoom(false);
        }}
      />
    </BasicLayout>
  );
};

export default Page;
