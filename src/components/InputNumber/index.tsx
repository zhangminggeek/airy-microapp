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
          } else {
            v = v.replace(/\./g, '');
          }
          console.log('v', v);
          onChange?.(v);
          return v;
        }}
      />
      {suffix}
    </View>
  );
};

export default InputNumber;
