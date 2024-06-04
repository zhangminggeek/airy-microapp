import { Button, Form, TextArea } from '@nutui/nutui-react-taro';

import styles from './index.module.scss';

import { postFeedback } from '@/api';
import { Picker } from '@/components';
import { useRequest } from '@/hooks';
import BasicLayout from '@/layouts/BasicLayout';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  // 提交反馈
  const { run } = useRequest(postFeedback, {
    manual: true,
    onSuccess() {
      Toast.success('反馈成功');
      setTimeout(() => {
        RouterUtil.navigateBack();
      }, 2000);
    },
  });

  return (
    <BasicLayout>
      <Form
        className={styles.form}
        labelPosition="top"
        footer={
          <>
            <Button formType="submit" block type="primary">
              提交
            </Button>
          </>
        }
        onFinish={(values) => {
          run(values);
        }}
      >
        <Form.Item
          label="反馈类型"
          name="type"
          getValueFromEvent={(...args) => args[1]}
          rules={[{ required: true, message: '请选择反馈类型' }]}
        >
          <Picker
            options={[
              { text: '功能建议', value: 1 },
              { text: '问题反馈', value: 2 },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="反馈内容"
          name="content"
          rules={[{ required: true, message: '请输入反馈内容' }]}
        >
          <TextArea />
        </Form.Item>
      </Form>
    </BasicLayout>
  );
};

export default Page;
