import { Button, Form, Input } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';

import styles from './index.module.scss';

import type { CompanyInfo } from './interfaces';

import { RegionPicker, Space, Upload } from '@/components';
import { StorageKey } from '@/constants/storage';
import { BasicLayout } from '@/layouts';
import { parseJson, RouterUtil } from '@/utils';

const Page = () => {
  const [form] = Form.useForm();

  useDidShow(() => {
    // 检查是否存在邀请码
    const invitationCode = Taro.getStorageSync(StorageKey.INVITATION_CODE);
    if (invitationCode) {
      form.setFieldsValue({ invitationCode });
    }
    // 如果从后面的步骤返回，要回填注册信息
    const info = parseJson<Partial<CompanyInfo>>(
      Taro.getStorageSync(StorageKey.COMPANY_RESIGTER_INFO),
      undefined,
    );
    if (info) {
      const { province, city, area, logo, ...rest } = info;
      form.setFieldsValue({
        ...rest,
        region: [province, city, area],
        logo: [logo],
      });
    }
  });

  return (
    <BasicLayout
      className={styles.container}
      title="注册"
      back
      fill
      transparent
      loginTip={false}
    >
      <View className={styles.content}>
        <Form
          className="form-large"
          labelPosition="left"
          divider
          footer={
            <Button
              className={styles.btn}
              formType="submit"
              type="primary"
              size="xlarge"
              block
            >
              注册
            </Button>
          }
          onFinish={async (values) => {
            const { region, logo, ...rest } = values;
            const [province, city, area] = region;
            const params = { ...rest, province, city, area, logo: logo?.[0] };
            // 保存到本地，等后面验证手机号流程通过后使用
            Taro.setStorageSync(
              StorageKey.COMPANY_RESIGTER_INFO,
              JSON.stringify(params),
            );
            RouterUtil.navigateTo('/packageCompany/pages/register/code/index');
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
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /1\d{10}/, message: '请输入正确的手机号' },
            ]}
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
            <RegionPicker />
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
            <Upload
              extra={
                <View className={styles['license-tip']}>
                  <View>
                    为避免非商户（婚礼行业外的个人用户）注册，请提供营业执照。您的信息将严格保密，仅用于商户验证。
                  </View>
                  <Space size={2}>
                    没有营业执照怎么办？
                    <Button
                      className={styles['license-tip-btn']}
                      fill="none"
                      openType="contact"
                      size="mini"
                    >
                      联系客服
                    </Button>
                  </Space>
                </View>
              }
            />
          </Form.Item>

          <Form.Item label="店铺LOGO" name="logo">
            <Upload />
          </Form.Item>
          <Form.Item label="邀请码" name="invitationCode">
            <Input disabled />
          </Form.Item>
        </Form>
      </View>
    </BasicLayout>
  );
};

export default Page;
