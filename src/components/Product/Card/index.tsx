import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../constants';
import LeasePrice, { type LeasePriceProps } from '../LeasePrice';
import SellingPrice, { type SellingPriceProps } from '../SellingPrice';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Company, Icon, Space, Tag } from '@/components';
import { ProductStatus, productStatusMap } from '@/constants/product';

import './index.scss';

interface CardProps {
  clasName?: string;
  style?: CSSProperties;
  image?: string;
  title?: string;
  tagList?: string[];
  leasePrice?: LeasePriceProps['value'];
  sellingPrice?: SellingPriceProps['value'];
  status?: number;
  companyLogo?: string;
  companyName?: string;
  extra: {
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
  leasePrice,
  sellingPrice,
  status = ProductStatus['正常'],
  companyLogo,
  companyName,
  extra,
  onClick,
  onCompanyClick,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, clasName)} onClick={onClick}>
      <View className={`${PREFIX_CLS}-header`}>
        <Image
          className={`${PREFIX_CLS}-image`}
          src={image}
          mode="aspectFill"
          width="100%"
          height="100%"
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
          {sellingPrice ? <SellingPrice value={sellingPrice} /> : null}
          {leasePrice ? <LeasePrice value={leasePrice} /> : null}
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
          <Space className={`${PREFIX_CLS}-content-info-favorites`} size={4}>
            <Icon name={extra?.icon} size={12} />
            {extra.text}
          </Space>
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
