import { Eye, Marshalling } from '@nutui/icons-react-taro';
import { Input } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useState } from 'react';

import type { InputProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import './index.scss';

interface InputPasswordProps extends Partial<Omit<InputProps, 'type'>> {}

const PREFIX_CLS = 'm-input-password';

const InputPassword: FC<InputPasswordProps> = ({ className, ...rest }) => {
  const [type, setType] = useState<'text' | 'password'>('password');

  return (
    <View className={classnames(PREFIX_CLS, className)}>
      <Input className={`${PREFIX_CLS}-input`} type={type} {...rest} />
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
