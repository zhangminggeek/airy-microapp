import { Button, Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';
import Protocol from './Protocol';

import { postAccountLoginWechatPhone } from '@/api';
import ImageLogo from '@/assets/logo.svg';
import { Text } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast, WeChatUtil } from '@/utils';

const Page = () => {
  // 是否已阅读协议
  const [hasRead, setHasRead] = useState<boolean>(false);

  // 微信授权手机号登录
  const { run } = useRequest(postAccountLoginWechatPhone, {
    manual: true,
    async onSuccess(data) {
      if (data) {
        const { token, account, bind } = data;
        Taro.setStorageSync(StorageKey.TOKEN, token);
        if (!bind) {
          await WeChatUtil.bindOpenId(account);
        }
        RouterUtil.navigateTo('/pages/security/index');
      } else {
        // 没注册去注册
        RouterUtil.navigateTo('/packageCompany/pages/register/index');
      }
    },
  });

  // 根据是否阅读协议，决定按钮是否可用
  const buttonConfig = useMemo(() => {
    if (!hasRead) {
      return {
        onClick() {
          Toast.confirm({
            content: '请先阅读并同意《用户隐私协议》和《软件许可使用协议》',
            confirmText: '同意',
            cancelText: '不同意',
            success() {
              setHasRead(true);
            },
          });
          return;
        },
      };
    }

    return {
      'open-type': 'getPhoneNumber',
      onGetPhoneNumber(e) {
        const { code } = e.detail;
        if (code) {
          run({ code });
        }
      },
    };
  }, [hasRead]);

  return (
    <BasicLayout className={styles.container} fill transparent loginTip={false}>
      <View className={styles.content}>
        <View className={styles.brand}>
          <Image
            className={styles.logo}
            src={ImageLogo}
            width="88px"
            height="88px"
          />
          <View className={styles.name}>易纱集</View>
        </View>
        <View className={styles.login}>
          <Button
            className={classnames(styles.btn, styles['btn-primary'])}
            type="primary"
            size="xlarge"
            block
            {...buttonConfig}
          >
            手机号快捷登录
          </Button>
          <Text.Link
            className={classnames(styles.btn, styles['btn-link'])}
            block
            to="/pages/user/login/other/index"
          >
            其他方式登录
          </Text.Link>
        </View>
        <View className={styles.register}>
          <Text className={styles['register-text']}>还没有账号？</Text>
          <Text.Link
            className={styles['register-link']}
            to="/packageCompany/pages/register/index"
          >
            去注册
          </Text.Link>
        </View>
        <Protocol
          className={styles.protocol}
          value={hasRead}
          onChange={(v) => {
            setHasRead(v);
          }}
        />
      </View>
    </BasicLayout>
  );
};

export default Page;
