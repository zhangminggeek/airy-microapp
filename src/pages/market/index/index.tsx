import { Image, Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { stopPullDownRefresh, usePullDownRefresh } from '@tarojs/taro';
import { useRef, useState } from 'react';

import { productTypeOptions, tabsMap } from './config';
import styles from './index.module.scss';

import type { ActionType } from '@/components/List';

import { getMarket } from '@/api';
import { InputSearch, List, Product } from '@/components';
import { HIDE_PRICE, OSS_ASSETS_DIR } from '@/constants';
import { MarketProductStatus } from '@/constants/market';
import { useShareEvent } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const tabs = Array.from(tabsMap.values());

const Page = () => {
  const actionRef = useRef<ActionType>(null);
  const { info } = useUserStore((state) => state);
  useShareEvent();

  // tabs 选中索引
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh({
      status: MarketProductStatus['在售'],
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
          disabled
          onClick={() => {
            RouterUtil.navigateTo('/pages/market/search/index');
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
              mode="aspectFit"
              src={`${OSS_ASSETS_DIR}/${item.imageName}`}
              width={52}
              height={52}
              onClick={() => {
                RouterUtil.navigateTo('/pages/market/category/index', {
                  typeCode: item.value,
                });
              }}
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
            order: tabs[currentIndex].value,
          }}
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
              priceTip={info?.account ? null : '登录可见'}
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
