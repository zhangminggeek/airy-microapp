import {
  Button,
  Checkbox,
  Image,
  SafeArea,
  Skeleton,
  TabPane,
  Tabs,
} from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { debounce } from 'lodash';
import { useState } from 'react';

import styles from './index.module.scss';

import type { GetProductResponse } from '@/api';

import { getProduct, getProductType } from '@/api';
import { Icon, InputSearch, Space } from '@/components';
import { ProductStatus } from '@/constants/product';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

type Product = GetProductResponse['0'];

const Page = () => {
  // 搜索关键字
  const [keyword, setKeyword] = useState<string>();
  // tabs 选中索引
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // 选中的产品id
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  // 产品列表
  const { data, loading } = useRequest(getProduct, {
    defaultParams: { status: ProductStatus['正常'] },
  });

  // 产品列表
  const { data: typeList } = useRequest(getProductType);

  if (loading) {
    return <Skeleton rows={10} />;
  }

  return (
    <BasicLayout
      className={styles.container}
      title="选择商品"
      back
      fill
      safeArea={false}
    >
      <View className={styles.header}>
        <InputSearch
          placeholder="请输入名称搜索"
          onChange={debounce((v) => {
            setKeyword(v);
          }, 300)}
        />
      </View>
      <View className={styles.body}>
        <Tabs
          className={styles.tabs}
          direction="vertical"
          value={currentIndex}
          onChange={(v: number) => {
            setCurrentIndex(v);
          }}
        >
          {typeList?.map((item) => <TabPane key={item.id} title={item.name} />)}
        </Tabs>
        <View className={styles['body-content']}>
          {data
            ?.filter((item) => item.typeCode === typeList?.[currentIndex]?.code)
            ?.filter((item) => (keyword ? item.name.includes(keyword) : true))
            ?.map((item) => (
              <View
                key={item.id}
                className={styles.item}
                onClick={() => {
                  setSelectedProduct(item);
                }}
              >
                <Image
                  className={styles['item-image']}
                  src={item.picList?.[0]?.url}
                  width={72}
                  height={72}
                  mode="aspectFill"
                />
                <View className={styles['item-content']}>
                  <View className={styles['item-content-name']}>
                    {item.name}
                  </View>
                  <View className={styles['item-content-desc']}>
                    {item.description}
                  </View>
                  <View className={styles['item-content-desc']}>
                    <Text>{item.no}</Text>
                    <Space size={4}>
                      <Icon name="RentOutlined" size={16} />
                      <Text>{item.leaseCount}</Text>
                    </Space>
                  </View>
                </View>
                <Checkbox checked={item.id === selectedProduct?.id} />
              </View>
            ))}
        </View>
      </View>
      <View className={styles.footer}>
        <View className={styles['footer-content']}>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              if (selectedProduct) {
                Taro.setStorageSync(
                  StorageKey.PRODUCT_SELECTED,
                  JSON.stringify(selectedProduct),
                );
              }
              RouterUtil.navigateBack();
            }}
          >
            确定
          </Button>
        </View>
        <SafeArea position="bottom" />
      </View>
    </BasicLayout>
  );
};

export default Page;
