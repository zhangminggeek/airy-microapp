import { ArrowLeft } from '@nutui/icons-react-taro';
import { SafeArea, Skeleton } from '@nutui/nutui-react-taro';
import { CoverView, View } from '@tarojs/components';
import { getSystemInfoSync } from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { CSSProperties, FC, ReactNode } from 'react';

import { RouterUtil } from '@/utils';
import { ShareWrapper } from '@/wrapper';

import './index.scss';

interface BasicLayoutProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  title?: ReactNode;
  fill?: boolean;
  back?: boolean;
  home?: boolean;
  loading?: boolean;
  share?: boolean;
}

const PREFIX_CLS = 'g-basic-layout';

const BasicLayout: FC<BasicLayoutProps> = ({
  className,
  style,
  children,
  title,
  fill = false,
  back = false,
  loading = false,
  share = true,
}) => {
  // 手机顶部状态栏高度
  const { statusBarHeight = 0 } = useMemo(() => getSystemInfoSync(), []);

  const content = (
    <Skeleton rows={10} visible={!loading}>
      <View className={`${PREFIX_CLS}-body`}>{children}</View>
    </Skeleton>
  );

  return (
    <View
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-fill`]: fill },
        className,
      )}
      style={style}
      id="g-basic-layout"
    >
      <CoverView style={{ height: `${statusBarHeight}px` }} />
      <CoverView className={`${PREFIX_CLS}-header`}>
        {back && (
          <ArrowLeft
            className={`${PREFIX_CLS}-header-icon`}
            onClick={() => {
              RouterUtil.navigateBack();
            }}
          />
        )}
        <View className={`${PREFIX_CLS}-header-title`}>{title}</View>
      </CoverView>
      {share ? <ShareWrapper>{content}</ShareWrapper> : content}
      <SafeArea position="bottom" />
    </View>
  );
};

export default BasicLayout;
