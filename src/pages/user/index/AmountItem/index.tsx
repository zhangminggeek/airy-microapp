import { View } from '@tarojs/components';

import styles from './index.module.scss';

import type { FC, ReactNode } from 'react';

interface AmountItemProps {
  title?: string;
  fontSize?: number;
  children?: ReactNode;
}

const AmountItem: FC<AmountItemProps> = ({ title, fontSize, children }) => {
  return (
    <View className={styles.container}>
      <View className={styles.content} style={{ fontSize }}>
        {children}
      </View>
      <View className={styles.title}>{title}</View>
    </View>
  );
};

export default AmountItem;
