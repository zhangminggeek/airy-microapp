import { Skeleton } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { getSystemInfoSync } from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo } from 'react';

import { PREFIX_CLS } from './constants';
import Footer, { type FooterProps } from './Footer';
import LoginTip from './LoginTip';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Icon, SafeArea, Space } from '@/components';
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
  footer?: FooterProps | null;
  safeArea?:
    | boolean
    | {
        show: boolean;
        withTabBar: boolean;
      };
}

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
  footer,
  safeArea = false,
}) => {
  const { info } = useUserStore((state) => state);
  // 手机顶部状态栏高度
  const { statusBarHeight = 0 } = useMemo(() => getSystemInfoSync(), []);

  // 是否显示登录提示
  const showLoginTip = useMemo(
    () => loginTip && !info?.account,
    [loginTip, info],
  );

  // 是否显示安全区域
  const safeAreaOption = useMemo(() => {
    if (!safeArea) {
      return { show: false, withTabBar: false };
    }
    if (typeof safeArea === 'boolean') {
      return { show: safeArea, withTabBar: false };
    }
    return safeArea;
  }, [safeArea]);

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
      {showLoginTip || footer ? (
        <View
          className={classnames(`${PREFIX_CLS}-actions`, {
            [`${PREFIX_CLS}-actions-with-tab-bar`]: safeAreaOption.withTabBar,
          })}
        >
          {showLoginTip ? <LoginTip /> : null}
          {footer ? <Footer {...footer} /> : null}
        </View>
      ) : null}
      {safeAreaOption.show ? (
        <SafeArea withTabBar={safeAreaOption.withTabBar} />
      ) : null}
    </View>
  );
};

export default BasicLayout;
