import { Input, View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

export interface InputNumberProps {
  className?: string;
  style?: CSSProperties;
  prefix?: ReactNode;
  suffix?: ReactNode;
  placeholder?: string;
  allowNegative?: boolean;
  allowDecimal?: boolean;
  value?: string;
  onChange?: (value?: string) => void;
}

const PREFIX_CLS = 'm-input-number';

const InputNumber: FC<InputNumberProps> = ({
  className,
  style,
  prefix,
  suffix,
  placeholder,
  allowNegative = false,
  allowDecimal = true,
  value,
  onChange,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      {prefix}
      <Input
        className={`${PREFIX_CLS}-input`}
        type={allowDecimal ? 'digit' : 'number'}
        placeholder={placeholder}
        value={value}
        onInput={(e) => {
          let v = e.detail.value;
          v = v.replace(/[^\d]/g, '');
          if (!allowNegative && v.startsWith('-')) {
            v = v.replace('-', '');
          }
          if (!allowDecimal && v.includes('.')) {
            v = v.replace('.', '');
          }
          onChange?.(v);
          return v;
        }}
      />
      {suffix}
    </View>
  );
};

export default InputNumber;
