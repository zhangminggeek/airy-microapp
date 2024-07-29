import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties } from 'react';

import './index.scss';

const PREFIX_CLS = 'm-tag-checker';

export interface TagCheckerProps<V extends string | number = number> {
  className?: string;
  style?: CSSProperties;
  options: Array<{ text: string; value: V }>;
  multiple?: boolean;
  wrap?: boolean;
  allowEmpty?: boolean;
  value?: V[];
  onChange?: (value?: V[]) => void;
}

const TagChecker = <V extends string | number>({
  className,
  style,
  options = [],
  multiple = false,
  wrap = true,
  allowEmpty = true,
  value = [],
  onChange,
}: TagCheckerProps<V>) => {
  const handleChange = (v: V) => {
    const checked = value?.includes(v) ?? false;
    if (multiple) {
      if (checked) {
        if (value?.length <= 1 && !allowEmpty) return;
        onChange?.(value?.filter((item) => item !== v));
      } else {
        onChange?.([...value, v]);
      }
    } else {
      if (checked) {
        if (!allowEmpty) return;
        onChange?.([]);
      } else {
        onChange?.([v]);
      }
    }
  };

  return (
    <View
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-wrap`]: wrap },
        className,
      )}
      style={style}
    >
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
