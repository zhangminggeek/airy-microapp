import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import styles from './index.module.scss';

import type { FC } from 'react';

export interface OptionProps {
  label: string;
  pic: string;
  active?: boolean;
  onClick?: () => void;
}

const Option: FC<OptionProps> = ({ label, pic, active = false, onClick }) => {
  return (
    <View
      className={classnames(styles.option, { [styles.active]: active })}
      onClick={onClick}
    >
      <View className={styles['image-wrapper']}>
        <Image
          className={styles.image}
          src={pic}
          width={44}
          height={44}
          mode="aspectFill"
        />
      </View>
      <View className={styles.label}>{label}</View>
    </View>
  );
};

export default Option;
