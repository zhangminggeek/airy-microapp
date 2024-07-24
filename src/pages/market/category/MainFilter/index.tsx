import { View } from '@tarojs/components';
import { Fragment, useState } from 'react';

import styles from './index.module.scss';
import Option from './Option';

import { Icon } from '@/components';

interface OptionType<V extends number | string> {
  label: string;
  value: V;
  pic: string;
}

interface MainFilterProps<V extends number | string> {
  options: Array<OptionType<V>>;
  value?: V;
  onChange?: (value: V) => void;
}

const SIMPLE_SIZE = 5;

const MainFilter = <V extends string | number = number>({
  options,
  value,
  onChange,
}: MainFilterProps<V>) => {
  // 是否折叠
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <View className={styles.filter}>
      {collapsed ? (
        <View className={styles.simple}>
          <View className={styles['option-group']}>
            {options?.slice(0, SIMPLE_SIZE)?.map((item) => (
              <Option
                key={item.label}
                label={item.label}
                pic={item.pic}
                active={item.value === value}
                onClick={() => {
                  onChange?.(item.value);
                }}
              />
            ))}
          </View>
          {options?.length > SIMPLE_SIZE ? (
            <View
              className={styles['simple-btn']}
              onClick={() => {
                setCollapsed(false);
              }}
            >
              全部
              <Icon name="DoubleDownOutlined" size={12} />
            </View>
          ) : null}
        </View>
      ) : (
        <Fragment>
          <View className={styles.full}>
            <View className={styles['full-content']}>
              {options.map((item) => (
                <Option
                  key={item.label}
                  label={item.label}
                  pic={item.pic}
                  active={item.value === value}
                  onClick={() => {
                    onChange?.(item.value);
                  }}
                />
              ))}
            </View>
            <View
              className={styles['full-btn']}
              onClick={() => {
                setCollapsed(true);
              }}
            >
              点击收起
              <Icon name="DoubleUpOutlined" size={12} />
            </View>
          </View>
          <View className={styles.mark} />
        </Fragment>
      )}
    </View>
  );
};

export default MainFilter;
