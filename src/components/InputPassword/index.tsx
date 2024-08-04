import { Input, View } from '@tarojs/components';
import classnames from 'classnames';
import { useState } from 'react';

import type { InputProps } from '@tarojs/components';
import type { FC } from 'react';

import { Icon } from '@/components';

import './index.scss';

interface InputPasswordProps
  extends Partial<Omit<InputProps, 'type' | 'onInput'>> {
  onChange?: (v: string) => void;
}

const PREFIX_CLS = 'm-input-password';

const InputPassword: FC<InputPasswordProps> = ({
  className,
  onChange,
  ...rest
}) => {
  const [type, setType] = useState<'text' | 'password'>('password');

  return (
    <View className={classnames(PREFIX_CLS, className)}>
      <Input
        className={`${PREFIX_CLS}-input`}
        placeholder="请输入密码"
        type={type as any}
        password={type === 'password'}
        onInput={(e) => {
          onChange?.(e.detail.value);
        }}
        {...rest}
      />
      {type === 'text' ? (
        <Icon
          className={`${PREFIX_CLS}-icon`}
          name="EyeOutlined"
          size={18}
          onClick={() => {
            setType('password');
          }}
        />
      ) : (
        <Icon
          className={`${PREFIX_CLS}-icon`}
          name="HideOutlined"
          size={18}
          onClick={() => {
            setType('text');
          }}
        />
      )}
    </View>
  );
};

export default InputPassword;
