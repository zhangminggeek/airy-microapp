import { View } from '@tarojs/components';
import { stopPullDownRefresh, usePullDownRefresh } from '@tarojs/taro';
import { useRef, useState } from 'react';

import styles from './index.module.scss';

import type { ActionType } from '@/components/List';

import { getPurchase } from '@/api';
import { Filter, InputSearch, List, Product } from '@/components';
import { MarketProductStatus } from '@/constants/market';
import { productTypeMap } from '@/constants/product';
import { PurchaseStatus } from '@/constants/purchase';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  // 搜索关键字
  const [keyword, setKeyword] = useState<string>('');
  // 筛选条件
  const [condition, setCondition] = useState<Record<string, any>>();

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh({
      status: MarketProductStatus['在售'],
      title: keyword,
    });
    stopPullDownRefresh();
  });

  return (
    <BasicLayout
      className={styles.container}
      title={
        <InputSearch
          placeholder="搜索求购"
          onSearch={(v) => {
            setKeyword(v ?? '');
          }}
        />
      }
      fill
      safeArea={false}
    >
      <Filter
        fields={[
          {
            name: 'typeCode',
            title: '类型',
            options: Array.from(productTypeMap.values()),
          },
          {
            name: 'order',
            title: '排序',
            options: [
              { text: '最新发布', value: 1 },
              { text: '报价量由高到低', value: 2 },
              { text: '报价量由低到高', value: 3 },
            ],
          },
        ]}
        value={condition}
        onChange={(v) => {
          setCondition(v);
        }}
      />
      <View className={styles.content}>
        <List
          actionRef={actionRef}
          request={getPurchase}
          params={{
            status: PurchaseStatus['求购中'],
            title: keyword,
            ...condition,
          }}
          renderItem={(item) => (
            <Product.Card
              key={item.id}
              image={item.picList?.[0]?.url}
              title={item.title}
              tagList={item.tagList?.map((item) => item.tagName)}
              leasePrice={
                item.minLeasePrice || item.maxLeasePrice
                  ? [item.minLeasePrice, item.maxLeasePrice]
                  : undefined
              }
              sellingPrice={
                item.minPrice || item.maxPrice
                  ? [item.minPrice, item.maxPrice]
                  : undefined
              }
              companyLogo={item.companyLogo}
              companyName={item.companyName}
              extra={{ icon: 'FormOutlined', text: item.quotations }}
              onClick={() => {
                RouterUtil.navigateTo('/pages/purchase/detail/index', {
                  id: item.id,
                });
              }}
              onCompanyClick={() => {
                RouterUtil.navigateTo('/packageCompany/pages/index/index', {
                  id: item.companyId,
                });
              }}
            />
          )}
          fill
        />
      </View>
    </BasicLayout>
  );
};

export default Page;
