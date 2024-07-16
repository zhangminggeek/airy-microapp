import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { InputNumberProps } from '@/components/InputNumber';
import type { CSSProperties, FC, ReactNode } from 'react';

import { InputNumber } from '@/components';

import './index.scss';

type ValueType = [string | undefined, string | undefined];

interface InputNumberRangeProps {
  className?: string;
  style?: CSSProperties;
  prefix?: [InputNumberProps['prefix'], InputNumberProps['prefix']];
  suffix?: [InputNumberProps['suffix'], InputNumberProps['suffix']];
  value?: ValueType;
  placeholder?: [
    InputNumberProps['placeholder'],
    InputNumberProps['placeholder'],
  ];
  split?: ReactNode;
  onChange?: (value?: ValueType) => void;
}

const PREFIX_CLS = 'm-input-number-range';

const InputNumberRange: FC<InputNumberRangeProps> = ({
  className,
  style,
  prefix = [],
  suffix = [],
  value,
  placeholder = [],
  split = '-',
  onChange,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <InputNumber
        className={`${PREFIX_CLS}-input`}
        prefix={prefix?.[0]}
        suffix={suffix?.[0]}
        placeholder={placeholder?.[0]}
        value={value?.[0]}
        onChange={(v) => {
          onChange?.([v, value?.[1]]);
        }}
      />
      <View className={`${PREFIX_CLS}-split`}>{split}</View>
      <InputNumber
        className={`${PREFIX_CLS}-input`}
        prefix={prefix?.[1]}
        suffix={suffix?.[1]}
        placeholder={placeholder?.[1]}
        value={value?.[1]}
        onChange={(v) => {
          onChange?.([value?.[0], v]);
        }}
      />
    </View>
  );
};

export default InputNumberRange;
