import { Button, Form, TextArea } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';

import { postOrderCancelBuyer, postOrderCancelSeller } from '@/api';
import { UserType } from '@/constants';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { id, userType } = useRouter().params;

  // 买家取消订单
  const { run: cancelByBuyer } = useRequest(postOrderCancelBuyer, {
    manual: true,
    onSuccess() {
      Toast.success('取消成功');
      RouterUtil.navigateBack();
    },
  });

  // 卖家取消订单
  const { run: cancelBySeller } = useRequest(postOrderCancelSeller, {
    manual: true,
    onSuccess() {
      Toast.success('取消成功');
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout title="取消订单" back>
      <Form
        footer={
          <Button type="primary" formType="submit" size="xlarge" block>
            确认取消
          </Button>
        }
        onFinish={(values) => {
          const params = {
            id: Number(id),
            reason: values.reason,
          };
          if (userType === UserType['买家']) {
            cancelByBuyer(params);
          } else if (userType === UserType['卖家']) {
            cancelBySeller(params);
          }
        }}
      >
        <Form.Item
          name="reason"
          rules={[{ required: true, message: '请输入取消原因' }]}
        >
          <TextArea placeholder="请输入取消原因" />
        </Form.Item>
      </Form>
    </BasicLayout>
  );
};

export default Page;
