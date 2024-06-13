import { IconFont } from '@nutui/icons-react-taro';
import { Image, Tabs } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import { useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

import type { GetProductResponse } from '@/api';

import { getProduct } from '@/api';
import IconRentOutlined from '@/assets/icons/rent_outlined.svg';
import { Affix, InputSearch, List } from '@/components';
import { BasicLayout } from '@/layouts';
import { useProductStore } from '@/models/product';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { typeList, fetchProductType } = useProductStore((state) => state);

  const actionRef = useRef<any>(null);

  // 搜索词
  const [keyword, setKeyword] = useState<string>();
  // 当前产品分类code
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    fetchProductType();
  }, []);

  // 返回该页时需要重新请求数据
  useDidShow(() => {
    if (!typeList?.length) return;
    const productTypeCode = typeList?.[currentIndex]?.code;
    actionRef.current?.refresh({ productTypeCode, name: keyword });
  });

  // 计算产品数量
  const getProductCount = (
    inventory: GetProductResponse['list'][0]['inventory'],
  ) => {
    return inventory?.reduce((pre, cur) => {
      return pre + cur.count;
    }, 0);
  };

  return (
    <BasicLayout title="服饰管理" back fill safeArea={false}>
      <View className={styles.content}>
        <View className={styles.header}>
          <View className={styles['header-search']}>
            <InputSearch
              onSearch={(v) => {
                setKeyword(v);
                if (!typeList?.length) return;
                const productTypeCode = typeList?.[currentIndex]?.code;
                actionRef.current?.refresh({ productTypeCode, name: v });
              }}
            />
          </View>
          <Tabs
            value={currentIndex}
            onChange={(index: number) => {
              setCurrentIndex(index);
            }}
          >
            {typeList.map((item) => (
              <Tabs.TabPane key={item.code} title={item.name} />
            ))}
          </Tabs>
        </View>
        <View className={styles.body}>
          {typeList?.length ? (
            <List
              actionRef={actionRef}
              request={getProduct}
              params={{
                productTypeCode: typeList?.[currentIndex]?.code,
                name: keyword,
              }}
              renderItem={(item) => {
                return (
                  <View
                    key={item.id}
                    className={styles.card}
                    onClick={() => {
                      RouterUtil.navigateTo('/pages/dress/detail/index', {
                        id: item.id,
                      });
                    }}
                  >
                    <View className={styles['card-header']}>
                      <Image
                        src={item.picList?.[0]?.url}
                        width="100%"
                        height="100%"
                        mode="aspectFill"
                      />
                    </View>
                    <View className={styles['card-body']}>
                      <View className={styles['card-body-title']}>
                        {item.name}
                      </View>
                      <View className={styles['card-body-content']}>
                        <Text className={styles.no}>{item.no}</Text>
                        <Text
                          className={styles.count}
                        >{`${getProductCount(item.inventory)}件`}</Text>
                        <View className={styles.lease}>
                          <IconFont name={IconRentOutlined} size={16} />
                          {item.leaseCount}
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          ) : null}
        </View>
      </View>
      <Affix
        onClick={() => {
          RouterUtil.navigateTo('/pages/dress/action/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
