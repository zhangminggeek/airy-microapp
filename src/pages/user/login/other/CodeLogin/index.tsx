import { Button, Form, Input } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useState } from 'react';

import styles from './index.module.scss';

import type { FC } from 'react';

import { postAccountLoginCode } from '@/api';
import { InputCode } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { RouterUtil, Toast } from '@/utils';

interface CaptchaLoginProps {
  hasReadProtocol?: boolean;
}

const CaptchaLogin: FC<CaptchaLoginProps> = ({ hasReadProtocol }) => {
  // 手机号
  const [accountValue, setAccountValue] = useState<string>();
  // 登录
  const { run } = useRequest(postAccountLoginCode, {
    manual: true,
    async onSuccess(data, params) {
      const { token, bind } = data;
      Taro.setStorageSync(StorageKey.TOKEN, token);
      if (bind) {
        RouterUtil.navigateTo('/pages/security/index');
      } else {
        RouterUtil.navigateTo('/pages/user/login/bind/index', {
          account: params?.account,
        });
      }
    },
  });

  return (
    <Form
      className={classnames('form-large', styles.form)}
      labelPosition="left"
      footer={
        <Button type="primary" formType="submit" size="xlarge" block>
          立即登录
        </Button>
      }
      onFinish={async (values) => {
        if (!hasReadProtocol) {
          Toast.info('请先阅读并同意《用户隐私协议》和《软件许可使用协议》');
          return;
        }
        await run(values);
      }}
    >
      <Form.Item
        label="手机号"
        name="account"
        rules={[{ required: true, message: '请输入手机号' }]}
        required={false}
      >
        <Input
          onChange={(v) => {
            setAccountValue(v);
          }}
        />
      </Form.Item>
      <Form.Item
        label="验证码"
        name="code"
        rules={[{ required: true, message: '请输入验证码' }]}
        required={false}
      >
        <InputCode type="login" phone={accountValue} />
      </Form.Item>
    </Form>
  );
};

export default CaptchaLogin;
