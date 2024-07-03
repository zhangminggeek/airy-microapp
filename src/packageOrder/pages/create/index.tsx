import { Button, Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { requestPayment, useDidShow, useRouter } from '@tarojs/taro';
import Big from 'big.js';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';

import type { PostOrderRequest } from '@/api';
import type { Dayjs } from 'dayjs';

import { getMarketId, postOrder } from '@/api';
import {
  AddressPicker,
  CalenderPicker,
  Cell,
  Descriptions,
  PageFooter,
  Product,
  Section,
  Space,
} from '@/components';
import { DATE_FORMAT } from '@/constants';
import { deliveryMethodMap } from '@/constants/market';
import { OrderType } from '@/constants/order';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { Toast } from '@/utils';

interface PageParams {
  id: string; // market 表 id
  type: OrderType;
}

const Page = () => {
  const { id, type } = useRouter().params as unknown as PageParams;

  // 收货地址id
  const [addressId, setAddressId] = useState<number>();
  // 借调日期
  const [leaseDate, setLeaseDate] = useState<[Dayjs, Dayjs]>();

  useDidShow(() => {
    fetchDetail({ id });
  });

  // 获取详情
  const { data, run: fetchDetail } = useRequest(getMarketId, { manual: true });

  // 创建订单
  const { run: create } = useRequest(postOrder, {
    manual: true,
    onSuccess(data) {
      const { timestamp, nonceStr, pkg, paySign } = data;
      requestPayment({
        timeStamp: timestamp.toString(),
        nonceStr,
        package: pkg,
        signType: 'RSA',
        paySign,
        success(res) {
          console.log(res);
          Toast.success('支付成功');
        },
        fail(err) {
          console.log(err);
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
      delivery: deliveryMethodMap.get(data?.deliveryMethod)?.text,
      total:
        _type === OrderType['出售']
          ? data?.sellingPrice
          : Big(data?.leasePrice ?? 0).plus(data?.leaseDeposit ?? 0),
    };
  }, [type, data]);

  return (
    <BasicLayout title={`确认${info.title}`} back>
      <Section fill>
        <AddressPicker
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
            <CalenderPicker
              type="range"
              value={leaseDate}
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
              <Image
                className={styles['product-image']}
                src={data?.product?.picList?.[0]?.url}
                width={72}
                height={72}
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
                { label: '运费', field: 'delivery', col: 2 },
              ]}
              data={{
                price: info.price,
                deposit: info.deposit,
                delivery: info.delivery,
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
      <PageFooter className={styles.footer}>
        <Space className={styles['footer-price']}>
          <Text>实付</Text>
          <Product.SellingPrice value={info?.price} />
        </Space>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            if (!addressId) {
              Toast.info('请选择收货地址');
              return;
            }
            const params: PostOrderRequest = {
              id: Number(id),
              type: info.type,
              buyerAddressId: addressId,
            };
            if (info.type === OrderType['借调']) {
              if (!leaseDate?.length) {
                Toast.info('请选择借调时间');
                return;
              }
              params.leaseStartDate = leaseDate[0].format(DATE_FORMAT);
              params.leaseEndDate = leaseDate[1].format(DATE_FORMAT);
            }
            create(params);
          }}
        >
          确认{info.title}
        </Button>
      </PageFooter>
    </BasicLayout>
  );
};

export default Page;
