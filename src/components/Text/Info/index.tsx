import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { ITouchEvent } from '@tarojs/components';
import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

interface InfoProps {
  className?: string;
  style?: CSSProperties;
  label: ReactNode;
  colon?: boolean;
  children?: ReactNode;
  onClick?: (e: ITouchEvent) => void;
}

const PREFIX_CLS = 'm-text-info';

const Info: FC<InfoProps> = ({
  className,
  style,
  label,
  colon = false,
  children,
  onClick,
}) => {
  return (
    <View
      className={classnames(PREFIX_CLS, className)}
      style={style}
      onClick={onClick}
    >
      <View className={`${PREFIX_CLS}-label`}>
        {label}
        {colon ? ':' : null}
      </View>
      <View className={`${PREFIX_CLS}-content`}>{children}</View>
    </View>
  );
};

export default Info;
