import { Input, View } from '@tarojs/components';
import classnames from 'classnames';

import type { InputProps } from '@tarojs/components';
import type { FC } from 'react';

import { getAccountLoginCodeAccount } from '@/api';
import { Text } from '@/components';
import { useCountdown, useRequest } from '@/hooks';
import { Toast } from '@/utils';

import './index.scss';

interface InputCodeProps extends Partial<Omit<InputProps, 'type' | 'onInput'>> {
  type: 'login';
  phone?: string;
  onChange?: (v: string) => void;
}

const PREFIX_CLS = 'm-input-code';
const methodMap = {
  login: getAccountLoginCodeAccount,
};

const InputCode: FC<InputCodeProps> = ({
  className,
  type,
  phone,
  onChange,
  ...rest
}) => {
  const { time, countdowning, startCountdown } = useCountdown();

  // 获取验证码
  const { run } = useRequest(methodMap[type], {
    manual: true,
    onSuccess() {
      startCountdown();
      Toast.success('发送成功');
    },
  });

  return (
    <View className={classnames(PREFIX_CLS, className)}>
      <Input
        className={`${PREFIX_CLS}-input`}
        placeholder="请输入验证码"
        onInput={(e) => {
          onChange?.(e.detail.value);
        }}
        {...rest}
      />
      <Text.Link
        disabled={countdowning}
        onClick={async () => {
          if (!phone || !/1\d{10}/.test(phone)) {
            Toast.info('请输入正确的手机号');
            return;
          }
          await run({ account: phone });
        }}
      >
        {countdowning ? `(${time}s)后重新发送` : '获取验证码'}
      </Text.Link>
    </View>
  );
};

export default InputCode;
