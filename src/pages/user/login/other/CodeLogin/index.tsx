import { Button, Form, Input } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useState } from 'react';

import styles from './index.module.scss';

import { postAccountLoginCode } from '@/api';
import { InputCode } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { RouterUtil } from '@/utils';

const CaptchaLogin = () => {
  // 手机号
  const [accountValue, setAccountValue] = useState<string>();
  // 登录
  const { run } = useRequest(postAccountLoginCode, {
    manual: true,
    onSuccess(data) {
      Taro.setStorageSync(StorageKey.TOKEN, data);
      RouterUtil.navigateTo('/pages/security/index');
    },
  });

  return (
    <Form
      className={classnames('form-with-footer', 'form-large', styles.form)}
      labelPosition="left"
      footer={
        <Button type="primary" formType="submit" size="xlarge" block>
          立即登录
        </Button>
      }
      onFinish={async (values) => {
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
