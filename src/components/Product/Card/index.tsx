import { View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../constants';
import LeasePrice, { type LeasePriceProps } from '../LeasePrice';
import SellingPrice, { type SellingPriceProps } from '../SellingPrice';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Company, Icon, Media, Space, Tag } from '@/components';
import { ProductStatus, productStatusMap } from '@/constants/product';
import { isNil } from '@/utils';

import './index.scss';

interface CardProps {
  clasName?: string;
  style?: CSSProperties;
  image?: string;
  title?: string;
  tagList?: string[];
  allowSell?: boolean;
  allowLease?: boolean;
  leasePrice?: LeasePriceProps['value'];
  sellingPrice?: SellingPriceProps['value'];
  priceTip?: ReactNode;
  status?: number;
  companyLogo?: string;
  companyName?: string;
  extra?: {
    icon: string;
    text?: ReactNode;
  };
  onClick?: () => void;
  onCompanyClick?: () => void;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-card`;

const Card: FC<CardProps> = ({
  clasName,
  image,
  title,
  tagList,
  allowSell = false,
  allowLease = false,
  leasePrice,
  sellingPrice,
  priceTip,
  status = ProductStatus['正常'],
  companyLogo,
  companyName,
  extra,
  onClick,
  onCompanyClick,
}) => {
  const showPrice = (allow: boolean, value?: any) => {
    if (!allow) return false;
    if (isNil(value)) return false;
    if (typeof value === 'string' && value === '') return false;
    if (Array.isArray(value)) {
      if (!value.length) return false;
      if (value.every((item) => isNil(item))) return false;
      return true;
    }
    return true;
  };

  return (
    <View className={classnames(PREFIX_CLS, clasName)} onClick={onClick}>
      <View className={`${PREFIX_CLS}-header`}>
        <Media
          className={`${PREFIX_CLS}-header-media`}
          src={image}
          mode="widthFix"
          controls={false}
        />
      </View>
      <View className={`${PREFIX_CLS}-content`}>
        <View className={`${PREFIX_CLS}-content-title`}>{title}</View>
        {tagList?.length ? (
          <View className={`${PREFIX_CLS}-content-tag-group`}>
            {tagList?.slice(0, 4)?.map((item, index) => (
              <Tag key={index} type="primary" plain>
                {item}
              </Tag>
            ))}
          </View>
        ) : null}
        <View className={`${PREFIX_CLS}-content-price`}>
          {showPrice(allowSell, sellingPrice) ? (
            <SellingPrice value={sellingPrice} />
          ) : null}
          {showPrice(allowLease, leasePrice) ? (
            <LeasePrice value={leasePrice} />
          ) : null}
          {priceTip ? (
            <View className={`${PREFIX_CLS}-content-price-tip`}>
              {priceTip}
            </View>
          ) : null}
        </View>
        <View className={`${PREFIX_CLS}-content-info`}>
          <Company
            className={`${PREFIX_CLS}-content-info-company`}
            logo={companyLogo}
            name={companyName}
            onClick={(e) => {
              e.stopPropagation();
              onCompanyClick?.();
            }}
          />
          {extra ? (
            <Space className={`${PREFIX_CLS}-content-info-favorites`} size={4}>
              <Icon name={extra.icon} size={12} />
              {extra.text}
            </Space>
          ) : null}
        </View>
      </View>
      {status !== ProductStatus['正常'] ? (
        <View className={`${PREFIX_CLS}-mask`}>
          <View className={`${PREFIX_CLS}-mask-tag`}>
            {productStatusMap.get(status)?.text}
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Card;
