import { View } from '@tarojs/components';
import { Fragment, useState } from 'react';

import styles from './index.module.scss';
import Option from './Option';

import type { FC } from 'react';

import { Icon } from '@/components';

interface OptionType {
  label: string;
  value: string;
  pic: string;
}

interface MainFilterProps {
  options: OptionType[];
}

const MainFilter: FC<MainFilterProps> = ({ options }) => {
  // 是否折叠
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <View className={styles.filter}>
      {collapsed ? (
        <View className={styles.simple}>
          <View>collapsed</View>
          <View
            onClick={() => {
              setCollapsed(false);
            }}
          >
            全部
            <Icon name="DoubleDownOutlined" />
          </View>
        </View>
      ) : (
        <Fragment>
          <View className={styles.full}>
            <View className={styles['full-content']}>
              {options.map((item) => (
                <Option label={item.label} pic={item.pic} />
              ))}
            </View>
            <View
              className={styles['full-btn']}
              onClick={() => {
                setCollapsed(true);
              }}
            >
              点击收起
              <Icon name="DoubleUpOutlined" />
            </View>
          </View>
          <View className={styles.mark} />
        </Fragment>
      )}
    </View>
  );
};

export default MainFilter;
