import { Image, Tabs } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';

import CodeLogin from './CodeLogin';
import styles from './index.module.scss';
import PasswordLogin from './PasswordLogin';

import ImageLogo from '@/assets/logo.svg';
import { BasicLayout } from '@/layouts';

const Page = () => {
  return (
    <BasicLayout
      className={styles.container}
      bodyClassName={styles['container-body']}
      back
      fill
      safeArea={false}
    >
      <View className={styles.header}>
        <Image
          className={styles.logo}
          src={ImageLogo}
          width="56px"
          height="56px"
        />
        <Text className={styles.name}>AIRYBLUE 婚纱礼服</Text>
      </View>
      <View className={styles.body}>
        <Tabs className={styles.tabs}>
          <Tabs.TabPane title="密码登录">
            <PasswordLogin />
          </Tabs.TabPane>
          <Tabs.TabPane title="验证码登录">
            <CodeLogin />
          </Tabs.TabPane>
        </Tabs>
      </View>
    </BasicLayout>
  );
};

export default Page;
