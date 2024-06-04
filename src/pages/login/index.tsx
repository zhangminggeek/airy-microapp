import { Button, Checkbox, Image, SafeArea } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { useState } from 'react';

import styles from './index.module.scss';

import type { CSSProperties } from 'react';

import ImageLogo from '@/assets/logo_primary.png';
import { RouterUtil, Toast, WeChatUtil } from '@/utils';

const Page = () => {
  const { params } = useRouter();
  // 是否已阅读协议
  const [hasRead, setHasRead] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!hasRead) {
      Toast.info('请先阅读并同意《用户隐私协议》');
      return;
    }
    await WeChatUtil.loginForWeChat();
    RouterUtil.navigateTo('/pages/security/index', params);
  };

  return (
    <View className={styles.container}>
      <SafeArea position="top" />
      <View className={styles.content}>
        <Image
          className={styles.logo}
          src={ImageLogo}
          width="160px"
          height="160px"
        />
        <View className={styles.slogan}>收纳有道，物归其位</View>
        <Button
          className={styles.btn}
          type="primary"
          block
          onClick={handleLogin}
        >
          登录
        </Button>
      </View>
      <View className={styles.action}>
        <Checkbox
          className={styles.protocols}
          style={{ '--nut-icon-width': '16px' } as CSSProperties}
          label={
            <Text>
              已阅读并同意
              <Text
                className={styles.link}
                onClick={(e) => {
                  e.stopPropagation();
                  Taro.openPrivacyContract();
                }}
              >
                《用户隐私协议》
              </Text>
            </Text>
          }
          checked={hasRead}
          onChange={(val) => {
            setHasRead(val);
          }}
        />
      </View>
      <SafeArea position="bottom" />
    </View>
  );
};

export default Page;
