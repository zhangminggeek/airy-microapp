import { View } from '@tarojs/components';
import { setClipboardData, useRouter } from '@tarojs/taro';
import Big from 'big.js';
import dayjs from 'dayjs';
import { useMemo } from 'react';

import styles from './index.module.scss';

import { getOrderId } from '@/api';
import { Descriptions, Icon, Product, Section, Space } from '@/components';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/constants';
import { OrderStatus, orderStatusMap, OrderType } from '@/constants/order';
import { useAddress, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';

const Page = () => {
  const { id, owner } = useRouter().params;

  // 获取订单详情
  const { data } = useRequest(getOrderId, {
    defaultParams: { id },
  });

  const { address: buyerAddress } = useAddress({
    province: data?.buyerAddress?.province,
    city: data?.buyerAddress?.city,
    area: data?.buyerAddress?.area,
    address: data?.buyerAddress?.address,
  });
  const { address: sellerAddress } = useAddress({
    province: data?.sellerAddress?.province,
    city: data?.sellerAddress?.city,
    area: data?.sellerAddress?.area,
    address: data?.sellerAddress?.address,
  });

  const target = useMemo(() => {
    if (owner === 'buyer') {
      return {
        consignee: `${data?.buyerAddress?.recipient ?? ''} ${data?.buyerAddress?.phone ?? ''}`,
        address: buyerAddress,
      };
    } else if (owner === 'seller') {
      return {
        consignee: `${data?.sellerAddress?.recipient ?? ''} ${data?.sellerAddress?.phone ?? ''}`,
        address: sellerAddress,
      };
    }
    return;
  }, [data, owner, buyerAddress, sellerAddress]);

  return (
    <BasicLayout title={orderStatusMap.get(Number(data?.status))?.text} back>
      <Section fill>
        <Product.Brief
          type={data?.type}
          image={data?.market?.product?.picList?.[0]?.url}
          title={data?.market?.title}
          desc={data?.market?.description}
          total={
            data?.type === OrderType['出售']
              ? data?.market?.sellingPrice
              : Big(data?.market?.leasePrice ?? 0)
                  .plus(data?.market?.leaseDeposit ?? 0)
                  .toString()
          }
        />
        {data?.type === OrderType['借调'] ? (
          <View className={styles.info}>
            <View className={styles.content}>
              <Descriptions
                options={[
                  { field: 'dateRange', label: '借调日期', col: 2 },
                  { field: 'leaseDeposit', label: '押金', col: 2 },
                  {
                    field: 'companyName',
                    label: '购买人',
                    col: 2,
                    hidden: owner === 'buyer',
                  },
                ]}
                data={{
                  dateRange: `${dayjs(data?.leaseStartDate).format(DATE_FORMAT)} ~ ${dayjs(data?.leaseEndDate).format(DATE_FORMAT)}`,
                  leaseDeposit: data?.market?.leaseDeposit
                    ? `¥${data?.market?.leaseDeposit}`
                    : undefined,
                  companyName: data?.buyer?.name,
                }}
                align="right"
              />
            </View>
          </View>
        ) : null}
        <View className={styles.info}>
          <View className={styles.content}>
            <Descriptions
              options={[
                { field: 'consignee', label: '收货人', col: 2 },
                { field: 'address', label: '收货地址', col: 2 },
              ]}
              data={{ consignee: target?.consignee, address: target?.address }}
              align="right"
            />
          </View>
        </View>
      </Section>
      {data?.type === OrderType['借调'] &&
      data?.status >= OrderStatus['已完成'] ? (
        <Section className={styles.section} title="确认返还">
          <Descriptions
            options={[
              { field: 'depositRefund', label: '退还押金', col: 2 },
              { field: 'depositRefundRemark', label: '备注', col: 2 },
              { field: 'time', label: '返还时间', col: 2 },
            ]}
            data={{
              depositRefund: data?.depositRefund
                ? `¥${data?.depositRefund}`
                : undefined,
              depositRefundRemark: data?.depositRefundRemark,
              time: data?.expressDelivery?.updateTime
                ? dayjs(data?.expressDelivery?.updateTime).format(
                    DATE_TIME_FORMAT,
                  )
                : undefined,
            }}
            align="right"
          />
        </Section>
      ) : null}
      {data?.type === OrderType['借调'] &&
      data?.status >= OrderStatus['返还退押'] ? (
        <Section className={styles.section} title="返还发货">
          <Descriptions
            options={[
              { field: 'no', label: '快递单号', col: 2 },
              { field: 'remark', label: '备注', col: 2 },
              { field: 'time', label: '发货时间', col: 2 },
            ]}
            data={{
              no: data?.expressReturn?.no ? (
                <Space>
                  {data?.expressReturn?.no}
                  <Icon
                    name="CopyOutlined"
                    size={16}
                    onClick={() => {
                      setClipboardData({ data: data?.expressReturn?.no });
                    }}
                  />
                </Space>
              ) : undefined,
              remark: data?.expressReturn?.remark,
              time: data?.expressReturn?.createTime
                ? dayjs(data?.expressReturn?.createTime).format(
                    DATE_TIME_FORMAT,
                  )
                : undefined,
            }}
            align="right"
          />
        </Section>
      ) : null}
      {(data?.type === OrderType['借调'] &&
        data?.status >= OrderStatus['返还退押']) ||
        (data?.type === OrderType['出售'] &&
          data?.status >= OrderStatus['已完成'] && (
            <Section className={styles.section} title="收货">
              <Descriptions
                options={[{ field: 'time', label: '收货时间', col: 2 }]}
                data={{
                  time: data?.expressDelivery?.updateTime
                    ? dayjs(data?.expressDelivery?.updateTime).format(
                        DATE_TIME_FORMAT,
                      )
                    : null,
                }}
                align="right"
              />
            </Section>
          ))}
      {data?.status >= OrderStatus['待发货'] && (
        <Section className={styles.section} title="发货">
          <Descriptions
            options={[
              { field: 'no', label: '快递单号', col: 2 },
              { field: 'remark', label: '备注', col: 2 },
              { field: 'time', label: '发货时间', col: 2 },
            ]}
            data={{
              no: data?.expressDelivery?.no ? (
                <Space>
                  {data?.expressDelivery?.no}
                  <Icon
                    name="CopyOutlined"
                    size={16}
                    onClick={() => {
                      setClipboardData({ data: data?.expressDelivery?.no });
                    }}
                  />
                </Space>
              ) : undefined,
              remark: data?.expressDelivery?.remark,
              time: data?.expressDelivery?.createTime
                ? dayjs(data?.expressDelivery?.createTime).format(
                    DATE_TIME_FORMAT,
                  )
                : undefined,
            }}
            align="right"
          />
        </Section>
      )}
      <Section className={styles.section} title="订单">
        <Descriptions
          options={[{ field: 'time', label: '购买时间', col: 2 }]}
          data={{ time: dayjs(data?.createTime).format(DATE_TIME_FORMAT) }}
          align="right"
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
