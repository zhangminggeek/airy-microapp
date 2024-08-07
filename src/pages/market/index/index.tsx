import { Image, Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import {
  stopPullDownRefresh,
  useDidShow,
  usePullDownRefresh,
} from '@tarojs/taro';
import { useRef, useState } from 'react';

import { productTypeOptions, tabsMap } from './config';
import styles from './index.module.scss';

import type { ActionType } from '@/components/List';

import { getMarket } from '@/api';
import { InputSearch, List, Product } from '@/components';
import { OSS_PREFIX } from '@/constants';
import { MarketProductStatus } from '@/constants/market';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const tabs = Array.from(tabsMap.values());

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  // 搜索关键字
  const [keyword, setKeyword] = useState<string>('');
  // tabs 选中索引
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useDidShow(() => {
    actionRef.current?.refresh({
      status: MarketProductStatus['在售'],
      description: keyword,
      order: tabs[currentIndex].value,
    });
  });

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh({
      status: MarketProductStatus['在售'],
      description: keyword,
      order: tabs[currentIndex].value,
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
      safeArea={false}
    >
      <View className={styles.filter}>
        {productTypeOptions.map((item) => (
          <View key={item.value} className={styles['filter-item']}>
            <Image
              className={styles['filter-item-image']}
              src={`${OSS_PREFIX}/assets/${item.imageName}`}
              width={52}
              height={52}
            />
            <View className={styles['filter-item-label']}>{item.label}</View>
          </View>
        ))}
      </View>
      <View>
        <Tabs
          className={styles.tabs}
          align="left"
          value={currentIndex}
          onChange={(index: number) => {
            setCurrentIndex(index);
          }}
        >
          {tabs.map((item) => (
            <Tabs.TabPane key={item.value} title={item.text} />
          ))}
        </Tabs>
        <List
          actionRef={actionRef}
          request={getMarket}
          params={{
            status: MarketProductStatus['在售'],
            description: keyword,
            order: tabs[currentIndex].value,
          }}
          renderItem={(item) => (
            <Product.Card
              key={item.id}
              image={item.product?.picList?.[0]?.url}
              title={item.title}
              tagList={item.product?.tagList?.map((item) => item.tag.name)}
              leasePrice={item.leasePrice}
              sellingPrice={item.sellingPrice}
              favorites={item.favorities}
              onClick={() => {
                RouterUtil.navigateTo('/pages/market/detail/index', {
                  id: item.id,
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
