import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import Big from 'big.js';
import dayjs from 'dayjs';
import { Fragment, useMemo } from 'react';

import styles from './index.module.scss';

import { getOrderId } from '@/api';
import {
  Company,
  Descriptions,
  Footer,
  Icon,
  Product,
  Section,
  Space,
  Text,
} from '@/components';
import { DATE_FORMAT, DATE_TIME_FORMAT, UserType } from '@/constants';
import {
  OrderExpressType,
  OrderStatus,
  orderStatusMap,
  OrderType,
} from '@/constants/order';
import { useAddress, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import useOrderAction from '@/pages/user/bought/useOrderAction';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  /**
   * @param id 订单 ID
   * @param owner 订单拥有者 UserType
   */
  const { id, owner } = useRouter().params;

  // 获取订单详情
  const { data, run } = useRequest(getOrderId, {
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

  const {
    renderPopup,
    setShowCustomerServicePopup,
    openDialogConfirmReceive,
    setShowPaymentPicker,
    openDialogCancel,
  } = useOrderAction({
    order: data,
    refresh: () => {
      run({ id });
    },
  });

  const actions = useMemo(() => {
    if (owner === UserType['买家']) {
      return new Map([
        [
          OrderStatus['待付款'],
          <Fragment>
            <Button
              key="cancel"
              onClick={() => {
                openDialogCancel({ params: { id } });
              }}
            >
              取消订单
            </Button>
            <Button
              key="payment"
              type="primary"
              onClick={() => {
                setShowPaymentPicker(true);
              }}
            >
              付款
            </Button>
          </Fragment>,
        ],
        [
          OrderStatus['待发货'],
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
        [
          OrderStatus['待收货'],
          <Button
            type="primary"
            size="small"
            onClick={() => {
              openDialogConfirmReceive({ params: { id } });
            }}
          >
            确认收货
          </Button>,
        ],
        [
          OrderStatus['返还退押'],
          data?.expressReturnId ? (
            <Button size="small" fill="solid" disabled>
              退押中
            </Button>
          ) : (
            <Button
              size="small"
              onClick={() => {
                RouterUtil.navigateTo('/packageOrder/pages/deliver/index', {
                  id,
                  addressId: data?.sellerAddressId,
                  type: OrderExpressType['返还'],
                });
              }}
            >
              返还发货
            </Button>
          ),
        ],
      ]);
    } else if (owner === UserType['卖家']) {
      return new Map([
        [
          OrderStatus['待发货'],
          <Button
            key="deliver"
            type="primary"
            size="small"
            onClick={() => {
              RouterUtil.navigateTo('/packageOrder/pages/deliver/index', {
                id,
                addressId: data?.buyerAddressId,
                type: OrderExpressType['发货'],
              });
            }}
          >
            去发货
          </Button>,
        ],
        [
          OrderStatus['返还退押'],
          data?.expressReturnId ? (
            <Button
              size="small"
              onClick={() => {
                RouterUtil.navigateTo('/packageOrder/pages/return/index', {
                  id,
                });
              }}
            >
              确认返还
            </Button>
          ) : null,
        ],
      ]);
    } else {
      return;
    }
  }, [id, data, owner]);

  return (
    <BasicLayout title={orderStatusMap.get(Number(data?.status))?.text} back>
      <View className={styles.content}>
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
              <View className={styles['info-content']}>
                <Descriptions
                  options={[
                    { field: 'dateRange', label: '借调日期', col: 2 },
                    { field: 'leaseDeposit', label: '押金', col: 2 },
                    {
                      field: 'companyName',
                      label: '购买人',
                      col: 2,
                      hidden: owner === UserType['买家'],
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
            <View className={styles['info-content']}>
              <Descriptions
                options={[
                  { field: 'consignee', label: '收货人', col: 2 },
                  { field: 'address', label: '收货地址', col: 2 },
                ]}
                data={{
                  consignee: `${data?.buyerAddress?.recipient ?? ''} ${data?.buyerAddress?.phone ?? ''}`,
                  address: buyerAddress,
                }}
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
                time: data?.expressReturn?.updateTime
                  ? dayjs(data?.expressReturn?.updateTime).format(
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
                {
                  field: 'no',
                  label: '快递单号',
                  col: 2,
                  render(v) {
                    return (
                      <Text.Copy
                        text={v}
                        onCopied={() => {
                          Toast.info('快递单号复制成功');
                        }}
                      />
                    );
                  },
                },
                { field: 'remark', label: '备注', col: 2 },
                { field: 'time', label: '发货时间', col: 2 },
              ]}
              data={{
                no: data?.expressReturn?.no,
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
          data?.status >= OrderStatus['已完成']) ? (
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
        ) : null}
        {data?.status > OrderStatus['待发货'] ? (
          <Section className={styles.section} title="发货">
            <Descriptions
              options={[
                {
                  field: 'no',
                  label: '快递单号',
                  col: 2,
                  render(v) {
                    return (
                      <Text.Copy
                        text={v}
                        onCopied={() => {
                          Toast.info('快递单号复制成功');
                        }}
                      />
                    );
                  },
                },
                { field: 'remark', label: '备注', col: 2 },
                { field: 'time', label: '发货时间', col: 2 },
              ]}
              data={{
                no: data?.expressDelivery?.no,
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
        ) : null}
        <Section className={styles.section} title="订单">
          <Descriptions
            options={[
              {
                field: 'no',
                label: '订单编号',
                col: 2,
                render(v) {
                  return (
                    <Text.Copy
                      text={v}
                      onCopied={() => {
                        Toast.info('订单编号复制成功');
                      }}
                    />
                  );
                },
              },
              { field: 'remark', label: '订单备注', col: 2 },
              { field: 'time', label: '购买时间', col: 2 },
              {
                field: 'company',
                label: '商家信息',
                col: 2,
                render(v) {
                  return (
                    <Space
                      size={4}
                      onClick={() => {
                        RouterUtil.navigateTo(
                          '/packageCompany/pages/index/index',
                          { id: v.id },
                        );
                      }}
                    >
                      <Company logo={v?.logo} name={v?.name} block={false} />
                      <Icon name="RightOutlined" size={14} color="#7c7c7c" />
                    </Space>
                  );
                },
              },
              {
                field: 'consignee',
                label: '商家联系方式',
                col: 2,
                hidden: data?.type === OrderType['出售'],
              },
              {
                field: 'address',
                label: '商家收货地址',
                col: 2,
                hidden: data?.type === OrderType['出售'],
              },
            ]}
            data={{
              no: data?.no,
              remark: data?.remark,
              time: dayjs(data?.createTime).format(DATE_TIME_FORMAT),
              company: data?.seller,
              consignee: `${data?.sellerAddress?.recipient ?? ''} ${data?.sellerAddress?.phone ?? ''}`,
              address: sellerAddress,
            }}
            align="right"
          />
        </Section>
      </View>
      <Footer className={styles.footer}>
        <View className={styles['footer-content']}>
          <Button openType="contact" size="small">
            联系客服
          </Button>
          {actions?.get(data?.status)}
        </View>
      </Footer>
      {renderPopup()}
    </BasicLayout>
  );
};

export default Page;
