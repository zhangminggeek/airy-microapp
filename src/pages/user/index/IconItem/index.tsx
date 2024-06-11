import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import type { FC } from 'react';

import { RouterUtil } from '@/utils';

interface IconItemProps {
  name?: string;
  icon?: string;
  iconSize?: number;
  to?: string;
  onClick?: () => void;
}

const IconItem: FC<IconItemProps> = ({
  name,
  icon,
  iconSize = 32,
  to,
  onClick,
}) => {
  return (
    <View
      className={styles.container}
      onClick={() => {
        if (onClick) {
          onClick();
        } else if (to) {
          RouterUtil.navigateTo(to);
        }
      }}
    >
      <Image src={icon} width={iconSize} height={iconSize} />
      <View className={styles.name}>{name}</View>
    </View>
  );
};

export default IconItem;
