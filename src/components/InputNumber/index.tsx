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
  decimalDigits?: number;
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
  decimalDigits = 2,
  value,
  onChange,
  ...rest
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
          v = v.replace(/[^(\d-.)]/g, '');
          // 处理负数
          if (!allowNegative) {
            v = v.replace(/-/g, '');
          } else if (allowNegative && v.startsWith('-')) {
            v = `-${v.replace(/-/g, '')}`;
          }
          // 处理小数
          if (allowDecimal) {
            const parts = v.split('.');
            if (parts.length > 2) {
              const [integer, ...rest] = parts;
              // 如果有多于一个小数点，重构字符串，只保留第一个小数点
              v = `${integer}.${rest.join('')}`;
            }
            // 如果小数位数超过限制，截取小数位数
            const decimalDigitsOfValue = v.split('.')[1]?.length ?? 0;
            if (decimalDigitsOfValue > decimalDigits) {
              v = v.slice(0, v.length - (decimalDigitsOfValue - decimalDigits));
            }
          } else {
            v = v.replace(/\./g, '');
          }
          onChange?.(v);
          return v;
        }}
        {...rest}
      />
      {suffix}
    </View>
  );
};

export default InputNumber;
