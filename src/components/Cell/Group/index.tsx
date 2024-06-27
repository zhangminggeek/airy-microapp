import { View } from '@tarojs/components';
import classnames from 'classnames';

import Context from '../context';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

interface CellGroupProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  divider?: boolean;
}

const PREFIX_CLS = 'm-cell-group';

const CellGroup: FC<CellGroupProps> = ({
  className,
  style,
  children,
  divider = true,
}) => {
  return (
    <Context.Provider value={{ divider }}>
      <View className={classnames(PREFIX_CLS, className)} style={style}>
        {children}
      </View>
    </Context.Provider>
  );
};

export default CellGroup;
