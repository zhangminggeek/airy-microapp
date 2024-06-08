import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import type { FC } from 'react';

interface IconItemProps {
  name?: string;
  icon?: string;
  iconSize?: number;
}

const IconItem: FC<IconItemProps> = ({ name, icon, iconSize = 32 }) => {
  return (
    <View className={styles.container}>
      <Image src={icon} width={iconSize} height={iconSize} />
      <View className={styles.name}>{name}</View>
    </View>
  );
};

export default IconItem;
