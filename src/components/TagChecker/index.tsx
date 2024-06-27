import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties } from 'react';

import './index.scss';

const PREFIX_CLS = 'm-tag-checker';

interface TagCheckerProps<V extends string | number = number> {
  className?: string;
  style?: CSSProperties;
  options: Array<{ text: string; value: V }>;
  multiple?: boolean;
  value?: V[];
  onChange?: (value?: V[]) => void;
}

const TagChecker = <V extends string | number>({
  className,
  style,
  options = [],
  multiple = false,
  value = [],
  onChange,
}: TagCheckerProps<V>) => {
  const handleChange = (v: V) => {
    if (multiple) {
      const newValue = value?.includes(v)
        ? value?.filter((item) => item !== v)
        : [...value, v];
      onChange?.(newValue);
    } else {
      onChange?.(value?.includes(v) ? [] : [v]);
    }
  };

  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      {options?.map((item) => (
        <View
          key={item.value}
          className={classnames(`${PREFIX_CLS}-item`, {
            [`${PREFIX_CLS}-item-checked`]: value?.includes(item.value),
          })}
          onClick={() => {
            handleChange(item.value);
          }}
        >
          {item.text}
        </View>
      ))}
    </View>
  );
};

export default TagChecker;
