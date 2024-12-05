import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import type { FC, ReactNode } from 'react';

interface ItemProps {
  title: string;
  desc: string;
  extra?: ReactNode;
  completed?: boolean;
}

const Item: FC<ItemProps> = ({ title, desc, extra, completed = false }) => {
  return (
    <View className={styles.container}>
      <View className={styles.title}>{title}</View>
      <View className={styles.desc}>{desc}</View>
      <View className={styles.status}>
        {extra ?? (
          <Button
            className={styles.completed}
            type="primary"
            size="small"
            fill={completed ? 'outline' : 'solid'}
            color="#FE4320"
          >
            {completed ? '已完成' : '未完成'}
          </Button>
        )}
      </View>
    </View>
  );
};

export default Item;
