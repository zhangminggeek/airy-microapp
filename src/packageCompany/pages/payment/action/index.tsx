import { Button, Form, Input } from '@nutui/nutui-react-taro';
import { useDidShow, useRouter } from '@tarojs/taro';

import { fields } from './config';

import { postCompanyPayment } from '@/api';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil, Toast } from '@/utils';
import { PlatformAbility, PlatformAbilityWrapper } from '@/wrappers';

const Page = () => {
  const { type } = useRouter().params;
  const { info } = useUserStore((state) => state);

  const [form] = Form.useForm();

  useDidShow(() => {
    form.setFieldsValue({ owner: info?.company?.contacts });
  });

  // 添加收款账户
  const { run } = useRequest(postCompanyPayment, {
    manual: true,
    onSuccess() {
      Toast.success('添加成功');
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout title="收款账户" back>
      <PlatformAbilityWrapper name={PlatformAbility.PAYMENT_ACCOUNT}>
        <Form
          form={form}
          labelPosition="left"
          divider
          footer={
            <Button type="primary" formType="submit" size="xlarge" block>
              保存
            </Button>
          }
          onFinish={(values) => {
            run({ ...values, type: Number(type) });
          }}
        >
          {fields.get(Number(type))?.map((field) => (
            <Form.Item
              key={field.name}
              label={field.label}
              name={field.name}
              rules={[
                { required: field.required, message: `请输入${field.label}` },
                ...(field.rules ?? []),
              ]}
            >
              <Input disabled={field.type === 'text'} />
            </Form.Item>
          ))}
        </Form>
      </PlatformAbilityWrapper>
    </BasicLayout>
  );
};

export default Page;
