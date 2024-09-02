import { View } from '@tarojs/components';

import styles from './index.module.scss';

import type { FC } from 'react';

import { Icon, Text } from '@/components';

interface PaymentProps {
  icon: string;
  color?: string;
  name?: string;
  owner?: string;
  account?: string;
  onClick?: () => void;
  onRemove?: () => void;
}

const Payment: FC<PaymentProps> = ({
  icon,
  color,
  name,
  owner,
  account,
  onClick,
  onRemove,
}) => {
  return (
    <View className={styles.payment} onClick={onClick}>
      <Icon
        className={styles['payment-icon']}
        name={icon}
        size={48}
        color={color}
      />
      <View className={styles['payment-content']}>
        <View className={styles['payment-content-name']}>{name}</View>
        <View className={styles['payment-content-owner']}>{owner}</View>
        <View className={styles['payment-content-account']}>{account}</View>
      </View>
      <Text.Link
        className={styles['payment-btn']}
        onClick={(e) => {
          e.stopPropagation();
          onRemove?.();
        }}
      >
        移除
      </Text.Link>
    </View>
  );
};

export default Payment;
