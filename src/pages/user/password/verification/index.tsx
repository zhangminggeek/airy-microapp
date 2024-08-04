import { View } from '@tarojs/components';

import styles from './index.module.scss';

import { Icon } from '@/components';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { desensitize, RouterUtil } from '@/utils';

const Page = () => {
  const { info } = useUserStore((state) => state);

  return (
    <BasicLayout title="身份验证" back>
      <View className={styles.content}>
        <Icon
          className={styles.icon}
          name="IdentityVerificationFilled"
          size={96}
        />
        <View className={styles.title}>身份验证</View>
        <View className={styles.desc}>
          为了保护你的账号安全，需要验证你的身份，验证通过后即可修改密码。
        </View>
      </View>
      <View
        className={styles.card}
        onClick={() => {
          RouterUtil.navigateTo('/pages/user/password/code/index');
        }}
      >
        <Icon
          className={styles['card-icon-prefix']}
          name="MobileOutlined"
          size={24}
        />
        <View className={styles['card-content']}>
          <View className={styles['card-title']}>手机号码验证</View>
          <View className={styles['card-desc']}>
            通过 {info?.account ? desensitize(info.account) : ''} 接收短信验证码
          </View>
        </View>
        <Icon
          className={styles['card-icon-suffix']}
          name="RightOutlined"
          size={16}
        />
      </View>
    </BasicLayout>
  );
};

export default Page;
