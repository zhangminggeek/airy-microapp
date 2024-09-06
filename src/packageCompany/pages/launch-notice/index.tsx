import { Button, Form } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import { postCompanyLaunchNotice } from '@/api';
import { Picker } from '@/components';
import { DATE_TIME_FORMAT } from '@/constants';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { Toast } from '@/utils';

const Page = () => {
  // 上新通知
  const { run } = useRequest(postCompanyLaunchNotice, {
    manual: true,
    onSuccess() {
      Toast.success('发送成功');
    },
  });

  return (
    <BasicLayout title="上新通知" back>
      <View className={styles.tip}>
        <View className={styles['tip-line']}>
          上新通知将会通知所有关注您店铺的粉丝
        </View>
        <View className={styles['tip-line']}>1天内只能使用一次</View>
      </View>
      <Form
        footer={
          <Button formType="submit" type="primary" size="xlarge" block>
            提交
          </Button>
        }
        onFinish={async (values) => {
          await run({ time: values.time.format(DATE_TIME_FORMAT) });
        }}
      >
        <Form.Item
          label="上新时间"
          name="time"
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          rules={[{ required: true, message: '请选择上新时间' }]}
        >
          <Picker.Date type="hour-minutes" />
        </Form.Item>
        <View className={styles.example}>
          示例：精品二手婚纱，低价抢购，数量有限，手慢无
        </View>
      </Form>
    </BasicLayout>
  );
};

export default Page;
