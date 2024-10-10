import { TextArea } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { requestPayment, useDidShow, useRouter } from '@tarojs/taro';
import Big from 'big.js';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';

import type { PostOrderRequest } from '@/api';
import type { DateType } from '@/components/Picker/CalendarPicker';
import type { Dayjs } from 'dayjs';

import {
  getMarketId,
  postOrder,
  postOrderPayBalance,
  postOrderPayWechat,
} from '@/api';
import {
  Cell,
  Descriptions,
  Media,
  Picker,
  Product,
  Section,
  Space,
} from '@/components';
import { DATE_FORMAT } from '@/constants';
import { PaymentType } from '@/constants/company';
import { expressMethodMap } from '@/constants/market';
import { OrderType } from '@/constants/order';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

interface PageParams {
  id: string; // market 表 id
  type: OrderType;
}

const Page = () => {
  const { id, type } = useRouter().params as unknown as PageParams;

  // 收货地址id
  const [addressId, setAddressId] = useState<number>();
  // 借调日期选择过程中开始日期
  const [startDate, setStartDate] = useState<Dayjs>();
  // 借调日期
  const [leaseDate, setLeaseDate] = useState<[Dayjs, Dayjs]>();
  // 备注
  const [remark, setRemark] = useState<string>();
  // 是否显示支付方式选择弹框
  const [showPaymentPicker, setShowPaymentPicker] = useState<boolean>(false);

  useDidShow(() => {
    fetchDetail({ id });
  });

  // 获取详情
  const { data, run: fetchDetail } = useRequest(getMarketId, { manual: true });

  // 创建订单
  const { run: create } = useRequest(postOrder, { manual: true });

  // 余额支付订单
  const { run: payOrderViaBalance } = useRequest(postOrderPayBalance, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateTo('/packageOrder/pages/create/result/index');
    },
  });

  // 微信支付订单
  const { run: payOrderViaWechat } = useRequest(postOrderPayWechat, {
    manual: true,
    onSuccess(data, params) {
      const { timestamp, nonceStr, pkg, paySign } = data;
      requestPayment({
        timeStamp: timestamp.toString(),
        nonceStr,
        package: pkg,
        signType: 'RSA',
        paySign,
        success() {
          RouterUtil.navigateTo('/packageOrder/pages/create/result/index', {
            orderId: params?.id,
          });
        },
        fail(err) {
          console.log('requestPayment fail', err);
        },
      });
    },
  });

  const info = useMemo(() => {
    const _type = Number(type);
    return {
      type: _type,
      title: _type === OrderType['出售'] ? '购买' : '借调',
      price:
        _type === OrderType['出售'] ? data?.sellingPrice : data?.leasePrice,
      deposit: data?.leaseDeposit,
      express: expressMethodMap.get(data?.expressMethod)?.text,
      total:
        _type === OrderType['出售']
          ? data?.sellingPrice
          : Big(data?.leasePrice ?? 0)
              .plus(data?.leaseDeposit ?? 0)
              .toFixed(2),
    };
  }, [type, data]);

  return (
    <BasicLayout
      title={`确认${info.title}`}
      back
      footer={{
        extra: (
          <Space className={styles['footer-price']}>
            <Text>实付</Text>
            <Product.SellingPrice value={info?.total} />
          </Space>
        ),
        btnText: `确认${info.title}`,
        onConfirm: () => {
          if (!addressId) {
            Toast.info('请选择收货地址');
            return;
          }
          if (info.type === OrderType['借调'] && !leaseDate?.length) {
            Toast.info('请选择借调时间');
            return;
          }
          setShowPaymentPicker(true);
        },
      }}
    >
      <Section fill>
        <Picker.Address
          placeholder="请选择收货地址"
          value={addressId}
          onLoad={(v) => {
            const defaultAddress = v.find((item) => item.isDefault);
            if (defaultAddress) {
              setAddressId(defaultAddress?.id);
            }
          }}
          onChange={(v) => {
            setAddressId(v);
          }}
        />
      </Section>
      {info.type === OrderType['借调'] && (
        <Section fill>
          <Cell label="借调日期">
            <Picker.Calendar
              type="range"
              value={leaseDate}
              disableDate={(date) => {
                console.log('date', date);
                if (!startDate) return false;
                // @ts-expect-error: UI库类型错误
                const { year, month, day } = date;
                if (!year || !month || !day) return false;
                const d = dayjs()
                  .year(year as number)
                  .month((month as number) - 1)
                  .date(day as number)
                  .startOf('d');
                if (
                  d.isAfter(startDate.subtract(7, 'd')) &&
                  d.isBefore(startDate.add(7, 'd'))
                ) {
                  return false;
                }
                return true;
              }}
              onDayClick={(d) => {
                const [year, month, date] = (d[0] ?? []) as unknown as DateType;
                setStartDate(
                  dayjs()
                    .year(Number(year))
                    .month(Number(month) - 1)
                    .date(Number(date))
                    .startOf('d'),
                );
              }}
              onChange={(v: [Dayjs, Dayjs]) => {
                setLeaseDate(v);
              }}
            />
          </Cell>
        </Section>
      )}
      <Section
        className={styles['section-product']}
        style={{ paddingBottom: 0 }}
        title="产品"
      >
        <Cell.Group>
          <Cell>
            <View className={styles.product}>
              <Media
                className={styles['product-image']}
                src={data?.product?.picList?.[0]?.url}
                mode="aspectFill"
              />
              <View className={styles['product-title']}>{data?.title}</View>
              <View className={styles['product-price']}>
                <Product.SellingPrice value={info?.price} />
                {info.type === OrderType['借调'] && (
                  <Product.LeasePrice iconOnly />
                )}
              </View>
            </View>
          </Cell>
          <Cell>
            <Descriptions
              options={[
                { label: '商品金额', field: 'price', col: 2 },
                {
                  label: '押金',
                  field: 'deposit',
                  col: 2,
                  hidden: info.type === OrderType['出售'],
                },
                { label: '运费', field: 'express', col: 2 },
              ]}
              data={{
                price: `¥${info.price}`,
                deposit: `¥${info.deposit}`,
                express: info.express,
              }}
              align="right"
              colon={false}
            />
          </Cell>
          <Cell>
            <Descriptions
              options={[{ label: '合计', field: 'total', col: 2 }]}
              data={{ total: `¥${info.total}` }}
              align="right"
              colon={false}
            />
          </Cell>
        </Cell.Group>
      </Section>
      <Section className={styles['section-remark']} title="备注">
        <TextArea
          placeholder="请输入内容"
          maxLength={255}
          onChange={(v) => {
            setRemark(v);
          }}
        />
      </Section>
      <Picker.Payment
        visible={showPaymentPicker}
        amount={info.total}
        onConfirm={async (v) => {
          setShowPaymentPicker(false);
          const params: PostOrderRequest = {
            id: Number(id),
            type: info.type,
            remark,
            buyerAddressId: addressId!,
          };
          if (info.type === OrderType['借调']) {
            params.leaseStartDate = leaseDate?.[0].format(DATE_FORMAT);
            params.leaseEndDate = leaseDate?.[1].format(DATE_FORMAT);
          }
          const { data: orderId } = await create(params);
          if (v === PaymentType['余额']) {
            payOrderViaBalance({ id: orderId });
          } else if (v === PaymentType['微信支付']) {
            payOrderViaWechat({ id: orderId });
          }
        }}
        onClose={() => {
          setShowPaymentPicker(false);
        }}
      />
    </BasicLayout>
  );
};

export default Page;
