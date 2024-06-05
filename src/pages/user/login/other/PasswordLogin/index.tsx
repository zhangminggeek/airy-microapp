import { Button, Form, Input } from '@nutui/nutui-react-taro';
import classnames from 'classnames';

import styles from './index.module.scss';

import { getAccountSalt, getAccountSaltAccount, postAccountLogin } from '@/api';
import { InputPassword } from '@/components';
import { useRequest } from '@/hooks';
import { encode } from '@/utils';

const PasswordLogin = () => {
  // 登录
  const { run } = useRequest(postAccountLogin, {
    manual: true,
    onSuccess() {
      // TODO: 登录成功
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
        const { account, password = '161150' } = values;
        console.log(values);
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
      <Form.Item label="密码" name="password">
        <InputPassword />
      </Form.Item>
    </Form>
  );
};

export default PasswordLogin;
