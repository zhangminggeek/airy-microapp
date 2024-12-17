import { Image, Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import classnames from 'classnames';
import { useState } from 'react';

import { productTypeOptions, tabsMap } from './config';
import styles from './index.module.scss';

import { getMarket } from '@/api';
import ImageSale from '@/assets/icons/sale.jpg';
import {
  Barrage,
  InfiniteList,
  InputSearch,
  Product,
  Space,
  Tag,
} from '@/components';
import { HIDE_PRICE, OSS_ASSETS_DIR } from '@/constants';
import { MarketProductStatus } from '@/constants/market';
import { useRequest, useShareEvent } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useGlobalStore, useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const tabs = Array.from(tabsMap.values());

const Page = () => {
  const { info } = useUserStore((state) => state);
  const { setTabBarActiveKey } = useGlobalStore((state) => state);
  useShareEvent();

  useDidShow(() => {
    setTabBarActiveKey('index');
  });

  // tabs 选中索引
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 获取特卖区数据
  const { data: saleData } = useRequest(getMarket, {
    defaultParams: { onSale: '1', status: '2', pageNum: '1', pageSize: '10' },
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
      fill
      safeArea={{ show: true, withTabBar: true }}
    >
      <InfiniteList
        column="multiple"
        params={{
          status: `${MarketProductStatus['在售']}`,
          order: `${tabs[currentIndex].value}`,
        }}
        request={getMarket}
        requestOnShow={false}
        header={
          <View>
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
                  <View className={styles['filter-item-label']}>
                    {item.label}
                  </View>
                </View>
              ))}
            </View>
            <View className={styles.showcase}>
              <View
                className={styles.sale}
                onClick={() => {
                  RouterUtil.navigateTo('/pages/market/sale/index');
                }}
              >
                <View className={styles['sale-header']}>
                  <Space className={styles['sale-header-title']} size={4}>
                    <Image
                      className={styles['sale-header-title-icon']}
                      src={ImageSale}
                      width={20}
                      height={20}
                      mode="aspectFill"
                    />
                    <View className={styles['sale-header-title-text']}>
                      特卖区
                    </View>
                    <Tag className={styles['sale-header-title-tag']}>限购</Tag>
                  </Space>
                </View>
                <View className={styles['sale-body']}>
                  {saleData?.list?.slice(0, 2)?.map((item) => (
                    <View
                      key={item.id}
                      className={styles['sale-body-item']}
                      onClick={(e) => {
                        e.stopPropagation();
                        RouterUtil.navigateTo('/pages/market/detail/index', {
                          id: item.id,
                        });
                      }}
                    >
                      <Image
                        className={styles['sale-body-item-image']}
                        mode="aspectFill"
                        src={item.product.picList[0]?.url}
                        width={70}
                        height={70}
                      />
                      <Product.SellingPrice
                        value={info?.account ? item.sellingPrice : HIDE_PRICE}
                      />
                    </View>
                  ))}
                </View>
              </View>
              <View
                className={classnames(styles.activity, styles.link)}
                onClick={() => {
                  RouterUtil.navigateTo(
                    '/packagePlatform/pages/activity/lottery/index',
                  );
                }}
              >
                <View className={styles['link-title']}>签到抽奖</View>
                <View className={styles['link-desc']}>赢红包</View>
                <Image
                  className={styles['link-image']}
                  src={`${OSS_ASSETS_DIR}/index_showcase_activity.png`}
                  width={52}
                  height={52}
                />
              </View>
              <View
                className={classnames(styles.reservation, styles.link)}
                onClick={() => {
                  RouterUtil.navigateTo(
                    '/packagePlatform/pages/feature-reservation/index',
                  );
                }}
              >
                <View className={styles['link-title']}>限时预约</View>
                <View className={styles['link-desc']}>店铺工具免费使用</View>
                <Image
                  className={styles['link-image']}
                  src={`${OSS_ASSETS_DIR}/index_showcase_reservation.png`}
                  width={52}
                  height={52}
                />
              </View>
            </View>
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
          </View>
        }
        renderItem={(item) => (
          <Product.Card
            key={item.id}
            image={item.product?.picList?.[0]?.url}
            title={item.title}
            onSale={!!item.onSale}
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
        padding
      />
      <Barrage />
    </BasicLayout>
  );
};

export default Page;
