import { View } from '@tarojs/components';
import classnames from 'classnames';
import { Fragment, useMemo } from 'react';

import { ROOT_PREFIX_CLS } from '../constants';

import type { CSSProperties, FC } from 'react';

import './index.scss';

export interface SellingPriceProps {
  className?: string;
  style?: CSSProperties;
  value?: string | [string | undefined, string | undefined];
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-selling-price`;

const SellingPrice: FC<SellingPriceProps> = ({ className, style, value }) => {
  const signleValue = useMemo(() => {
    if (!value) return;
    if (Array.isArray(value)) {
      if (value[0] && value[1]) {
        return value.join('-');
      } else if (value[0]) {
        return `${value[0]}以上`;
      } else if (value[1]) {
        return `${value[0]}以下`;
      } else {
        return null;
      }
    } else {
      const [integer, decimal] = Number(value).toFixed(2).split('.');
      return [integer, decimal];
    }
  }, [value]);

  const rangeValue = useMemo(() => {
    if (!value || !Array.isArray(value)) return;
    if (value[0] && value[1]) {
      return value.join('-');
    } else if (value[0]) {
      return `${value[0]}以上`;
    } else if (value[1]) {
      return `${value[0]}以下`;
    } else {
      return null;
    }
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
