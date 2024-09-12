import { Button, Dialog, Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import Big from 'big.js';
import { useState } from 'react';

import AmountItem from './AmountItem';
import IconItem from './IconItem';
import styles from './index.module.scss';

import type { IconItemProps } from './IconItem';

import { getCompanyStatistics } from '@/api';
import IconCustomerManagement from '@/assets/icons/customer_management.png';
import IconDressManagement from '@/assets/icons/dress_management.png';
import IconDresserManagement from '@/assets/icons/dresser_management.png';
import IconEmployeeManagement from '@/assets/icons/employee_management.png';
import IconOrderManagement from '@/assets/icons/order_management.png';
import IconReservationManagement from '@/assets/icons/reservation_management.png';
import IconScheduleAnalysis from '@/assets/icons/schedule_analysis.png';
import IconShopManagement from '@/assets/icons/shop_management.png';
import ImageLogo from '@/assets/logo.svg';
import { Avatar, Icon, Section, Space } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';
import { FeatureType } from '@/constants/platform';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { EventUtil, RouterUtil } from '@/utils';

const Page = () => {
  const { info } = useUserStore((state) => state);
  // 是否显示打包回收弹框
  const [showDialogRecycle, setShowDialogRecycle] = useState<boolean>(false);

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
  const { data, mutate, run } = useRequest(getCompanyStatistics, {
    manual: true,
  });

  // 上新提示
  const { renderDialog: renderDialogLaunchTip, open: openDialogLaunchTip } =
    useDialog({
      id: 'launch-tip',
      title: '您暂时不符合要求',
      content: '上新通知将会通知所有关注您店铺的粉丝，要求:粉丝数>=10人',
      hideCancelButton: true,
    });

  const marketConfig: IconItemProps[] = [
    {
      icon: 'PlaneFilled',
      name: '我发布的',
      to: '/pages/user/published/index',
    },
    { icon: 'BagFilled', name: '我的购买', to: '/pages/user/bought/index' },
    { icon: 'CurrencyFilled', name: '我卖出的', to: '/pages/user/sold/index' },
    { icon: 'TagFilled', name: '我求购的', to: '/pages/user/purchase/index' },
    { icon: 'LoveFilled', name: '我的收藏', to: '/pages/user/favorite/index' },
    {
      icon: 'TrumpetFilled',
      name: '上新喇叭',
      onClick() {
        if (data?.fansCount < 10) {
          openDialogLaunchTip();
          return;
        }
        RouterUtil.navigateTo('/packageCompany/pages/launch-notice/index');
      },
    },
    {
      icon: 'PackFilled',
      name: '打包回收',
      onClick() {
        setShowDialogRecycle(true);
      },
    },
  ];

  const getShopConfig = ({
    companyId,
  }: {
    companyId?: number;
  }): IconItemProps[] => [
    {
      icon: IconShopManagement,
      name: '我的店铺',
      onClick() {
        if (!companyId) {
          RouterUtil.navigateTo('/pages/user/login/index');
          return;
        }
        RouterUtil.navigateTo('/packageCompany/pages/index/index', {
          id: companyId,
        });
      },
    },
    {
      icon: IconDressManagement,
      name: '服饰管理',
      to: '/packageDress/pages/management/index',
    },
    {
      icon: IconOrderManagement,
      name: '订单管理',
      disabled: true,
      featureType: FeatureType['订单管理'],
    },
    {
      icon: IconCustomerManagement,
      name: '客户管理',
      disabled: true,
      featureType: FeatureType['客户管理'],
    },
    {
      icon: IconEmployeeManagement,
      name: '员工管理',
      disabled: true,
      featureType: FeatureType['员工管理'],
    },
    {
      icon: IconReservationManagement,
      name: '预约管理',
      disabled: true,
      featureType: FeatureType['预约管理'],
    },
    {
      icon: IconScheduleAnalysis,
      name: '撞档分析',
      disabled: true,
      featureType: FeatureType['撞档分析'],
    },
    {
      icon: IconDresserManagement,
      name: '化妆师管理',
      disabled: true,
      featureType: FeatureType['化妆师管理'],
    },
  ];

  const settingConfig: IconItemProps[] = [
    {
      icon: 'AddressFilled',
      name: '地址管理',
      to: '/packageCompany/pages/address/management/index',
    },
    {
      icon: 'PaymentFilled',
      name: '收款账户',
      to: '/packageCompany/pages/payment/management/index',
    },
    {
      icon: 'MessageFilled',
      name: '微信通知',
      to: '/packagePlatform/pages/official-account/index',
    },
    {
      icon: 'ProtocolFilled',
      name: '协议指南',
      to: '/packagePlatform/pages/protocol/index',
    },
    { icon: 'CustomerServiceFilled', name: '在线客服', openType: 'contact' },
    { icon: 'FeedbackFilled', name: '问题与建议', openType: 'feedback' },
  ];

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
            src={info?.company?.logo}
            name={info?.company?.name}
            defaultImage={ImageLogo}
            size="32"
          />
          <Text>{info?.company?.name ?? '登录/注册'}</Text>
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
            <Space align="baseline">
              <Text>{data?.balance ?? 0}</Text>
              {Big(data?.locked ?? '0').gt(0) ? (
                <Text style={{ fontSize: 12, color: '#e37318' }}>
                  提现中:{data?.locked ?? 0}
                </Text>
              ) : null}
            </Space>
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
      <Image
        className={styles.banner}
        src={`${OSS_ASSETS_DIR}/invitation_banner.jpg`}
        width="100%"
        height={72}
        onClick={() => {
          RouterUtil.navigateTo('/packageCompany/pages/invitation/index');
        }}
      />
      <Section title="二手市场">
        <View className={styles.grid}>
          {marketConfig?.map((item) => <IconItem key={item.name} {...item} />)}
        </View>
      </Section>
      <Section
        className={styles.section}
        title={
          <Space>
            <View>店铺管理</View>
            <View className={styles['title-tip']}>(限时预约免费使用)</View>
          </Space>
        }
      >
        <View className={styles.grid}>
          {getShopConfig({ companyId: info?.companyId })?.map((item) => (
            <IconItem key={item.name} {...item} iconSize={44} />
          ))}
        </View>
      </Section>
      <Section title="设置">
        <View className={styles.grid}>
          {settingConfig?.map((item) => <IconItem key={item.name} {...item} />)}
        </View>
      </Section>
      {/* 打包回收 */}
      <Dialog
        className={styles['dialog-recycle']}
        visible={showDialogRecycle}
        content={
          <View className={styles['dialog-recycle-content']}>
            <View className={styles['dialog-recycle-content-body']}>
              如需打包回收，请联系客服
            </View>
            <View className={styles['dialog-recycle-content-footer']}>
              <Button
                className={styles['dialog-recycle-content-footer-btn']}
                onClick={() => {
                  setShowDialogRecycle(false);
                }}
              >
                取消
              </Button>
              <Button
                className={styles['dialog-recycle-content-footer-btn']}
                type="primary"
                openType="contact"
                onClick={() => {
                  setShowDialogRecycle(false);
                }}
              >
                联系客服
              </Button>
            </View>
          </View>
        }
        footer={null}
      />
      {/* 上新提示 */}
      {renderDialogLaunchTip()}
    </BasicLayout>
  );
};

export default Page;
