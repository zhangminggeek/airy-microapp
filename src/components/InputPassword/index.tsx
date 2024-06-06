import { Eye, Marshalling } from '@nutui/icons-react-taro';
import { Input, View } from '@tarojs/components';
import classnames from 'classnames';
import { useState } from 'react';

import type { InputProps } from '@tarojs/components';
import type { FC } from 'react';

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
        <Eye
          className={`${PREFIX_CLS}-icon`}
          size={18}
          color="#959595"
          onClick={() => {
            setType('password');
          }}
        />
      ) : (
        <Marshalling
          className={`${PREFIX_CLS}-icon`}
          size={18}
          color="#959595"
          onClick={() => {
            setType('text');
          }}
        />
      )}
    </View>
  );
};

export default InputPassword;
