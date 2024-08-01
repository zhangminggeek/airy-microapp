import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { ITouchEvent } from '@tarojs/components';
import type { CSSProperties, FC } from 'react';

import { Avatar } from '@/components';

import './index.scss';

interface CompanyProps {
  className?: string;
  style?: CSSProperties;
  logo?: string;
  logoSize?: number;
  name?: string;
  onClick?: (e: ITouchEvent) => void;
}

const PREFIX_CLS = 'm-company';

const Company: FC<CompanyProps> = ({
  className,
  style,
  logo,
  logoSize = 20,
  name,
  onClick,
}) => {
  return (
    <View
      className={classnames(PREFIX_CLS, className)}
      style={style}
      onClick={onClick}
    >
      <Avatar
        className={`${PREFIX_CLS}-logo`}
        src={logo}
        name={name}
        size={`${logoSize}`}
      />
      <View className={`${PREFIX_CLS}-name`}>{name}</View>
    </View>
  );
};

export default Company;
