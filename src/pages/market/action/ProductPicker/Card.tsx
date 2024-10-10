import { View } from '@tarojs/components';
import classnames from 'classnames';

import styles from './Card.module.scss';

import type { FC } from 'react';

import { Icon, Media, Text } from '@/components';

interface CardProps {
  pic?: string;
  name?: string;
  desc?: string;
  no?: string;
  selected?: boolean;
  editable?: boolean;
  closeable?: boolean;
  onClick?: () => void;
  onEdit?: () => void;
  onClose?: () => void;
}

const Card: FC<CardProps> = ({
  pic,
  name,
  desc,
  no,
  selected = false,
  editable = false,
  closeable = false,
  onClick,
  onEdit,
  onClose,
}) => {
  return (
    <View
      className={classnames(styles.card, {
        [styles['card-selected']]: selected,
      })}
      onClick={onClick}
    >
      <Media
        className={styles['card-image']}
        src={pic}
        mode="aspectFill"
        controls={false}
      />
      <View className={styles['card-name']}>{name}</View>
      <View className={styles['card-desc']}>{desc}</View>
      <View className={styles['card-no']}>{no}</View>
      {editable && (
        <Text.Link className={styles['card-edit']} onClick={onEdit}>
          编辑
        </Text.Link>
      )}
      {closeable && (
        <View className={styles['card-close']} onClick={onClose}>
          <Icon
            className={styles['card-close-icon']}
            name="CloseOutlined"
            size={10}
          />
        </View>
      )}
    </View>
  );
};

export default Card;
