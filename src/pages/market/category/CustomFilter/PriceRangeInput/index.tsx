import { Text, View } from '@tarojs/components';

import styles from './index.module.scss';

import type { FC } from 'react';

import { InputNumber } from '@/components';

type ValueType = [string | undefined, string | undefined];

interface PriceRangeInputProps {
  value?: ValueType;
  onChange?: (v: ValueType) => void;
}

const PriceRangeInput: FC<PriceRangeInputProps> = ({ value, onChange }) => {
  return (
    <View className={styles.container}>
      <InputNumber
        className={styles.input}
        value={value?.[0]}
        onChange={(v) => {
          onChange?.([v, value?.[1]]);
        }}
      />
      <Text className={styles.divider}>-</Text>
      <InputNumber
        className={styles.input}
        value={value?.[1]}
        onChange={(v) => {
          onChange?.([value?.[0], v]);
        }}
      />
    </View>
  );
};

export default PriceRangeInput;
