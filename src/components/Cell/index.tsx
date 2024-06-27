import { View } from '@tarojs/components';
import classnames from 'classnames';
import { CSSProperties, ReactNode, useContext } from 'react';

import Context from './context';
import Group from './Group';

import './index.scss';

interface CellProps {
  className?: string;
  style?: CSSProperties;
  label?: string;
  children?: ReactNode;
}

const PREFIX_CLS = 'm-cell';

const Cell = ({ className, style, label, children }: CellProps) => {
  const { divider } = useContext(Context);

  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <View className={`${PREFIX_CLS}-main`}>
        {label ? (
          <View className={`${PREFIX_CLS}-main-label`}>{label}</View>
        ) : null}
        <View className={`${PREFIX_CLS}-main-content`}>{children}</View>
      </View>
      {divider && <View className={`${PREFIX_CLS}-divider`} />}
    </View>
  );
};

Cell.Group = Group;

export default Cell;
