import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

interface TagProps {
  className?: string;
  style?: CSSProperties;
  type: 'primary';
  children?: ReactNode;
}

const PREFIX_CLS = 'm-tag';

const Tag: FC<TagProps> = ({ className, style, type, children }) => {
  return (
    <View
      className={classnames(PREFIX_CLS, `${PREFIX_CLS}-${type}`, className)}
      style={style}
    >
      {children}
    </View>
  );
};

export default Tag;
