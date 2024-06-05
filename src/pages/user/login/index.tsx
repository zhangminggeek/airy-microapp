import { Button, Checkbox, Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import classnames from 'classnames';
import { useState } from 'react';

import styles from './index.module.scss';

import type { CSSProperties } from 'react';

import ImageLogo from '@/assets/logo.svg';
import { Link } from '@/components';
import { BasicLayout } from '@/layouts';
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
    <BasicLayout className={styles.container} fill>
      <View className={styles.content}>
        <View className={styles.brand}>
          <Image
            className={styles.logo}
            src={ImageLogo}
            width="88px"
            height="88px"
          />
          <View className={styles.name}>AIRYBLUE 婚纱礼服</View>
        </View>
        <View className={styles.login}>
          <Button
            className={classnames(styles.btn, styles['btn-primary'])}
            type="primary"
            block
            onClick={handleLogin}
          >
            手机号快捷登录
          </Button>
          <Link className={classnames(styles.btn, styles['btn-link'])} block>
            其他方式登录
          </Link>
        </View>
        <View className={styles.register}>
          <Text className={styles['register-text']}>还没有账号？</Text>
          <Link
            className={styles['register-link']}
            to="/pages/user/register/index"
          >
            去注册
          </Link>
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
      </View>
    </BasicLayout>
  );
};

export default Page;
