import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import { Icon, Result, Space } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  return (
    <BasicLayout className={styles.container} transparent loginTip={false}>
      <Result
        className={styles.result}
        title="注册成功"
        desc="账号会在几分钟内审核，请留意短信通知"
        status="success"
        extra={
          <View className={styles.content}>
            <View className={styles.title}>
              关注公众号，订单、上新、活动通知不错过
            </View>
            <Image
              className={styles.qrcode}
              src={`${OSS_ASSETS_DIR}/official-account.jpg`}
              mode="aspectFit"
              width={195}
              height={195}
              showMenuByLongpress
            />
            <Space block className={styles.tip}>
              <Icon
                className={styles['tip-icon']}
                name="ScanOutlined"
                size={18}
              />
              <View className={styles['tip-text']}>长按识别二维码</View>
            </Space>
          </View>
        }
        okText="立即登录"
        onOk={() => {
          RouterUtil.navigateTo('/pages/user/login/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
