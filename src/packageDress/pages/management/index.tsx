import { Image, Tabs } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useRef, useState } from 'react';

import styles from './index.module.scss';

import type { ActionType } from '@/components/List';

import { getProductPage } from '@/api';
import { Affix, Icon, InputSearch, List } from '@/components';
import { productTypeMap } from '@/constants/product';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const typeList = Array.from(productTypeMap.values());

const Page = () => {
  const actionRef =
    useRef<ActionType<{ productTypeCode?: string; name?: string }>>(null);

  // 搜索词
  const [keyword, setKeyword] = useState<string>();
  // 当前产品分类code
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <BasicLayout title="服饰管理" back fill safeArea={false}>
      <View className={styles.content}>
        <View className={styles.header}>
          <View className={styles['header-search']}>
            <InputSearch
              onSearch={(v) => {
                setKeyword(v);
                if (!typeList?.length) return;
                const productTypeCode = typeList?.[currentIndex]?.value;
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
              <Tabs.TabPane key={item.value} title={item.text} />
            ))}
          </Tabs>
        </View>
        <View className={styles.body}>
          {typeList?.length ? (
            <List
              actionRef={actionRef}
              request={getProductPage}
              params={{
                productTypeCode: typeList?.[currentIndex]?.value,
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
