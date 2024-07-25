import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';

import AmountItem from './AmountItem';
import { marketConfig, settingConfig, shopConfig } from './config';
import IconItem from './IconItem';
import styles from './index.module.scss';

import { getCompanySelf } from '@/api';
import ImageLogo from '@/assets/logo.svg';
import { Avatar, Icon, Section, Space } from '@/components';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { EventUtil, RouterUtil } from '@/utils';

const Page = () => {
  const { info } = useUserStore((state) => state);

  useDidShow(() => {
    if (info?.company) {
      run();
    }
  });

  EventUtil.useEvents(EventUtil.EventsKey.LOGOUT, () => {
    // 监听退出事件，清空数据，
    mutate(undefined);
  });

  // 获取公司信息
  const { data, mutate, run } = useRequest(getCompanySelf, { manual: true });

  return (
    <BasicLayout
      className={styles.container}
      title={
        <Space
          onClick={() => {
            RouterUtil.navigateTo('/packageCompany/pages/setting/index');
          }}
        >
          <Avatar
            src={data?.logo}
            name={data?.name}
            defaultImage={ImageLogo}
            size="32"
          />
          <Text>{data?.name ?? '登录/注册'}</Text>
          <Icon name="RightOutlined" size={16} />
        </Space>
      }
      transparent
      safeArea={false}
    >
      <Section className={styles.account}>
        <View className={styles['account-header']}>
          <AmountItem
            title={
              <Space size={32}>
                余额(元)
                <Space
                  size={4}
                  onClick={() => {
                    RouterUtil.navigateTo(
                      '/packageCompany/pages/balance/index',
                    );
                  }}
                >
                  明细
                  <Icon name="RightOutlined" size={14} color="#c7c7c7" />
                </Space>
              </Space>
            }
            fontSize={28}
          >
            {data?.balance ?? 0}
          </AmountItem>
          <Button
            className={styles['account-header-btn']}
            type="primary"
            size="small"
            onClick={() => {
              RouterUtil.navigateTo(
                '/packageCompany/pages/withdraw/index/index',
              );
            }}
          >
            提现
          </Button>
        </View>
        <View className={styles['account-body']}>
          <AmountItem title="今日销售" fontSize={20}>
            {data?.saleToday ?? '0.00'}
          </AmountItem>
          <AmountItem title="今日售出" fontSize={20}>
            {data?.saleVolumeToday ?? 0}
          </AmountItem>
          <AmountItem
            title="关注"
            fontSize={20}
            onClick={() => {
              RouterUtil.navigateTo('/packageCompany/pages/followee/index');
            }}
          >
            {data?.follewedCount ?? 0}
          </AmountItem>
          <AmountItem
            title="粉丝"
            fontSize={20}
            onClick={() => {
              RouterUtil.navigateTo('/packageCompany/pages/fans/index');
            }}
          >
            {data?.fansCount ?? 0}
          </AmountItem>
        </View>
      </Section>
      <Section title="店铺管理">
        <View className={styles.grid}>
          {shopConfig?.map((item) => (
            <IconItem key={item.name} {...item} iconSize={44} />
          ))}
        </View>
      </Section>
      <Section title="二手市场">
        <View className={styles.grid}>
          {marketConfig?.map((item) => <IconItem key={item.name} {...item} />)}
        </View>
      </Section>
      <Section title="设置">
        <View className={styles.grid}>
          {settingConfig?.map((item) => <IconItem key={item.name} {...item} />)}
        </View>
      </Section>
    </BasicLayout>
  );
};

export default Page;
