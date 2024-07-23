import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import type { FC } from 'react';

export interface OptionProps {
  label: string;
  pic: string;
}

const Option: FC<OptionProps> = ({ label, pic }) => {
  return (
    <View className={styles.option}>
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
