import { Button, Form, Input } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
import classnames from 'classnames';

import styles from './index.module.scss';

import { getAccountSalt, getAccountSaltAccount, postAccountLogin } from '@/api';
import { InputPassword } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { encode, RouterUtil } from '@/utils';

const PasswordLogin = () => {
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
        const { account, password } = values;
        try {
          const oldSalt = (await getAccountSaltAccount({ account })).data;
          const newSalt = (await getAccountSalt()).data;
          const pwd = encode(password, oldSalt);
          await run({ account, password: pwd, salt: newSalt });
        } catch (err) {
          console.log(err);
        }
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
