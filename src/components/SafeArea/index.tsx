import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { CSSProperties, FC } from 'react';

import './index.scss';

interface SafeAreaProps {
  className?: string;
  style?: CSSProperties;
  transparent?: boolean;
  withTabBar?: boolean;
}

const PREFIX_CLS = 'm-safe-area';

const SafeArea: FC<SafeAreaProps> = ({
  className,
  style,
  transparent = true,
  withTabBar = false,
}) => {
  const { backgroundColor, ...restStyles } = style ?? {};

  const _backgroundColor = useMemo(() => {
    if (transparent) return 'transparent';
    return style?.backgroundColor;
  }, [backgroundColor, transparent]);

  return (
    <View
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-with-tab-bar`]: withTabBar },
        className,
      )}
      style={{
        backgroundColor: _backgroundColor,
        ...restStyles,
      }}
    />
  );
};

export default SafeArea;
