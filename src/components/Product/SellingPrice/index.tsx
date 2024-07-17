import { View } from '@tarojs/components';
import classnames from 'classnames';
import { Fragment, useMemo } from 'react';

import { ROOT_PREFIX_CLS } from '../constants';

import type { CSSProperties, FC } from 'react';

import { formatPriceRange } from '@/utils';

import './index.scss';

export interface SellingPriceProps {
  className?: string;
  style?: CSSProperties;
  value?: string | [string | undefined, string | undefined];
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-selling-price`;

const SellingPrice: FC<SellingPriceProps> = ({ className, style, value }) => {
  const signleValue = useMemo(() => {
    if (!value || typeof value !== 'string') return '';
    const [integer, decimal] = Number(value).toFixed(2).split('.');
    return [integer, decimal];
  }, [value]);

  const rangeValue = useMemo(() => {
    if (!value || !Array.isArray(value)) return '';
    return formatPriceRange(value);
  }, [value]);

  return (
    <View className={classnames(`${PREFIX_CLS}`, className)} style={style}>
      {Array.isArray(value) ? (
        <Fragment>
          <View className={`${PREFIX_CLS}-unit`}>¥</View>
          <View className={`${PREFIX_CLS}-integer`}>{rangeValue}</View>
        </Fragment>
      ) : (
        <Fragment>
          <View className={`${PREFIX_CLS}-unit`}>¥</View>
          <View className={`${PREFIX_CLS}-integer`}>{signleValue?.[0]}</View>
          <View className={`${PREFIX_CLS}-point`}>.</View>
          <View className={`${PREFIX_CLS}-fractional`}>{signleValue?.[1]}</View>
        </Fragment>
      )}
    </View>
  );
};

export default SellingPrice;
