import { Button, Form, Input, TextArea } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';

import {
  getAddressId,
  postOrderExpressDeliver,
  postOrderExpressReturn,
} from '@/api';
import { Descriptions, FormSection } from '@/components';
import { OrderExpressType } from '@/constants/order';
import { useAddress, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { id, addressId, type } = useRouter().params;

  // 获取地址详情
  const { data } = useRequest(getAddressId, {
    defaultParams: { id: addressId },
  });

  // 发货
  const { run: expressDeliver } = useRequest(postOrderExpressDeliver, {
    manual: true,
    onSuccess() {
      Toast.success('发货成功');
      RouterUtil.navigateBack();
    },
  });

  // 返还发货
  const { run: expressReturn } = useRequest(postOrderExpressReturn, {
    manual: true,
    onSuccess() {
      Toast.success('发货成功');
      RouterUtil.navigateBack();
    },
  });

  const { address } = useAddress({
    province: data?.province,
    city: data?.city,
    area: data?.area,
    address: data?.address,
  });

  return (
    <BasicLayout
      title={Number(type) === OrderExpressType['发货'] ? '发货' : '返还发货'}
      back
    >
      <Form
        footer={
          <Button type="primary" formType="submit" block size="xlarge">
            确认发货
          </Button>
        }
        onFinish={(values) => {
          if (Number(type) === OrderExpressType['发货']) {
            expressDeliver({ ...values, id });
          } else if (Number(type) === OrderExpressType['返还']) {
            expressReturn({ ...values, id });
          }
        }}
      >
        <FormSection fill>
          <Form.Item
            label="快递单号"
            name="no"
            rules={[{ required: true, message: '请输入快递单号' }]}
          >
            <Input />
          </Form.Item>
        </FormSection>
        <FormSection title="收货信息">
          <Descriptions
            options={[
              { field: 'consignee', label: '收货人', col: 2 },
              { field: 'address', label: '收货地址', col: 2 },
            ]}
            data={{
              consignee: `${data?.recipient ?? ''} ${data?.phone ?? ''}`,
              address,
            }}
            colon={false}
            align="right"
          />
        </FormSection>
        <FormSection title="备注">
          <Form.Item name="remark" noStyle>
            <TextArea maxLength={255} />
          </Form.Item>
        </FormSection>
      </Form>
    </BasicLayout>
  );
};

export default Page;
