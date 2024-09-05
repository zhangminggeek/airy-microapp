import { Button, Form } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import { Picker } from '@/components';
import { BasicLayout } from '@/layouts';

const Page = () => {
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
          console.log(values);
        }}
      >
        <Form.Item
          label="上新时间"
          name="time"
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
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
