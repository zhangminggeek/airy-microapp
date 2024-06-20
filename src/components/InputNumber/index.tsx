import { Input, View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

interface InputNumberProps {
  className?: string;
  style?: CSSProperties;
  prefix?: ReactNode;
  suffix?: ReactNode;
  value?: string;
  onChange?: (value?: string) => void;
}

const PREFIX_CLS = 'm-input-number';

const InputNumber: FC<InputNumberProps> = ({
  className,
  style,
  prefix,
  suffix,
  value,
  onChange,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      {prefix}
      <Input
        type="digit"
        value={value}
        onInput={(e) => {
          onChange?.(e.detail.value);
        }}
      />
      {suffix}
    </View>
  );
};

export default InputNumber;
