import { Button, Popup, SafeArea } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Big from 'big.js';
import classnames from 'classnames';
import { useEffect, useMemo, useState } from 'react';

import type { PopupProps } from '@nutui/nutui-react-taro';
import type { CSSProperties, FC } from 'react';

import { getCompanySelf } from '@/api';
import { Icon } from '@/components';
import { PaymentType } from '@/constants/company';
import { useRequest } from '@/hooks';
import { isNil, Toast } from '@/utils';

import './index.scss';

interface PaymentPickerProps {
  className?: string;
  style?: CSSProperties;
  visible?: PopupProps['visible'];
  amount?: string;
  onConfirm?: (type: PaymentType) => void;
  onClose?: PopupProps['onClose'];
}

const PREFIX_CLS = 'm-payment-picker';

const PaymentPicker: FC<PaymentPickerProps> = ({
  className,
  style,
  visible,
  amount,
  onConfirm,
  onClose,
}) => {
  const [payment, setPayment] = useState<PaymentType>();

  useEffect(() => {
    if (visible) {
      run();
    }
  }, [visible]);

  // 获取余额
  const { data, run } = useRequest(getCompanySelf, { manual: true });

  const options = useMemo(() => {
    return [
      {
        name: '余额',
        icon: 'IncomeFilled',
        color: '#F76793',
        value: PaymentType['余额'],
        desc: data?.balance ?? 0,
        disabled: Big(amount ?? 0).gt(data?.balance ?? 0),
      },
      {
        name: '微信支付',
        icon: 'WechatPayFilled',
        color: '#00c250',
        value: PaymentType['微信支付'],
      },
    ];
  }, [amount, data]);

  return (
    <Popup
      className={classnames(PREFIX_CLS, className)}
      style={style}
      visible={visible}
      position="bottom"
      closeable
      onClose={onClose}
    >
      <View className={`${PREFIX_CLS}-body`}>
        <View className={`${PREFIX_CLS}-body-amount`}>
          <View className={`${PREFIX_CLS}-body-amount-title`}>支付金额</View>
          <View className={`${PREFIX_CLS}-body-amount-num`}>
            <Text className={`${PREFIX_CLS}-body-amount-num-unit`}>¥</Text>
            <Text className={`${PREFIX_CLS}-body-amount-num-value`}>
              {amount}
            </Text>
          </View>
        </View>
        <View className={`${PREFIX_CLS}-body-payment`}>
          <View className={`${PREFIX_CLS}-body-payment-title`}>支付方式</View>
          <View className={`${PREFIX_CLS}-body-payment-list`}>
            {options.map((item) => (
              <View
                key={item.value}
                className={`${PREFIX_CLS}-body-payment-list-item`}
                onClick={() => {
                  if (item.disabled) return;
                  setPayment(item.value);
                }}
              >
                <Icon
                  className={`${PREFIX_CLS}-body-payment-list-item-icon`}
                  name="IncomeFilled"
                  size={24}
                  color={item.disabled ? '#c7c7c7' : item.color}
                />
                <View
                  className={classnames(
                    `${PREFIX_CLS}-body-payment-list-item-content`,
                    {
                      [`${PREFIX_CLS}-body-payment-list-item-content-disabled`]:
                        item.disabled,
                    },
                  )}
                >
                  <View
                    className={`${PREFIX_CLS}-body-payment-list-item-content-name`}
                  >
                    {item.name}
                  </View>
                  {!isNil(item.desc) && (
                    <View
                      className={`${PREFIX_CLS}-body-payment-list-item-content-desc`}
                    >
                      {`剩余: ¥${item.desc}`}
                    </View>
                  )}
                </View>
                {item.value === payment ? (
                  <Icon
                    className={`${PREFIX_CLS}-body-payment-list-item-check`}
                    name="CheckOutlined"
                    size={18}
                  />
                ) : null}
              </View>
            ))}
          </View>
        </View>
        <Button
          type="primary"
          size="xlarge"
          block
          onClick={() => {
            if (!payment) {
              Toast.info('请选择支付方式');
              return;
            }
            onConfirm?.(payment);
          }}
        >
          确认付款
        </Button>
      </View>
      <SafeArea position="bottom" />
    </Popup>
  );
};

export default PaymentPicker;
