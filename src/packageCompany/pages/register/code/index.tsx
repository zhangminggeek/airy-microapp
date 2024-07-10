import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useState } from 'react';

import styles from './index.module.scss';

import type { CompanyInfo } from '../interfaces';

import {
  getAccountRegisterCodeAccount,
  postAccountRegisterCodeCheck,
  postCompanyRegister,
} from '@/api';
import { CodeInput, Link } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useCountdown, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { parseJson, RouterUtil } from '@/utils';

const Page = () => {
  // 手机号
  const [phone, setPhone] = useState<string>('');

  const { time, countdowning, startCountdown } = useCountdown();

  useDidShow(() => {
    const info = parseJson<CompanyInfo>(
      Taro.getStorageSync(StorageKey.COMPANY_RESIGTER_INFO),
      undefined,
    );
    setPhone(info?.contactPhone);
    getCode({ account: info?.contactPhone });
  });

  // 获取验证码
  const { run: getCode } = useRequest(getAccountRegisterCodeAccount, {
    manual: true,
    onSuccess() {
      startCountdown();
    },
  });

  // 校验验证码
  const { run: checkCode } = useRequest(postAccountRegisterCodeCheck, {
    manual: true,
    async onSuccess() {
      const info = parseJson<CompanyInfo>(
        Taro.getStorageSync(StorageKey.COMPANY_RESIGTER_INFO),
      );
      await register(info);
    },
  });

  // 注册
  const { run: register } = useRequest(postCompanyRegister, {
    manual: true,
    onSuccess() {
      Taro.removeStorageSync(StorageKey.COMPANY_RESIGTER_INFO);
      RouterUtil.navigateTo('/packageCompany/pages/register/result/index');
    },
  });

  return (
    <BasicLayout className={styles.container} back transparent>
      <View className={styles.title}>输入验证码</View>
      <View className={styles.tip}>已将验证码发送至 {phone}</View>
      <CodeInput
        className={styles.input}
        onComplete={(v) => {
          checkCode({ account: phone, code: v });
        }}
      />
      {countdowning ? (
        <View className={styles.countdown}>
          <Link>{`${time}s`}</Link>
          <Text>后可重新发送</Text>
        </View>
      ) : null}
      <Button
        className={styles.btn}
        type="primary"
        size="xlarge"
        disabled={countdowning}
        block
      >
        重新获取
      </Button>
    </BasicLayout>
  );
};

export default Page;
