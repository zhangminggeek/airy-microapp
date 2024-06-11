import { Button, Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';

import AmountItem from './AmountItem';
import { marketConfig, settingConfig, shopConfig } from './config';
import IconItem from './IconItem';
import styles from './index.module.scss';

import ImageLogo from '@/assets/logo.svg';
import { Section, Space } from '@/components';
import { BasicLayout } from '@/layouts';

const Page = () => {
  return (
    <BasicLayout
      className={styles.container}
      title={
        <Space>
          <Image src={ImageLogo} width={32} height={32} />
          <Text>AIRYBLUE 婚纱礼服</Text>
        </Space>
      }
      transparent
    >
      <Section className={styles.account}>
        <View className={styles['account-header']}>
          <AmountItem title="总资产(元)" fontSize={28}>
            111
          </AmountItem>
          <Button
            className={styles['account-header-btn']}
            type="primary"
            size="small"
          >
            提现
          </Button>
        </View>
        <View className={styles['account-body']}>
          <AmountItem title="今日预约" fontSize={20}>
            111
          </AmountItem>
          <AmountItem title="今日订单" fontSize={20}>
            111
          </AmountItem>
          <AmountItem title="今日收入" fontSize={20}>
            111
          </AmountItem>
        </View>
      </Section>
      <Section title="店铺管理">
        <View className={styles.grid}>
          {shopConfig?.map((item) => (
            <IconItem
              key={item.name}
              icon={item.icon}
              name={item.name}
              iconSize={44}
              to={item.to}
            />
          ))}
        </View>
      </Section>
      <Section title="二手市场">
        <View className={styles.grid}>
          {marketConfig?.map((item) => (
            <IconItem
              key={item.name}
              icon={item.icon}
              name={item.name}
              to={item.to}
            />
          ))}
        </View>
      </Section>
      <Section title="设置">
        <View className={styles.grid}>
          {settingConfig?.map((item) => (
            <IconItem
              key={item.name}
              icon={item.icon}
              name={item.name}
              to={item.to}
            />
          ))}
        </View>
      </Section>
    </BasicLayout>
  );
};

export default Page;
