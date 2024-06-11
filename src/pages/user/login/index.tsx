import { Button, Checkbox, Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';

import type { CSSProperties } from 'react';

import { postAccountLoginWechat } from '@/api';
import ImageLogo from '@/assets/logo.svg';
import { Link } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  // 是否已阅读协议
  const [hasRead, setHasRead] = useState<boolean>(false);

  // 微信授权手机号登录
  const { run } = useRequest(postAccountLoginWechat, {
    manual: true,
    onSuccess(data) {
      Taro.setStorageSync(StorageKey.TOKEN, data);
      RouterUtil.navigateTo('/pages/security/index');
    },
  });

  // 根据是否阅读协议，决定按钮是否可用
  const buttonConfig = useMemo(() => {
    return hasRead
      ? {
          'open-type': 'getPhoneNumber',
          onGetPhoneNumber(e) {
            run({ code: e.detail.code });
          },
        }
      : {
          onClick() {
            Toast.info('请先阅读并同意《用户隐私协议》');
            return;
          },
        };
  }, [hasRead]);

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
