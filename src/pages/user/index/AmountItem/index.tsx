import { View } from '@tarojs/components';

import styles from './index.module.scss';

import type { ITouchEvent } from '@tarojs/components';
import type { FC, ReactNode } from 'react';

interface AmountItemProps {
  title?: ReactNode;
  fontSize?: number;
  children?: ReactNode;
  onClick?: (e: ITouchEvent) => void;
}

const AmountItem: FC<AmountItemProps> = ({
  title,
  fontSize,
  children,
  onClick,
}) => {
  return (
    <View className={styles.container} onClick={onClick}>
      <View className={styles.content} style={{ fontSize }}>
        {children}
      </View>
      <View className={styles.title}>{title}</View>
    </View>
  );
};

export default AmountItem;
