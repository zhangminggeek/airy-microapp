import { Button, Checkbox } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import { useState } from 'react';

import styles from './index.module.scss';

import { getMarketMyPublished, postPurchaseSend } from '@/api';
import { ActionSheet, Footer, List, Product } from '@/components';
import { MarketProductStatus } from '@/constants/market';
import { ProductSource } from '@/constants/product';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  // 求购id
  const { id } = useRouter().params;

  // 选中的商品id
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // 发送商品
  const { run } = useRequest(postPurchaseSend, {
    manual: true,
    onSuccess() {
      Toast.success('发送成功');
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout className={styles.layout} title="二手商品" back>
      <List
        request={getMarketMyPublished}
        params={{ status: MarketProductStatus[''] }}
        column={1}
        renderItem={(item) => (
          <View
            className={styles.item}
            key={item.id}
            onClick={() => {
              const checked = selectedIds.includes(item.id);
              if (checked) {
                setSelectedIds(selectedIds.filter((id) => id !== item.id));
              } else {
                setSelectedIds([...selectedIds, item.id]);
              }
            }}
          >
            <Checkbox
              className={styles['item-checkbox']}
              checked={selectedIds.includes(item.id)}
            />
            <Product.Brief
              className={styles['item-card']}
              image={item.product?.picList?.[0]?.url}
              title={item.title}
              desc={item.description}
              leasePrice={item.leasePrice}
              sellingPrice={item.sellingPrice}
            />
          </View>
        )}
      />
      <Footer
        btnText="发送"
        extra={
          <ActionSheet
            options={[
              { name: '从服装管理中选择', key: ProductSource['服装管理'] },
              { name: '从相册中选择', key: ProductSource['相册'] },
            ]}
            onSelect={(option) => {
              RouterUtil.navigateTo('/pages/market/action/index', {
                source: option.key,
                purchaseId: id,
              });
            }}
          >
            <Button size="large">新增二手商品</Button>
          </ActionSheet>
        }
        onConfirm={() => {
          if (!selectedIds.length) {
            Toast.info('请先选择商品');
            return;
          }
          run({ id: Number(id), marketIds: selectedIds });
        }}
      />
    </BasicLayout>
  );
};

export default Page;
