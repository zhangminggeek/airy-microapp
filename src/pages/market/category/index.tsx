import { View } from '@tarojs/components';
import {
  stopPullDownRefresh,
  useDidShow,
  usePullDownRefresh,
  useRouter,
} from '@tarojs/taro';
import { useMemo, useRef, useState } from 'react';

import { filterConfig } from './config';
import CustomFilter from './CustomFilter';
import styles from './index.module.scss';
import MainFilter from './MainFilter';

import type { ActionType as ListActionType } from '@/components/List';

import { getMarket } from '@/api';
import { Filter, Icon, InputSearch, List, Product } from '@/components';
import { HIDE_PRICE } from '@/constants';
import { MarketProductStatus } from '@/constants/market';
import { ProductType } from '@/constants/product';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { isNil, RouterUtil } from '@/utils';

const Page = () => {
  // 服装类型
  const { typeCode, from } = useRouter().params;
  const inputSearchRef = useRef<any>(null);
  const actionRef = useRef<ListActionType>(null);
  const { info } = useUserStore((state) => state);

  const config = filterConfig.get(typeCode as ProductType);

  // 搜索关键字
  const [keyword, setKeyword] = useState<string>('');
  // 选中值
  const [mainFilterValue, setMainFilterValue] = useState<string | number>();
  // 选中值
  const [tabFilterValue, setTabFilterValue] = useState<Record<string, any>>();
  // 筛选里面的选中值
  const [subFilterValue, setSubFilterValue] = useState<Record<string, any>>();

  useDidShow(() => {
    if (from === 'search') {
      inputSearchRef.current?.focus();
    }
  });

  const params = useMemo(() => {
    const { order, ...restTabFilterValue } = tabFilterValue ?? {};
    const { filter = [], ...restSubFilterValue } = subFilterValue ?? {};

    const filterArr = Object.entries({
      [config?.main?.filed ?? '']: mainFilterValue,
      ...restTabFilterValue,
    })
      .map(([k, v]) => ({ field: k, value: v }))
      .filter((item) => !isNil(item.value))
      .concat(filter);

    return {
      status: MarketProductStatus['在售'],
      productTypeCode: typeCode,
      keyword,
      order,
      ...restSubFilterValue,
      filterStr: filterArr?.length ? JSON.stringify(filterArr) : undefined,
    };
  }, [typeCode, keyword, mainFilterValue, tabFilterValue, subFilterValue]);

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
          className={styles['input-search']}
          ref={inputSearchRef}
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
            titleIcon: <Icon name="FilterFilled" size={10} />,
            render: (ref) => {
              return (
                <CustomFilter
                  typeCode={typeCode as ProductType}
                  excludes={[
                    config?.main?.filed ?? '',
                    ...(config?.tab?.map((item) => item.name) ?? []),
                  ].filter((item) => !!item)}
                  onOk={(v) => {
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
              allowSell={item.allowSell}
              allowLease={item.allowLease}
              leasePrice={info?.account ? item.leasePrice : HIDE_PRICE}
              sellingPrice={info?.account ? item.sellingPrice : HIDE_PRICE}
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
        />
      </View>
    </BasicLayout>
  );
};

export default Page;
