import { AddCircle, ArrowRight } from '@nutui/icons-react-taro';
import {
  Button,
  Cell,
  ActionSheet as NutActionSheet,
} from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useShareAppMessage } from '@tarojs/taro';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';
import ModalOrganization from './ModalOrganization';

import {
  deleteOrganizationId,
  deleteOrganizationOrgIdMemberMemberId,
  getOrganizationId,
} from '@/api';
import ImageLogo from '@/assets/logo_primary.png';
import {
  ActionSheet,
  Avatar,
  OrganizationPicker,
  Space,
  Title,
} from '@/components';
import { OSS_PREFIX } from '@/constants';
import { RoleEnum, roleEnumMap } from '@/constants/role';
import { useRequest } from '@/hooks';
import BasicLayout from '@/layouts/BasicLayout';
import { useUserStore } from '@/models';
import { EventUtil, RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { id, orgId, fetchUserInfo } = useUserStore((state) => state);

  // 是否显示组织编辑弹窗
  const [showModalOrganization, setShowModalOrganization] = useState(false);
  // 是否显示切换组织弹窗
  const [showOrganizationPicker, setShowOrganizationPicker] = useState(false);
  // 是否移除成员操作弹窗
  const [showMemberActionSheet, setShowMemberActionSheet] = useState(false);
  // 当前操作成员id
  const [memberId, setMemberId] = useState<number>();

  useShareAppMessage((res) => {
    if (res.from === 'button') {
      // 来自邀请按钮
      return {
        title: '快加入我的组织！',
        path: `/pages/security/index?target=invitation&userId=${id}&orgId=${orgId}&expried=${dayjs().add(7, 'day').valueOf()}`,
        imageUrl: `${OSS_PREFIX}/assets/invitation.png`,
      };
    } else {
      // 来自页面转发分享
      return {
        title: '居简记',
        path: `/pages/security/index`,
        imageUrl: ImageLogo,
      };
    }
  });

  // 监听组织切换事件
  EventUtil.useEvents(EventUtil.EventsKey.ORGANIZATION_CHANGE, (id: number) => {
    fetchOrganization({ id: `${id}` });
  });

  // 获取组织详情
  const { data, run: fetchOrganization } = useRequest(getOrganizationId, {
    defaultParams: { id: `${orgId}` },
  });

  // 移除成员
  const { run: removeMember } = useRequest(
    deleteOrganizationOrgIdMemberMemberId,
    {
      manual: true,
      onSuccess() {
        Toast.success('移除成功');
        fetchOrganization({ id: `${orgId}` });
      },
    },
  );

  // 删除组织
  const { run: deleteOrganization } = useRequest(deleteOrganizationId, {
    manual: true,
    onSuccess() {
      Toast.success('删除成功');
      fetchUserInfo();
      RouterUtil.switchTab('/pages/user/index');
    },
  });

  // 当前用户是否是该组织的创建者
  const isCreator = useMemo(() => {
    const creatorForOrg = data?.members?.find(
      (item) => item.roleId === RoleEnum['CREATOR'],
    );
    return creatorForOrg?.id === id;
  }, [id, data]);

  return (
    <BasicLayout share={false}>
      <View className={styles.header}>
        <ActionSheet
          options={[
            { key: 'edit', name: '编辑', show: isCreator },
            { key: 'change', name: '切换组织' },
            { key: 'delete', name: '删除', danger: true, show: isCreator },
          ]}
          onSelect={({ key }) => {
            if (key === 'edit') {
              setShowModalOrganization(true);
            } else if (key === 'change') {
              setShowOrganizationPicker(true);
            } else if (key === 'delete') {
              Toast.confirm({
                title: '确定删除该组织吗？',
                content:
                  '删除后，该组织将无法恢复，组织内的房间和物品也将被删除',
                success() {
                  deleteOrganization({ id: `${orgId}` });
                },
              });
            }
          }}
        >
          <View className={styles['header-title']}>
            <Text>{data?.name}</Text>
            <ArrowRight size={16} />
          </View>
        </ActionSheet>
        <View className={styles['header-info']}>
          <Space block>
            <Text>{data?.roomCount}个房间</Text>
            <Text>{data?.belongingsCount}个物品</Text>
          </Space>
        </View>
      </View>
      <Title className={styles.title}>
        组织成员({data?.members?.length ?? 0})
      </Title>
      <View className={styles.member}>
        <Cell.Group>
          {data?.members?.map((item) => (
            <Cell
              key={item.id}
              className={styles['member-item']}
              align="center"
              onClick={() => {
                if (!isCreator || item.id === id) {
                  return;
                }
                setMemberId(item.id);
                setShowMemberActionSheet(true);
              }}
            >
              <Avatar
                src={item.avatar}
                className={styles['member-item-avatar']}
              />
              <View className={styles['member-item-content']}>
                <View className={styles['member-item-content-name']}>
                  <Space size={4}>
                    <Text>{item.name}</Text>
                    <Text>{item.id === id ? '(本人)' : null}</Text>
                  </Space>
                </View>
                <View className={styles['member-item-content-role']}>
                  {roleEnumMap.get(item.roleId)}
                </View>
              </View>
              {isCreator && item.id !== id ? (
                <ArrowRight size={14} color="#7c7c7c" />
              ) : null}
            </Cell>
          ))}
        </Cell.Group>
        <Button
          className={styles.btn}
          icon={<AddCircle />}
          type="primary"
          block
          openType="share"
        >
          邀请加入
        </Button>
      </View>
      {/* 编辑组织弹窗 */}
      <ModalOrganization
        orgId={data?.id}
        orgName={data?.name}
        visible={showModalOrganization}
        onSuccess={() => {
          setShowModalOrganization(false);
          fetchOrganization({ id: `${orgId}` });
        }}
        onCancel={() => {
          setShowModalOrganization(false);
        }}
      />
      {/* 切换组织弹窗 */}
      <OrganizationPicker
        visible={showOrganizationPicker}
        onClose={() => {
          setShowOrganizationPicker(false);
        }}
      />
      {/* 移除成员弹窗 */}
      <NutActionSheet
        visible={showMemberActionSheet}
        options={[{ name: '移除成员', danger: true }]}
        cancelText="取消"
        onSelect={(_, index) => {
          if (index === 0) {
            if (!orgId || !memberId) return;
            Toast.confirm({
              title: '确定移除该成员吗？',
              content: '移除后，该成员将无法查看该组织',
              success() {
                removeMember({ orgId: `${orgId}`, memberId: `${memberId}` });
              },
            });
          }
          setShowMemberActionSheet(false);
          setMemberId(undefined);
        }}
        onCancel={() => {
          setShowMemberActionSheet(false);
          setMemberId(undefined);
        }}
      />
    </BasicLayout>
  );
};

export default Page;
