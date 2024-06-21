import { View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../constants';

import type { CSSProperties, FC } from 'react';

import './index.scss';

interface SellingPriceProps {
  className?: string;
  style?: CSSProperties;
  value?: string;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-lease-price`;

const SellingPrice: FC<SellingPriceProps> = ({ className, style, value }) => {
  return (
    <View className={classnames(`${PREFIX_CLS}`, className)} style={style}>
      <View className={`${PREFIX_CLS}-icon`}>借</View>
      <View className={`${PREFIX_CLS}-text`}>{`¥${value}`}</View>
    </View>
  );
};

export default SellingPrice;
