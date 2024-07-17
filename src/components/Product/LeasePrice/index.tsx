import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo } from 'react';

import { ROOT_PREFIX_CLS } from '../constants';

import type { CSSProperties, FC } from 'react';

import ImageBorrow from '@/assets/icons/borrow.png';
import { formatPriceRange } from '@/utils';

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
    if (!value) return '';
    if (Array.isArray(value)) {
      return formatPriceRange(value);
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
