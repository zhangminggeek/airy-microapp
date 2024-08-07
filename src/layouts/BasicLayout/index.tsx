import { SafeArea, Skeleton, Space } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { getSystemInfoSync } from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Icon } from '@/components';
import { TAB_PAGE } from '@/constants';
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
  safeArea?: boolean;
}

const PREFIX_CLS = 'g-basic-layout';

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
  safeArea = true,
}) => {
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
      {safeArea ? <SafeArea position="bottom" /> : null}
    </View>
  );
};

export default BasicLayout;
