import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';

import styles from './index.module.scss';

import {
  getAccountChangePasswordCodeAccount,
  postAccountChangePasswordCodeCheck,
} from '@/api';
import { CodeInput, Text } from '@/components';
import { useCountdown, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  // 手机号
  const { info } = useUserStore((state) => state);

  const { time, countdowning, startCountdown, stopCountdown } = useCountdown();

  useDidShow(() => {
    if (info?.account) {
      getCode({ account: info?.account });
    }
  });

  // 获取验证码
  const { run: getCode } = useRequest(getAccountChangePasswordCodeAccount, {
    manual: true,
    onSuccess() {
      startCountdown();
    },
  });

  // 校验验证码
  const { run: checkCode } = useRequest(postAccountChangePasswordCodeCheck, {
    manual: true,
    async onSuccess(_, params) {
      stopCountdown();
      RouterUtil.navigateTo('/pages/user/password/setting/index', {
        code: params?.code,
      });
    },
  });

  return (
    <BasicLayout className={styles.container} back transparent>
      <View className={styles.title}>输入验证码</View>
      <View className={styles.tip}>已将验证码发送至 {info?.account}</View>
      <CodeInput
        className={styles.input}
        onComplete={(v) => {
          if (info?.account) {
            checkCode({ account: info?.account, code: v });
          }
        }}
      />
      {countdowning ? (
        <View className={styles.countdown}>
          <Text.Link>{`${time}s`}</Text.Link>
          <Text>后可重新发送</Text>
        </View>
      ) : null}
      <Button
        className={styles.btn}
        type="primary"
        size="xlarge"
        disabled={countdowning}
        block
        onClick={() => {
          if (info?.account) {
            getCode({ account: info?.account });
          }
        }}
      >
        重新获取
      </Button>
    </BasicLayout>
  );
};

export default Page;
