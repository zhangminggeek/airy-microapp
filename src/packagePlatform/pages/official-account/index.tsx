import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import styles from './index.module.scss';

import { Icon, Space } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';
import { BasicLayout } from '@/layouts';

const Page = () => {
  return (
    <BasicLayout title="微信通知" back>
      <View className={styles.content}>
        <Space className={styles['icon-group']} size={20}>
          <View className={classnames(styles.icon, styles['icon-logo'])}>
            <Icon name="LogoFilled" size={36} />
          </View>
          <Icon className={styles['icon-link']} name="LianJFilled" size={24} />
          <View className={classnames(styles.icon, styles['icon-wechat'])}>
            <Icon name="WechatFilled" size={36} />
          </View>
        </Space>
        <View className={styles.title}>免费开启微信通知</View>
        <View className={styles.desc}>订单提醒不错过</View>
        <View className={styles.qrcode}>
          <Image
            className={styles['qrcode-img']}
            src={`${OSS_ASSETS_DIR}/official-account.jpg`}
            mode="aspectFit"
            width={176}
            height={176}
            showMenuByLongpress
          />
          <Space block className={styles['qrcode-tip']}>
            <Icon
              className={styles['qrcode-tip-icon']}
              name="ScanOutlined"
              size={20}
            />
            <View className={styles['qrcode-tip-text']}>长按识别二维码</View>
          </Space>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Page;
