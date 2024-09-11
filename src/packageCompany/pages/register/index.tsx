import { Button, Form, Image, Input } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { isEmpty } from 'lodash';
import { useState } from 'react';

import styles from './index.module.scss';

import type { CompanyInfo } from './interfaces';

import { getCompanyRegisterPhoneCheck } from '@/api';
import { Picker, Upload } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';
import { StorageKey } from '@/constants/storage';
import { BasicLayout } from '@/layouts';
import { parseJson, RouterUtil, Toast } from '@/utils';

const Page = () => {
  const [form] = Form.useForm();
  // 邀请码
  const [invitationCode, setInvitationCode] = useState<string>();

  useDidShow(() => {
    // 检查是否存在邀请码
    const code = Taro.getStorageSync(StorageKey.INVITATION_CODE);
    if (code) {
      setInvitationCode(code);
    }
    // 如果从后面的步骤返回，要回填注册信息
    const info = parseJson<Partial<CompanyInfo>>(
      Taro.getStorageSync(StorageKey.COMPANY_RESIGTER_INFO),
    );
    if (info && !isEmpty(info)) {
      const { province, city, area, logo, ...rest } = info;
      form.setFieldsValue({
        ...rest,
        region: [province, city, area],
        logo: logo ? [logo] : undefined,
      });
    }
  });

  return (
    <BasicLayout
      className={styles.container}
      back
      fill
      transparent
      loginTip={false}
    >
      <View className={styles.banner}>
        <View className={styles['banner-content']}>
          <View className={styles['banner-content-title']}>注册易纱集</View>
          <View className={styles['banner-content-desc']}>
            二手婚纱交易借调，免费婚纱店铺管理ERP
          </View>
        </View>
        <Image
          className={styles['banner-image']}
          src={`${OSS_ASSETS_DIR}/register_banner.png`}
          width={124}
          height={100}
        />
      </View>
      <View className={styles.content}>
        <Form
          className={styles.form}
          form={form}
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
            const { contactPhone, region, license, logo, ...rest } = values;
            const [province, city, area] = region;
            const params = {
              ...rest,
              contactPhone,
              province,
              city,
              area,
              license: license?.[0],
              logo: logo?.[0],
            };
            if (invitationCode) {
              params.invitationCode = invitationCode;
            }
            try {
              // 校验手机号是否被使用
              const res = await getCompanyRegisterPhoneCheck({
                phone: contactPhone,
              });
              if (res.data) {
                Toast.info('手机号已被使用');
                return;
              }
              // 保存到本地，等后面验证手机号流程通过后使用
              Taro.setStorageSync(
                StorageKey.COMPANY_RESIGTER_INFO,
                JSON.stringify(params),
              );
              RouterUtil.navigateTo(
                '/packageCompany/pages/register/code/index',
              );
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <Form.Item
            label="联系人"
            name="contacts"
            rules={[{ required: true, message: '请输入联系人' }]}
            validateTrigger="onBlur"
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
            validateTrigger="onBlur"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="店铺名称"
            name="name"
            rules={[{ required: true, message: '请输入店铺名称' }]}
            validateTrigger="onBlur"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="店铺地址"
            name="region"
            rules={[{ required: true, message: '请选择店铺地址' }]}
            validateTrigger="onBlur"
          >
            <Picker.Region />
          </Form.Item>
          <Form.Item
            label="详细地址"
            name="address"
            rules={[{ required: true, message: '请输入详细地址' }]}
            validateTrigger="onBlur"
          >
            <Input />
          </Form.Item>
          <Form.Item label="营业执照" name="license">
            <Upload
              extra={
                <View className={styles['license-tip']}>
                  未认证营业执照的商家将无法使用免费店铺管理功能，且部分功能将受限.
                </View>
              }
            />
          </Form.Item>
          <Form.Item label="店铺LOGO" name="logo">
            <Upload />
          </Form.Item>
          <Form.Item label="邀请码">
            <View>{invitationCode}</View>
          </Form.Item>
        </Form>
      </View>
    </BasicLayout>
  );
};

export default Page;
