import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { ITouchEvent } from '@tarojs/components';
import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

interface TagProps {
  className?: string;
  style?: CSSProperties;
  type: 'primary' | 'warning';
  children?: ReactNode;
  plain?: boolean;
  border?: boolean;
  onClick?: (event: ITouchEvent) => void;
}

const PREFIX_CLS = 'm-tag';

const Tag: FC<TagProps> = ({
  className,
  style,
  type,
  plain = false,
  border = true,
  children,
  onClick,
}) => {
  return (
    <View
      className={classnames(
        PREFIX_CLS,
        `${PREFIX_CLS}-${type}`,
        { [`${PREFIX_CLS}-plain`]: plain },
        { [`${PREFIX_CLS}-border`]: border },
        className,
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </View>
  );
};

export default Tag;
