import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo } from 'react';

import { ROOT_PREFIX_CLS } from '../constants';

import type { CSSProperties, FC } from 'react';

import './index.scss';

interface SellingPriceProps {
  className?: string;
  style?: CSSProperties;
  value?: number;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-selling-price`;

const SellingPrice: FC<SellingPriceProps> = ({ className, style, value }) => {
  const _value = useMemo(() => {
    if (!value) return;
    const [integer, decimal] = Number(value).toFixed(2).split('.');
    return [integer, decimal];
  }, [value]);

  return (
    <View className={classnames(`${PREFIX_CLS}`, className)} style={style}>
      <View className={`${PREFIX_CLS}-unit`}>¥</View>
      <View className={`${PREFIX_CLS}-integer`}>{_value?.[0]}</View>
      <View className={`${PREFIX_CLS}-point`}>.</View>
      <View className={`${PREFIX_CLS}-fractional`}>{_value?.[1]}</View>
    </View>
  );
};

export default SellingPrice;
