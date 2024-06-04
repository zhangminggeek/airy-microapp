import { Image, View } from '@tarojs/components';
import { useDidShow, useRouter } from '@tarojs/taro';
import dayjs from 'dayjs';

import styles from './index.module.scss';

import { deleteBelongingsId, getBelongingsId } from '@/api';
import {
  ActionSheet,
  Descriptions,
  ExpirationStatusTag,
  Space,
} from '@/components';
import { OSS_PREFIX } from '@/constants';
import { useRequest } from '@/hooks';
import BasicLayout from '@/layouts/BasicLayout';
import { useUserStore } from '@/models';
import { RouterUtil, Toast } from '@/utils';

export interface Router {
  params: {
    id: string;
  };
}

const Page = () => {
  const {
    params: { id },
  } = useRouter() as Router;

  const { id: userId } = useUserStore((state) => state);

  useDidShow(() => {
    fetchBelongings({ id });
  });

  // 获取物品详情
  const {
    data,
    run: fetchBelongings,
    loading,
  } = useRequest(getBelongingsId, {
    manual: true,
  });

  // 删除物品
  const { run: deleteBelongings } = useRequest(deleteBelongingsId, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout fill loading={loading}>
      <Image
        className={styles.pic}
        src={data?.pic ?? `${OSS_PREFIX}/assets/default_belongings.png`}
        mode="aspectFit"
      />
      <View className={styles.content}>
        <View className={styles.header}>
          <View className={styles['header-left']}>
            <View className={styles.name}>{data?.name}</View>
            {data?.desc ? (
              <View className={styles.desc}>{data.desc}</View>
            ) : null}
          </View>
          {data?.userId === userId ? (
            <View className={styles['header-right']}>
              <ActionSheet
                options={[
                  { key: 'edit', name: '编辑' },
                  { key: 'delete', name: '删除', danger: true },
                ]}
                cancelText="取消"
                onSelect={({ key }) => {
                  if (key === 'edit') {
                    RouterUtil.navigateTo('/pages/belongings/action/index', {
                      id: data?.id,
                    });
                  } else if (key === 'delete') {
                    Toast.confirm({
                      title: '删除物品',
                      content: '确定删除该物品吗？',
                      success: () => {
                        deleteBelongings({ id: `${data?.id}` });
                      },
                    });
                  }
                }}
              />
            </View>
          ) : null}
        </View>
        <Descriptions
          options={[
            { label: '数量', field: 'count' },
            { label: '房间', field: 'roomName' },
            {
              label: '位置',
              field: 'spaceNamePath',
              format: (v) => v?.join(' / '),
            },
            { label: '归属人', field: 'username' },
            { label: '添加时间', field: 'createTime' },
            {
              label: '过期时间',
              field: 'expirationDate',
              format(v: string) {
                if (!v) return null;
                return (
                  <Space>
                    {v}
                    <ExpirationStatusTag date={v ? dayjs(v) : undefined} />
                  </Space>
                );
              },
            },
          ]}
          data={data}
        />
      </View>
    </BasicLayout>
  );
};

export default Page;
