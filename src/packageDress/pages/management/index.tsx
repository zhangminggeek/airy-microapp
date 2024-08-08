import { Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useRef, useState } from 'react';

import styles from './index.module.scss';

import type { ActionType } from '@/components/List';

import { getProductPage } from '@/api';
import { Affix, InputSearch, List, Media } from '@/components';
import {
  ProductStatus,
  productStatusMap,
  productTypeMap,
} from '@/constants/product';
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
                      <Media
                        className={styles['card-header-image']}
                        src={item.picList?.[0]?.url}
                        mode="aspectFill"
                      />
                    </View>
                    <View className={styles['card-body']}>
                      <View className={styles['card-body-title']}>
                        {item.name}
                      </View>
                    </View>
                    {item.status === ProductStatus['已售出'] ||
                    item.status === ProductStatus['借调中'] ? (
                      <View className={styles['card-mask']}>
                        <View className={styles['card-mask-tag']}>
                          {productStatusMap.get(item.status)?.text}
                        </View>
                      </View>
                    ) : null}
                  </View>
                );
              }}
              padding
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
