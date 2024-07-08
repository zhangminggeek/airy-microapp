import { Image, Tabs } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import { useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

import type { ActionType } from '@/components/List';

import { getProductPage } from '@/api';
import { Affix, Icon, InputSearch, List } from '@/components';
import { ProductStatus, productStatusMap } from '@/constants/product';
import { BasicLayout } from '@/layouts';
import { useProductStore } from '@/models/product';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { typeList, fetchProductType } = useProductStore((state) => state);

  const actionRef =
    useRef<ActionType<{ productTypeCode?: string; name?: string }>>(null);

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
              request={getProductPage}
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
                      RouterUtil.navigateTo(
                        '/packageDress/pages/detail/index',
                        { id: item.id },
                      );
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
                        <View className={styles.lease}>
                          <Icon name="RentOutlined" size={16} />
                          {item.leaseCount}
                        </View>
                      </View>
                    </View>
                    {item.status !== ProductStatus['正常'] ? (
                      <View className={styles['card-mask']}>
                        <View className={styles['card-mask-tag']}>
                          {productStatusMap.get(item.status)?.text}
                        </View>
                      </View>
                    ) : null}
                  </View>
                );
              }}
            />
          ) : null}
        </View>
      </View>
      <Affix
        onClick={() => {
          RouterUtil.navigateTo('/packageDress/pages/action/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
