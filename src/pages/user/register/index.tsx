import { Button, Form, Input } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';

import styles from './index.module.scss';

import { postCompanyRegister } from '@/api';
import { AdministrativePicker, Link, Upload } from '@/components';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';

const Page = () => {
  // 注册
  const { run } = useRequest(postCompanyRegister, {
    manual: true,
    onSuccess() {
      console.log('onSuccess');
    },
  });

  return (
    <BasicLayout className={styles.container} title="注册" back fill>
      <View className={styles.content}>
        <Form
          className={styles.form}
          footer={
            <Button
              className={styles.btn}
              formType="submit"
              block
              type="primary"
            >
              注册
            </Button>
          }
          onFinish={async (values) => {
            const { region, ...rest } = values;
            const [province, city, area] = region;
            await run({ ...rest, province, city, area });
          }}
        >
          <Form.Item
            label="联系人"
            name="contacts"
            rules={[{ required: true, message: '请输入联系人' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="手机号"
            name="contactPhone"
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="店铺名称"
            name="name"
            rules={[{ required: true, message: '请输入店铺名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="店铺地址"
            name="region"
            rules={[{ required: true, message: '请选择店铺地址' }]}
          >
            <AdministrativePicker />
          </Form.Item>
          <Form.Item
            label="详细地址"
            name="address"
            rules={[{ required: true, message: '请输入详细地址' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="营业执照"
            name="licenses"
            rules={[{ required: true, message: '请上传营业执照' }]}
          >
            <Upload />
          </Form.Item>
        </Form>
        <View className={styles.login}>
          <Text className={styles['login-text']}>已有账号？</Text>
          <Link className={styles['login-link']} to="/pages/user/login/index">
            去登录
          </Link>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Page;
