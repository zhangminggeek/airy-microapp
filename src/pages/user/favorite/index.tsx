import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useRef } from 'react';

import styles from './index.module.scss';

import type { ActionType } from '@/components/InfiniteList';

import { getMarketMyFavorite, postMarketFavorite } from '@/api';
import { InfiniteList, Product } from '@/components';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  // 取消收藏
  const { run: toggle } = useRequest(postMarketFavorite, {
    manual: true,
    onSuccess() {
      Toast.success('取消成功');
      actionRef.current?.refresh();
    },
  });

  return (
    <BasicLayout title="我的收藏" back>
      <InfiniteList
        actionRef={actionRef}
        request={getMarketMyFavorite}
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
    </BasicLayout>
  );
};

export default Page;
