import { Button, Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';
import Protocol from './Protocol';

import { postAccountLoginWechatPhone } from '@/api';
import ImageLogo from '@/assets/logo.svg';
import { Link } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast, WeChatUtil } from '@/utils';

const Page = () => {
  // 是否已阅读协议
  const [hasRead, setHasRead] = useState<boolean>(false);
  // 是否通过微信静默登录
  const [hasLogined, setHasLogined] = useState<boolean>(false);

  useDidShow(async () => {
    const res = await WeChatUtil.loginForWeChat();
    setHasLogined(res);
  });

  // 微信授权手机号登录
  const { run } = useRequest(postAccountLoginWechatPhone, {
    manual: true,
    async onSuccess(data) {
      const { token, account } = data;
      Taro.setStorageSync(StorageKey.TOKEN, token);
      await WeChatUtil.bindOpenId(account);
      RouterUtil.navigateTo('/pages/security/index');
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

    return hasLogined
      ? {
          onClick() {
            RouterUtil.navigateTo('/pages/security/index');
          },
        }
      : {
          'open-type': 'getPhoneNumber',
          onGetPhoneNumber(e) {
            const { code } = e.detail;
            if (code) {
              run({ code: e.detail.code });
            }
          },
        };
  }, [hasRead, hasLogined]);

  return (
    <BasicLayout className={styles.container} fill transparent>
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
            size="xlarge"
            block
            {...buttonConfig}
          >
            手机号快捷登录
          </Button>
          <Link
            className={classnames(styles.btn, styles['btn-link'])}
            block
            to="/pages/user/login/other/index"
          >
            其他方式登录
          </Link>
        </View>
        <View className={styles.register}>
          <Text className={styles['register-text']}>还没有账号？</Text>
          <Link
            className={styles['register-link']}
            to="/packageCompany/pages/register/index"
          >
            去注册
          </Link>
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
