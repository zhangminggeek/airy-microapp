import { Button, Checkbox, Form, Input } from '@nutui/nutui-react-taro';
import { useDidShow, useRouter } from '@tarojs/taro';

import styles from './index.module.scss';

import { getAddressId, postAddress, putAddress } from '@/api';
import { RegionPicker } from '@/components';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;
  const [form] = Form.useForm();

  useDidShow(() => {
    if (id) {
      fetchDetail({ id: `${id}` });
    }
  });

  // 获取地址详情
  const { run: fetchDetail } = useRequest(getAddressId, {
    manual: true,
    onSuccess: (res) => {
      const { province, city, area, address, recipient, phone, isDefault } =
        res;
      form.setFieldsValue({
        region: [province, city, area],
        address,
        recipient,
        phone,
        isDefault,
      });
    },
  });

  // 创建收货地址
  const { run: create } = useRequest(postAddress, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateBack();
    },
  });

  // 创建收货地址
  const { run: update } = useRequest(putAddress, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout title={`${id ? '编辑' : '新增'}收货地址`} back>
      <Form
        className={styles.form}
        form={form}
        labelPosition="left"
        divider
        footer={
          <Button formType="submit" type="primary" size="xlarge" block>
            保存
          </Button>
        }
        onFinish={async (values) => {
          const { region, isDefault, ...rest } = values;
          const [province, city, area] = region;
          const params = { ...rest, province, city, area };
          if (id) {
            await update({ ...params, id });
          } else {
            await create({
              ...params,
              isDefault: isDefault ? 1 : 0,
            });
          }
        }}
      >
        <Form.Item
          label="收货地址"
          name="region"
          rules={[{ required: true, message: '请选择收货地址' }]}
        >
          <RegionPicker />
        </Form.Item>
        <Form.Item
          label="详细地址"
          name="address"
          rules={[{ required: true, message: '请输入详细地址' }]}
        >
          <Input placeholder="楼栋-单元-房号，例如1-1-204" />
        </Form.Item>
        <Form.Item
          label="收件人"
          name="recipient"
          rules={[{ required: true, message: '请输入收件人' }]}
        >
          <Input placeholder="请输入收件人" />
        </Form.Item>
        <Form.Item
          label="手机号"
          name="phone"
          rules={[
            { required: true, message: '请输入手机号' },
            { pattern: /1\d{10}/, message: '请输入正确的手机号' },
          ]}
        >
          <Input placeholder="请输入手机号" />
        </Form.Item>
        {/* 编辑状态下不显示 */}
        {id ? null : (
          <Form.Item
            className={styles.center}
            name="isDefault"
            valuePropName="checked"
          >
            <Checkbox className={styles.checkbox}>设为默认地址</Checkbox>
          </Form.Item>
        )}
      </Form>
    </BasicLayout>
  );
};

export default Page;
