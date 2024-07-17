import { Text, View } from '@tarojs/components';
import { useMemo } from 'react';

import styles from './index.module.scss';

import type { FC } from 'react';

import { formatPriceRange } from '@/utils';

interface PriceItemProps {
  label: string;
  value?: [string | undefined, string | undefined];
}

const PriceItem: FC<PriceItemProps> = ({ label, value }) => {
  const price = useMemo(() => formatPriceRange(value), [value]);

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
