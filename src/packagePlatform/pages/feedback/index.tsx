import { Button, Form, TextArea } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import { postFeedback } from '@/api';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { run } = useRequest(postFeedback, {
    manual: true,
    onSuccess() {
      Toast.success('反馈成功');
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout title="问题与建议" back>
      <View className={styles.tip}>
        您的反馈至关重要，我们将会在第一时间处理
      </View>
      <Form
        footer={
          <Button type="primary" formType="submit" size="xlarge" block>
            提交
          </Button>
        }
        onFinish={(values) => {
          run(values);
        }}
      >
        <Form.Item
          name="content"
          rules={[{ required: true, message: '请输入您的问题或建议' }]}
        >
          <TextArea placeholder="请输入您的问题或建议" />
        </Form.Item>
      </Form>
    </BasicLayout>
  );
};

export default Page;
