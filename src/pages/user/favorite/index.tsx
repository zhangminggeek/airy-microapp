import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { stopPullDownRefresh, usePullDownRefresh } from '@tarojs/taro';
import { useRef } from 'react';

import styles from './index.module.scss';

import type { ActionType } from '@/components/List';

import { getMarketMyFavorite, postMarketFavorite } from '@/api';
import { List, Product } from '@/components';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh();
    stopPullDownRefresh();
  });

  // 取消收藏
  const { run: toggle } = useRequest(postMarketFavorite, {
    manual: true,
    onSuccess() {
      Toast.success('取消成功');
      actionRef.current?.refresh();
    },
  });

  return (
    <BasicLayout title="我的收藏" back fill>
      <View className={styles.content}>
        <View className={styles.body}>
          <List
            actionRef={actionRef}
            request={getMarketMyFavorite}
            column={1}
            renderItem={(item) => (
              <Product.Brief
                key={item.id}
                image={item.product?.picList?.[0]?.url}
                title={item.title}
                desc={item.description}
                sellingPrice={item.sellingPrice}
                leasePrice={item.leasePrice}
                footer={
                  <View className={styles['brief-footer']}>
                    <Button
                      size="small"
                      onClick={() => {
                        toggle({ id: item.id, isFavorited: false });
                      }}
                    >
                      取消收藏
                    </Button>
                  </View>
                }
                onClick={() => {
                  RouterUtil.navigateTo('/pages/market/detail/index', {
                    id: item.id,
                  });
                }}
              />
            )}
          />
        </View>
      </View>
    </BasicLayout>
  );
};

export default Page;
