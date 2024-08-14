import {
  Button,
  Divider,
  Image,
  SafeArea,
  Skeleton,
} from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { getSystemInfoSync } from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { CSSProperties, FC, ReactNode } from 'react';

import ImageLogo from '@/assets/logo.svg';
import { Icon, Space } from '@/components';
import { TAB_PAGE } from '@/constants';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

import './index.scss';

interface BasicLayoutProps {
  className?: string;
  bodyClassName?: string;
  style?: CSSProperties;
  children?: ReactNode;
  title?: ReactNode;
  fill?: boolean;
  back?: boolean | string;
  home?: boolean;
  transparent?: boolean;
  loading?: boolean;
  loginTip?: boolean;
  safeArea?: boolean;
}

const PREFIX_CLS = 'g-basic-layout';

const summary = [
  { label: '注册店铺', value: '1300+' },
  { label: '累计成交', value: '23000+', unit: '套' },
  { label: '平均成交时间', value: '0.5', unit: '天' },
  { label: '好评率', value: '99.5', unit: '%' },
];

const BasicLayout: FC<BasicLayoutProps> = ({
  className,
  bodyClassName,
  style,
  children,
  title,
  fill = false,
  transparent = false,
  back = false,
  home = false,
  loading = false,
  loginTip = true,
  safeArea = true,
}) => {
  const { info } = useUserStore((state) => state);
  // 手机顶部状态栏高度
  const { statusBarHeight = 0 } = useMemo(() => getSystemInfoSync(), []);

  const content = (
    <Skeleton rows={10} visible={!loading}>
      <View className={classnames(`${PREFIX_CLS}-body`, bodyClassName)}>
        {children}
      </View>
    </Skeleton>
  );

  return (
    <View
      className={classnames(
        PREFIX_CLS,
        {
          [`${PREFIX_CLS}-fill`]: fill,
          [`${PREFIX_CLS}-transparent`]: transparent,
          [`${PREFIX_CLS}-back`]: back,
        },
        className,
      )}
      style={style}
      id="g-basic-layout"
    >
      <View
        className={`${PREFIX_CLS}-status-bar`}
        style={{ height: `${statusBarHeight}px` }}
      />
      <View className={`${PREFIX_CLS}-header`}>
        {back && (
          <Space>
            <Icon
              className={`${PREFIX_CLS}-header-icon`}
              name="LeftOutlined"
              onClick={() => {
                if (typeof back === 'string') {
                  if (TAB_PAGE.includes(back)) {
                    RouterUtil.switchTab(back);
                  } else {
                    RouterUtil.navigateTo(back);
                  }
                } else {
                  RouterUtil.navigateBack();
                }
              }}
            />
            {home && (
              <Icon
                className={`${PREFIX_CLS}-header-icon`}
                name="LeftOutlined"
                onClick={() => {
                  RouterUtil.switchTab('/pages/market/index/index');
                }}
              />
            )}
          </Space>
        )}
        <View className={`${PREFIX_CLS}-header-title`}>{title}</View>
      </View>
      {content}
      {loginTip && !info?.account ? (
        <View className={`${PREFIX_CLS}-tip`}>
          <View className={`${PREFIX_CLS}-tip-header`}>
            <Space className={`${PREFIX_CLS}-tip-header-brand`} size={4}>
              <Image
                className={`${PREFIX_CLS}-tip-header-brand-logo`}
                src={ImageLogo}
                width={24}
                height={24}
              />
              <Text className={`${PREFIX_CLS}-tip-header-brand-text`}>
                AIRY
              </Text>
            </Space>
            <View className={`${PREFIX_CLS}-tip-header-intro`}>
              快速处理您的二手库存，最新最好看的婚纱礼服等您购买，还有超多店铺功能免费使用
            </View>
            <Button
              className={`${PREFIX_CLS}-tip-header-btn`}
              type="primary"
              size="small"
              onClick={() => {
                RouterUtil.navigateTo('/pages/user/login/index');
              }}
            >
              登录
            </Button>
          </View>
          <Divider className={`${PREFIX_CLS}-tip-divider`} />
          <View className={`${PREFIX_CLS}-tip-body`}>
            {summary.map((item) => (
              <View key={item.label} className={`${PREFIX_CLS}-tip-body-item`}>
                <View className={`${PREFIX_CLS}-tip-body-item-content`}>
                  <Text className={`${PREFIX_CLS}-tip-body-item-content-value`}>
                    {item.value}
                  </Text>
                  <Text className={`${PREFIX_CLS}-tip-body-item-content-unit`}>
                    {item.unit}
                  </Text>
                </View>
                <View className={`${PREFIX_CLS}-tip-body-item-label`}>
                  {item.label}
                </View>
              </View>
            ))}
          </View>
        </View>
      ) : null}
      {safeArea ? <SafeArea position="bottom" /> : null}
    </View>
  );
};

export default BasicLayout;
