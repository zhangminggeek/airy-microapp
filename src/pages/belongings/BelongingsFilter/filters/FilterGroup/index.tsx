import { Checkbox } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import styles from './index.module.scss';

import type { CSSProperties } from 'react';

interface OptionItem<V extends string | number> extends Record<string, any> {
  label: string;
  value: V;
}

interface FilterGroupProps<V extends string | number> {
  className?: string;
  style?: CSSProperties;
  options?: Array<OptionItem<V>>;
  value?: V;
  onChange?: (value?: V, option?: OptionItem<V>) => void;
}

const FilterGroup = <V extends string | number>({
  className,
  style,
  options,
  value,
  onChange,
}: FilterGroupProps<V>) => {
  return (
    <View className={classnames(styles.group, className)} style={style}>
      {options?.map((item) => (
        <Checkbox
          key={item.value}
          label={item.label}
          shape="button"
          checked={item.value === value}
          onChange={(checked) => {
            // 当 checked 为 false 时，表示取消选中，此时 value 应该为 undefined
            onChange?.(checked ? item.value : undefined, item);
          }}
        />
      ))}
    </View>
  );
};

export default FilterGroup;
