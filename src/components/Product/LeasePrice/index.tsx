import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../constants';

import type { CSSProperties, FC } from 'react';

import ImageBorrow from '@/assets/icons/borrow.png';

import './index.scss';

interface SellingPriceProps {
  className?: string;
  style?: CSSProperties;
  value?: number;
  iconOnly?: boolean;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-lease-price`;

const SellingPrice: FC<SellingPriceProps> = ({
  className,
  style,
  value,
  iconOnly = false,
}) => {
  return (
    <View className={classnames(`${PREFIX_CLS}`, className)} style={style}>
      <Image
        className={`${PREFIX_CLS}-icon`}
        src={ImageBorrow}
        width={18}
        height={18}
      />
      {iconOnly ? null : (
        <View className={`${PREFIX_CLS}-text`}>{`¥${value}`}</View>
      )}
    </View>
  );
};

export default SellingPrice;
