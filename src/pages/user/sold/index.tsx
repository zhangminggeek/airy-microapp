import { Button, Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import {
  stopPullDownRefresh,
  useDidShow,
  usePullDownRefresh,
} from '@tarojs/taro';
import Big from 'big.js';
import { useRef, useState } from 'react';

import styles from './index.module.scss';

import type { GetOrderSoldResponse } from '@/api';
import type { ActionType } from '@/components/List';
import type { ReactNode } from 'react';

import { getOrderSold } from '@/api';
import { List, Product, Space } from '@/components';
import { OrderExpressType, OrderStatus, OrderType } from '@/constants/order';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

interface TabOption {
  title: string;
  value: OrderStatus;
  actions?: (item: GetOrderSoldResponse['list'][0]) => ReactNode[];
}

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useDidShow(() => {
    actionRef.current?.refresh({ status: tabs[currentIndex].value });
  });

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh({ status: tabs[currentIndex].value });
    stopPullDownRefresh();
  });

  const tabs: TabOption[] = [
    {
      title: '待发货',
      value: OrderStatus['待发货'],
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
    { title: '待收货', value: OrderStatus['待收货'] },
    {
      title: '待返回',
      value: OrderStatus['返还退押'],
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
    { title: '已完成', value: OrderStatus['已完成'] },
    { title: '已取消', value: OrderStatus['已取消'] },
  ];

  return (
    <BasicLayout title="我卖出的" back fill>
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
    </BasicLayout>
  );
};

export default Page;
