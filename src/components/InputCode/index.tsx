import { Input, View } from '@tarojs/components';
import classnames from 'classnames';
import { useRef, useState } from 'react';

import type { InputProps } from '@tarojs/components';
import type { FC } from 'react';

import { getAccountCodeAccount } from '@/api';
import { Link } from '@/components';
import { useRequest } from '@/hooks';
import { Toast } from '@/utils';

import './index.scss';

interface InputCodeProps extends Partial<Omit<InputProps, 'type' | 'onInput'>> {
  phone?: string;
  onChange?: (v: string) => void;
}

const PREFIX_CLS = 'm-input-code';
const TOTAL_TIME = 60;

const InputCode: FC<InputCodeProps> = ({
  className,
  phone,
  onChange,
  ...rest
}) => {
  // 倒计时数字
  const [time, setTime] = useState<number>(TOTAL_TIME);
  // 倒计时定时器
  const timer = useRef<NodeJS.Timeout>();

  // 获取验证码
  const { run } = useRequest(getAccountCodeAccount, {
    manual: true,
    onSuccess() {
      startCountdown();
      Toast.success('发送成功');
    },
  });

  // 开始倒计时
  const startCountdown = () => {
    const t = setInterval(() => {
      setTime((t) => {
        if (t <= 0) {
          clearInterval(timer.current);
          timer.current = undefined;
          return TOTAL_TIME;
        } else {
          return t - 1;
        }
      });
    }, 1000);
    timer.current = t;
  };

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
      <Link
        disabled={!!timer.current}
        onClick={async () => {
          if (!phone || !/1\d{10}/.test(phone)) {
            Toast.info('请输入正确的手机号');
            return;
          }
          await run({ account: phone });
        }}
      >
        {timer.current ? `(${time}s)后重新发送` : '获取验证码'}
      </Link>
    </View>
  );
};

export default InputCode;
