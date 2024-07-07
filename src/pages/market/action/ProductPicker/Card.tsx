import { Close } from '@nutui/icons-react-taro';
import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import styles from './Card.module.scss';

import type { FC } from 'react';

interface CardProps {
  pic?: string;
  name?: string;
  desc?: string;
  no?: string;
  selected?: boolean;
  closeable?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}

const Card: FC<CardProps> = ({
  pic,
  name,
  desc,
  no,
  selected = false,
  closeable = false,
  onClick,
  onClose,
}) => {
  return (
    <View
      className={classnames(styles.card, {
        [styles['card-selected']]: selected,
      })}
      onClick={onClick}
    >
      <Image
        className={styles['card-image']}
        src={pic}
        width={80}
        height={80}
        mode="aspectFill"
      />
      <View className={styles['card-name']}>{name}</View>
      <View className={styles['card-desc']}>{desc}</View>
      <View className={styles['card-no']}>{no}</View>
      {closeable && (
        <View className={styles['card-close']} onClick={onClose}>
          <Close size={10} />
        </View>
      )}
    </View>
  );
};

export default Card;
