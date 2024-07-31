import { Button, Form } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';

import styles from './index.module.scss';

import { getAccountSalt, putAccountPassword } from '@/api';
import { InputPassword } from '@/components';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { encode, RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { code } = useRouter().params;
  const { logout } = useUserStore((state) => state);

  // 修改密码
  const { run } = useRequest(putAccountPassword, {
    manual: true,
    onSuccess() {
      logout();
      RouterUtil.navigateTo('/pages/user/login/index');
    },
  });

  return (
    <BasicLayout className={styles.container} back>
      <View className={styles.title}>输入验证码</View>
      <Form
        divider
        footer={
          <Button
            className={styles.btn}
            type="primary"
            formType="submit"
            size="xlarge"
            block
          >
            确定
          </Button>
        }
        onFinish={async (values) => {
          if (!code) {
            Toast.info('验证码不存在，请返回重试');
            return;
          }
          const { password } = values;
          const salt = (await getAccountSalt()).data;
          const params = {
            code,
            salt,
            password: encode(password, salt),
          };
          run(params);
        }}
      >
        <Form.Item
          className={styles.password}
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { pattern: /^.{6,}$/, message: '请设置6位以上密码' },
          ]}
        >
          <InputPassword placeholder="请设置6位以上密码" />
        </Form.Item>
      </Form>
    </BasicLayout>
  );
};

export default Page;
