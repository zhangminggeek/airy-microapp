import { SafeArea } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

interface PageFooterProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const PREFIX_CLS = 'm-page-footer';

const PageFooter: FC<PageFooterProps> = ({ className, style, children }) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <View className={`${PREFIX_CLS}-content`}>{children}</View>
      <SafeArea position="bottom" />
    </View>
  );
};

export default PageFooter;
