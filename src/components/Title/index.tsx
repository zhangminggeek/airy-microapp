import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

interface TitleProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  extra?: ReactNode;
}

const prefix = 'm-title';

const Title: FC<TitleProps> = ({ className, style, children, extra }) => {
  return (
    <View className={classnames(prefix, className)} style={style}>
      <View className={`${prefix}-text`}>{children}</View>
      {extra ? <View className={`${prefix}-extra`}>{extra}</View> : null}
    </View>
  );
};

export default Title;
