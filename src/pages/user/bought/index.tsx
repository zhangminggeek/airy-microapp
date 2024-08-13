import { Button, Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { stopPullDownRefresh, usePullDownRefresh } from '@tarojs/taro';
import Big from 'big.js';
import { useRef, useState } from 'react';

import styles from './index.module.scss';
import useOrderAction from './useOrderAction';

import type { GetOrderBoughtResponse } from '@/api';
import type { ActionType } from '@/components/List';
import type { ReactNode } from 'react';

import { getOrderBought } from '@/api';
import { List, Product, Space } from '@/components';
import { UserType } from '@/constants';
import { OrderExpressType, OrderStatus, OrderType } from '@/constants/order';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

type OrderInfo = GetOrderBoughtResponse['list'][0];

interface TabOption {
  title: string;
  value: OrderStatus;
  actions?: (item: OrderInfo) => ReactNode[];
}

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // 当前操作的订单
  const [currentOrder, setCurrentOrder] = useState<OrderInfo>();

  // 下拉刷新
  usePullDownRefresh(async () => {
    await refreshList();
    stopPullDownRefresh();
  });

  const refreshList = async () => {
    await actionRef.current?.refresh({ status: tabs[currentIndex].value });
  };

  const {
    renderPopup,
    setShowCustomerServicePopup,
    openDialogConfirmReceive,
    setShowPaymentPicker,
    openDialogCancel,
  } = useOrderAction({ order: currentOrder, refresh: refreshList });

  const tabs: TabOption[] = [
    {
      title: '待付款',
      value: OrderStatus['待付款'],
      actions: (item) => [
        <Button
          key="cancel"
          size="small"
          onClick={() => {
            openDialogCancel({ params: { id: `${item.id}` } });
          }}
        >
          取消订单
        </Button>,
        <Button
          key="payment"
          type="primary"
          size="small"
          onClick={() => {
            setCurrentOrder(item);
            setShowPaymentPicker(true);
          }}
        >
          付款
        </Button>,
      ],
    },
    {
      title: '待发货',
      value: OrderStatus['待发货'],
      actions: () => [
        <Button
          key="cancel"
          size="small"
          onClick={() => {
            setShowCustomerServicePopup(true);
          }}
        >
          取消订单
        </Button>,
      ],
    },
    {
      title: '待收货',
      value: OrderStatus['待收货'],
      actions: (item) => [
        <Button
          key="confirm-receipt"
          type="primary"
          size="small"
          onClick={() => {
            openDialogConfirmReceive({ params: { id: `${item.id}` } });
          }}
        >
          确认收货
        </Button>,
      ],
    },
    {
      title: '返还退押',
      value: OrderStatus['返还退押'],
      actions: (item) =>
        item.expressReturnId
          ? [
              <Button key="return-waiting" size="small" fill="solid" disabled>
                退押中
              </Button>,
            ]
          : [
              <Button
                key="return"
                size="small"
                onClick={() => {
                  RouterUtil.navigateTo('/packageOrder/pages/deliver/index', {
                    id: item.id,
                    addressId: item.sellerAddressId,
                    type: OrderExpressType['返还'],
                  });
                }}
              >
                返还发货
              </Button>,
            ],
    },
    { title: '已完成', value: OrderStatus['已完成'] },
    { title: '已取消', value: OrderStatus['已取消'] },
  ];

  return (
    <BasicLayout title="我的购买" back="/pages/user/index/index" fill>
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
            request={getOrderBought}
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
                    owner: UserType['买家'],
                  });
                }}
              />
            )}
            padding
          />
        </View>
      </View>
      {renderPopup()}
    </BasicLayout>
  );
};

export default Page;
