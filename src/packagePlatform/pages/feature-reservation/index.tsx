import { Button, ConfigProvider, Step, Steps } from '@nutui/nutui-react-taro';
import { Image, View } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import classnames from 'classnames';

import { intro } from './config';
import styles from './index.module.scss';

import { postPlatformFeatureReservation } from '@/api';
import { OSS_ASSETS_DIR } from '@/constants';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  // 功能类型
  const { type } = useRouter().params;
  const { info } = useUserStore((state) => state);

  // 预约
  const { run } = useRequest(postPlatformFeatureReservation, {
    manual: true,
    onSuccess() {
      Toast.success('预约成功');
    },
  });

  // 预约提示
  const { renderDialog, open } = useDialog({
    id: 'reservation-tip',
    title: '您还未完成营业执照认证',
    confirmText: '立即认证',
    onConfirm() {
      RouterUtil.navigateTo('/packageCompany/pages/setting/license/index');
    },
  });

  return (
    <BasicLayout title="限时预约" back fill>
      <View
        className={styles.content}
        style={{
          backgroundImage: `url(${OSS_ASSETS_DIR}/reservation_bg.jpg)`,
        }}
      >
        <View className={styles.title}>
          <View className={styles['title-text']}>全面管理您的婚纱店</View>
          <View className={styles['title-text']}>轻松提升运营效率</View>
        </View>
        <View className={styles.desc}>
          十月份上线，现在预约免费试用，体验所有强大功能！
        </View>
        <Image
          className={styles.banner}
          src={`${OSS_ASSETS_DIR}/reservation_banner.png`}
          mode="heightFix"
        />
        <View className={classnames(styles.section, styles.intro)}>
          <View
            className={styles['intro-title']}
            style={{
              backgroundImage: `url(${OSS_ASSETS_DIR}/reservation_title_bg.png)`,
            }}
          >
            功能介绍
          </View>
          <View className={styles['intro-content']}>
            {intro.map((item) => (
              <View key={item.title} className={styles['intro-content-item']}>
                <View className={styles['intro-content-item-title']}>
                  <Image
                    className={styles['intro-content-item-title-icon']}
                    src={`${OSS_ASSETS_DIR}${item.icon}`}
                  />
                  <View className={styles['intro-content-item-title-text']}>
                    {item.title}
                  </View>
                </View>
                <View className={styles['intro-content-item-desc']}>
                  {item.desc}
                </View>
              </View>
            ))}
          </View>
        </View>
        <View className={classnames(styles.section, styles.reservation)}>
          <View className={styles['reservation-title']}>
            十月份上线，立即预约免费试用！
          </View>
          <View className={styles['reservation-flow']}>
            <View className={styles['reservation-flow-title']}>预约流程</View>
            <ConfigProvider
              style={{ width: '100%' }}
              theme={{
                '--nutui-steps-finish-line-background': 'rgba(0,0,0,0.20);',
                '--nutui-steps-finish-icon-color': '#C7C7C7',
                '--nutui-steps-finish-icon-bg-color': 'transparent',
              }}
            >
              <Steps className={styles['reservation-flow-step']} value={4}>
                <Step
                  value={1}
                  description={
                    <View>
                      <View>完善营业</View>
                      <View>执照信息</View>
                    </View>
                  }
                />
                <Step value={2} description="完成预约" />
                <Step
                  value={3}
                  description={
                    <View>
                      <View>十月正式上线</View>
                      <View>解锁免费试用</View>
                    </View>
                  }
                />
              </Steps>
            </ConfigProvider>
          </View>
          <Button
            className={styles['reservation-btn']}
            color="linear-gradient(180deg, #5C90FF 0%, #214AFF 100%)"
            size="xlarge"
            onClick={() => {
              if (!info?.company?.license) {
                open();
                return;
              }
              run({ type: Number(type) });
            }}
          >
            立即预约
          </Button>
          <View className={styles['reservation-code']}>
            <View className={styles['reservation-code-item']}>
              <Image
                className={styles['reservation-code-item-img']}
                src={`${OSS_ASSETS_DIR}/official-account.jpg`}
                mode="widthFix"
                showMenuByLongpress
              />
              <View className={styles['reservation-code-item-name']}>
                公众号二维码
              </View>
            </View>
          </View>
        </View>
      </View>
      {renderDialog()}
    </BasicLayout>
  );
};

export default Page;
