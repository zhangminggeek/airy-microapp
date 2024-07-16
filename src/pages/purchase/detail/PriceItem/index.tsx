import { Text, View } from '@tarojs/components';
import { useMemo } from 'react';

import styles from './index.module.scss';

import type { FC } from 'react';

interface PriceItemProps {
  label: string;
  value?: [string | undefined, string | undefined];
}

const PriceItem: FC<PriceItemProps> = ({ label, value }) => {
  const price = useMemo(() => {
    if (!value || !Array.isArray(value)) return null;
    if (value[0] && value[1]) {
      return value.join('-');
    } else if (value[0]) {
      return `${value[0]}以上`;
    } else if (value[1]) {
      return `${value[0]}以下`;
    } else {
      return null;
    }
  }, []);

  return (
    <View className={styles.container}>
      <View className={styles.label}>{label}</View>
      <View className={styles.content}>
        <Text className={styles['content-unit']}>¥</Text>
        <Text className={styles['content-value']}>{price}</Text>
      </View>
    </View>
  );
};

export default PriceItem;
