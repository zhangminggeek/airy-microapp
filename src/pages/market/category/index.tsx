import { View } from '@tarojs/components';
import {
  stopPullDownRefresh,
  usePullDownRefresh,
  useRouter,
} from '@tarojs/taro';
import { useRef, useState } from 'react';

import { filterConfig } from './config';
import styles from './index.module.scss';
import MainFilter from './MainFilter';

import type { ActionType } from '@/components/List';

import { getMarket } from '@/api';
import { Filter, InputSearch, List, Product } from '@/components';
import { MarketProductStatus } from '@/constants/market';
import { ProductType } from '@/constants/product';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  // 服装类型
  const { typeCode } = useRouter().params;
  const actionRef = useRef<ActionType>(null);

  const config = filterConfig.get(typeCode as ProductType);

  // 搜索关键字
  const [keyword, setKeyword] = useState<string>('');

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh({
      status: MarketProductStatus['在售'],
      typeCode,
      description: keyword,
    });
    stopPullDownRefresh();
  });

  return (
    <BasicLayout
      className={styles.container}
      title={
        <InputSearch
          placeholder="搜索商品"
          onSearch={(v) => {
            setKeyword(v ?? '');
          }}
        />
      }
      back
      fill
      safeArea={false}
    >
      {config?.main ? <MainFilter options={[]} /> : null}
      <Filter
        fields={[
          {
            title: '价格',
            name: 'price',
            options: [
              { text: '出售价从高到低', value: 1 },
              { text: '出售价从低到高', value: 2 },
              { text: '借调价从高到低', value: 3 },
              { text: '借调价从低到高', value: 4 },
            ],
          },
        ]}
      />
      <View className={styles.body}>
        <List
          actionRef={actionRef}
          request={getMarket}
          params={{
            status: MarketProductStatus['在售'],
            typeCode,
            description: keyword,
          }}
          renderItem={(item) => (
            <Product.Card
              key={item.id}
              image={item.product?.picList?.[0]?.url}
              title={item.title}
              tagList={item.product?.tagList?.map((item) => item.tag.name)}
              leasePrice={item.leasePrice}
              sellingPrice={item.sellingPrice}
              companyLogo={item.companyLogo}
              companyName={item.companyName}
              extra={{ icon: 'LoveOutlined', text: item.favorities }}
              onClick={() => {
                RouterUtil.navigateTo('/pages/market/detail/index', {
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
