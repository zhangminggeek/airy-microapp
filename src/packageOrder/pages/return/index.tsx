import { Button, Form, TextArea } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';

import styles from './index.module.scss';

import { getOrderId, postOrderReceiveSeller } from '@/api';
import { FormSection, InputNumber, Link, Media } from '@/components';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;
  const [form] = Form.useForm();

  // 获取订单详情
  const { data } = useRequest(getOrderId, {
    defaultParams: { id },
    onSuccess(res) {
      const { leaseDeposit } = res?.market ?? {};
      form.setFieldsValue({ amount: leaseDeposit });
    },
  });

  // 确认返还
  const { run: receive } = useRequest(postOrderReceiveSeller, {
    manual: true,
    onSuccess() {
      Toast.success('返还成功');
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout title="确认返还" back>
      <Form
        form={form}
        labelPosition="left"
        footer={
          <Button type="primary" formType="submit" size="xlarge" block>
            确认返还
          </Button>
        }
        onFinish={(values) => {
          receive({ ...values, id });
        }}
      >
        <FormSection>
          <View className={styles.product}>
            <Media
              className={styles['product-image']}
              src={data?.market?.product?.picList?.[0]?.url}
              mode="aspectFill"
            />
            <View className={styles['product-title']}>
              {data?.market?.title}
            </View>
            <View
              className={styles['product-desc']}
            >{`编号：${data?.market?.product?.no ?? '--'}`}</View>
          </View>
        </FormSection>
        <FormSection>
          <Form.Item
            label="押金退还"
            name="amount"
            rules={[
              { required: true, message: '请输入押金退还金额' },
              {
                validator(_, value) {
                  const _value = Number(value);
                  if (_value < 0) {
                    return Promise.reject('押金退还金额不能小于0');
                  }
                  if (_value > Number(data?.market?.leaseDeposit ?? 0)) {
                    return Promise.reject('退还金额不能大于押金');
                  }
                  return Promise.resolve(true);
                },
              },
            ]}
          >
            <InputNumber prefix="¥" />
          </Form.Item>
          <View className={styles.tip}>
            若押金与买家支付有差异，请提前协商一致，若无法协商，可申请
            <Link>客服介入</Link>
          </View>
        </FormSection>
        <FormSection title="备注">
          <Form.Item name="depositRefundRemark" noStyle>
            <TextArea />
          </Form.Item>
        </FormSection>
      </Form>
    </BasicLayout>
  );
};

export default Page;
