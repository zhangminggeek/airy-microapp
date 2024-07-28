import { View } from '@tarojs/components';
import {
  stopPullDownRefresh,
  usePullDownRefresh,
  useRouter,
} from '@tarojs/taro';
import { useMemo, useRef, useState } from 'react';

import { filterConfig } from './config';
import CustomFilter from './CustomFilter';
import styles from './index.module.scss';
import MainFilter from './MainFilter';

import type { ActionType } from '@/components/List';

import { getMarket } from '@/api';
import { Filter, InputSearch, List, Product } from '@/components';
import { MarketProductStatus } from '@/constants/market';
import { ProductType } from '@/constants/product';
import { BasicLayout } from '@/layouts';
import { isNil, RouterUtil } from '@/utils';

const Page = () => {
  // 服装类型
  const { typeCode } = useRouter().params;
  const actionRef = useRef<ActionType>(null);

  const config = filterConfig.get(typeCode as ProductType);

  // 搜索关键字
  const [keyword, setKeyword] = useState<string>('');
  // 选中值
  const [mainFilterValue, setMainFilterValue] = useState<string | number>();
  // 选中值
  const [tabFilterValue, setTabFilterValue] = useState<Record<string, any>>();
  // 筛选里面的选中值
  const [subFilterValue, setSubFilterValue] = useState<Record<string, any>>();

  const params = useMemo(() => {
    const { order, ...restTabFilterValue } = tabFilterValue ?? {};
    const { filter, ...restSubFilterValue } = subFilterValue ?? {};
    const filterArr = Object.entries({
      [config?.main?.filed ?? '']: mainFilterValue,
      ...restTabFilterValue,
      ...filter,
    })
      .map(([k, v]) => ({ field: k, value: v }))
      .filter((item) => !isNil(item.value));

    return {
      status: MarketProductStatus['在售'],
      productTypeCode: typeCode,
      title: keyword,
      order,
      ...restSubFilterValue,
      filterStr: filterArr?.length ? JSON.stringify(filterArr) : undefined,
    };
  }, [typeCode, keyword, tabFilterValue, subFilterValue]);

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh(params);
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
      {config?.main ? (
        <MainFilter
          options={config.main.options}
          value={mainFilterValue}
          onChange={(v) => {
            setMainFilterValue(v);
          }}
        />
      ) : null}
      <Filter
        fields={[
          ...(config?.tab ?? []),
          {
            title: '排序',
            name: 'order',
            options: [
              { text: '默认排序', value: 0 },
              { text: '最新发布', value: 1 },
              { text: '最多收藏', value: 2 },
              { text: '出售价从高到低', value: 3 },
              { text: '出售价从低到高', value: 4 },
              { text: '借调价从高到低', value: 5 },
              { text: '借调价从低到高', value: 6 },
            ],
            emptyOption: false,
            defaultValue: 0,
          },
          {
            title: '筛选',
            name: 'filter',
            render: (ref) => {
              return (
                <CustomFilter
                  typeCode={typeCode as ProductType}
                  excludes={[
                    config?.main?.filed ?? '',
                    ...(config?.tab?.map((item) => item.name) ?? []),
                  ].filter((item) => !!item)}
                  onOk={(v) => {
                    console.log('filter', v);
                    setSubFilterValue(v);
                    ref.current?.toggle(false);
                  }}
                  onReset={() => {
                    setSubFilterValue(undefined);
                    ref.current?.toggle(false);
                  }}
                />
              );
            },
          },
        ]}
        value={tabFilterValue}
        onChange={(v) => {
          setTabFilterValue(v);
        }}
      />
      <View className={styles.body}>
        <List
          actionRef={actionRef}
          request={getMarket}
          params={params}
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
