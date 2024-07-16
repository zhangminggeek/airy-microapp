import { Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../constants';
import LeasePrice from '../LeasePrice';
import SellingPrice from '../SellingPrice';

import type { CSSProperties, FC, ReactNode } from 'react';

import ImageBorrow from '@/assets/icons/borrow.png';
import { Space } from '@/components';
import { OrderType } from '@/constants/order';

import './index.scss';

interface BriefProps {
  className?: string;
  style?: CSSProperties;
  type?: number;
  image?: string;
  title?: string;
  desc?: string;
  leasePrice?: string;
  sellingPrice?: string;
  total?: string;
  header?: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-brief`;

const Brief: FC<BriefProps> = ({
  className,
  type,
  image,
  title,
  desc,
  leasePrice,
  sellingPrice,
  total,
  header,
  footer,
  onClick,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} onClick={onClick}>
      {header ? <View className={`${PREFIX_CLS}-header`}>{header}</View> : null}
      <View className={`${PREFIX_CLS}-body`}>
        <Image
          className={`${PREFIX_CLS}-body-image`}
          src={image}
          mode="aspectFill"
          width={72}
          height={72}
        />
        <View className={`${PREFIX_CLS}-body-content`}>
          <View className={`${PREFIX_CLS}-body-content-title`}>
            {type === OrderType['借调'] && (
              <Image
                className={`${PREFIX_CLS}-icon`}
                src={ImageBorrow}
                width={18}
                height={18}
              />
            )}
            <View className={`${PREFIX_CLS}-body-content-title-text`}>
              {title}
            </View>
          </View>
          {desc ? (
            <View className={`${PREFIX_CLS}-body-content-desc`}>{desc}</View>
          ) : null}
          {sellingPrice || leasePrice ? (
            <View className={`${PREFIX_CLS}-body-content-price`}>
              <Space size={16}>
                {sellingPrice ? <SellingPrice value={sellingPrice} /> : null}
                {leasePrice ? <LeasePrice value={leasePrice} /> : null}
              </Space>
            </View>
          ) : null}
          {total ? (
            <View className={`${PREFIX_CLS}-body-content-total`}>
              <Space>
                <Text>实付:</Text>
                <SellingPrice value={total} />
              </Space>
            </View>
          ) : null}
        </View>
      </View>
      {footer ? (
        <View
          className={`${PREFIX_CLS}-footer`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {footer}
        </View>
      ) : null}
    </View>
  );
};

export default Brief;
