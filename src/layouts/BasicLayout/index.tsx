import { Skeleton } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import { ShareWrapper } from '@/wrapper';

import './index.scss';

interface BasicLayoutProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  fill?: boolean;
  loading?: boolean;
  share?: boolean;
}

const PREFIX_CLS = 'g-basic-layout';

const BasicLayout: FC<BasicLayoutProps> = ({
  className,
  style,
  children,
  fill = false,
  loading = false,
  share = true,
}) => {
  const content = (
    <Skeleton rows={10} visible={!loading}>
      {children}
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
      {share ? <ShareWrapper>{content}</ShareWrapper> : content}
    </View>
  );
};

export default BasicLayout;
