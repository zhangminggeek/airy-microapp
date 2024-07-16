import { Button, Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { stopPullDownRefresh, usePullDownRefresh } from '@tarojs/taro';
import Big from 'big.js';
import { useRef, useState } from 'react';

import styles from './index.module.scss';

import type { GetOrderSoldResponse } from '@/api';
import type { ActionType } from '@/components/List';
import type { ReactNode } from 'react';

import { getOrderSold } from '@/api';
import { Affix, List, Product, Space } from '@/components';
import { OrderExpressType, OrderType } from '@/constants/order';
import { PurchaseStatus } from '@/constants/purchase';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

interface TabOption {
  title: string;
  value: PurchaseStatus;
  actions?: (item: GetOrderSoldResponse['list'][0]) => ReactNode[];
}

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh({ status: tabs[currentIndex].value });
    stopPullDownRefresh();
  });

  const tabs: TabOption[] = [
    { title: '求购中', value: PurchaseStatus['求购中'] },
    { title: '已完成', value: PurchaseStatus['已完成'] },
    {
      title: '审核中',
      value: PurchaseStatus['审核中'],
      actions: (item) => [
        <Button
          key="deliver"
          type="primary"
          size="small"
          onClick={() => {
            RouterUtil.navigateTo('/packageOrder/pages/deliver/index', {
              id: item.id,
              addressId: item.buyerAddressId,
              type: OrderExpressType['发货'],
            });
          }}
        >
          去发货
        </Button>,
      ],
    },
    {
      title: '审核不通过',
      value: PurchaseStatus['审核不通过'],
      actions: (item) => [
        <Button
          key="return"
          size="small"
          onClick={() => {
            RouterUtil.navigateTo('/packageOrder/pages/return/index', {
              id: item.id,
            });
          }}
        >
          确认返还
        </Button>,
      ],
    },
  ];

  return (
    <BasicLayout title="我求购的" back fill>
      <View className={styles.content}>
        <Tabs
          value={currentIndex}
          onChange={(index: number) => {
            setCurrentIndex(index);
          }}
        >
          {tabs.map((item) => (
            <Tabs.TabPane key={item.value} title={item.title} />
          ))}
        </Tabs>
        <View className={styles.body}>
          <List
            actionRef={actionRef}
            request={getOrderSold}
            params={{ status: tabs[currentIndex].value }}
            column={1}
            renderItem={(item) => (
              <Product.Brief
                key={item.id}
                type={item.type}
                image={item.market?.product?.picList?.[0]?.url}
                title={item.market?.title}
                desc={item.market?.description}
                total={
                  item.type === OrderType['出售']
                    ? item.market?.sellingPrice
                    : Big(item.market?.leasePrice ?? 0)
                        .plus(item.market?.leaseDeposit ?? 0)
                        .toString()
                }
                footer={
                  tabs[currentIndex].actions?.(item)?.length ? (
                    <View className={styles['brief-footer']}>
                      <Space
                        className={styles['brief-footer-actions']}
                        size={12}
                      >
                        {tabs[currentIndex].actions?.(item)}
                      </Space>
                    </View>
                  ) : null
                }
                onClick={() => {
                  RouterUtil.navigateTo('/packageOrder/pages/detail/index', {
                    id: item.id,
                    owner: 'seller',
                  });
                }}
              />
            )}
          />
        </View>
      </View>
      <Affix
        onClick={() => {
          RouterUtil.navigateTo('/pages/purchase/action/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
