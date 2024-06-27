import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import styles from './index.module.scss';

import { Icon, Space } from '@/components';
import { BasicLayout } from '@/layouts';

const Page = () => {
  return (
    <BasicLayout back>
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
        <View className={styles.title}>绑定微信</View>
        <View className={styles.desc}>绑定后无需再用手机号登录，更便捷</View>
        <Button
          className={styles.btn}
          type="success"
          size="xlarge"
          block
          icon={<Icon name="WechatFilled" size={24} />}
        >
          绑定微信号
        </Button>
      </View>
    </BasicLayout>
  );
};

export default Page;
