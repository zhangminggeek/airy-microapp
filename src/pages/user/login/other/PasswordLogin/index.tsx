import { Button, Form, Input } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
import classnames from 'classnames';

import styles from './index.module.scss';

import type { FC } from 'react';

import { getAccountSalt, getAccountSaltAccount, postAccountLogin } from '@/api';
import { InputPassword } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { encode, RouterUtil, Toast } from '@/utils';

interface PasswordLoginProps {
  hasReadProtocol?: boolean;
  onReadProtocol?: () => void;
}

const PasswordLogin: FC<PasswordLoginProps> = ({
  hasReadProtocol,
  onReadProtocol,
}) => {
  // 登录
  const { run } = useRequest(postAccountLogin, {
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

  const handleLogin = async ({
    account,
    password,
  }: {
    account: string;
    password: string;
  }) => {
    try {
      const oldSalt = (await getAccountSaltAccount({ account })).data;
      const newSalt = (await getAccountSalt()).data;
      const pwd = encode(password, oldSalt);
      await run({ account, password: pwd, salt: newSalt });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      className={classnames('form-large', styles.form)}
      labelPosition="left"
      divider
      footer={
        <Button type="primary" formType="submit" size="xlarge" block>
          立即登录
        </Button>
      }
      onFinish={async (values) => {
        const { account, password } = values;
        if (!hasReadProtocol) {
          Toast.confirm({
            content: '请先阅读并同意《用户隐私协议》和《软件许可使用协议》',
            confirmText: '同意',
            cancelText: '不同意',
            success() {
              onReadProtocol?.();
              handleLogin({ account, password });
            },
          });
          return;
        }
        handleLogin({ account, password });
      }}
    >
      <Form.Item
        label="手机号"
        name="account"
        rules={[{ required: true, message: '请输入手机号' }]}
        required={false}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
        required={false}
      >
        <InputPassword />
      </Form.Item>
    </Form>
  );
};

export default PasswordLogin;
