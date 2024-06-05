import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import { RouterUtil } from '@/utils';

import './index.scss';

interface LinkProps {
  className?: string;
  style?: CSSProperties;
  to?: string;
  block?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const PREFIX_CLS = 'm-link';

const Link: FC<LinkProps> = ({
  className,
  style,
  to,
  block,
  children,
  onClick,
}) => {
  const handleClick = () => {
    if (to) {
      RouterUtil.navigateTo(to);
    }
    onClick?.();
  };

  return (
    <View
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-block`]: block },
        className,
      )}
      style={style}
      onClick={handleClick}
    >
      {children}
    </View>
  );
};

export default Link;
