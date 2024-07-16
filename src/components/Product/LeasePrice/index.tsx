import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo } from 'react';

import { ROOT_PREFIX_CLS } from '../constants';

import type { CSSProperties, FC } from 'react';

import ImageBorrow from '@/assets/icons/borrow.png';

import './index.scss';

export interface LeasePriceProps {
  className?: string;
  style?: CSSProperties;
  value?: string | [string | undefined, string | undefined];
  iconOnly?: boolean;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-lease-price`;

const LeasePrice: FC<LeasePriceProps> = ({
  className,
  style,
  value,
  iconOnly = false,
}) => {
  const price = useMemo(() => {
    if (!value) return null;
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
      return value;
    }
  }, [value]);

  const content = useMemo(() => {
    if (iconOnly) return null;
    if (!price) return null;
    return <View className={`${PREFIX_CLS}-text`}>¥{price}</View>;
  }, [iconOnly, price]);

  return (
    <View className={classnames(`${PREFIX_CLS}`, className)} style={style}>
      <Image
        className={`${PREFIX_CLS}-icon`}
        src={ImageBorrow}
        width={18}
        height={18}
      />
      {content}
    </View>
  );
};

export default LeasePrice;
