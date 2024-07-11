import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../constants';
import LeasePrice from '../LeasePrice';
import SellingPrice from '../SellingPrice';

import type { CSSProperties, FC } from 'react';

import { Avatar, Icon, Space, Tag } from '@/components';
import { ProductStatus, productStatusMap } from '@/constants/product';

import './index.scss';

interface CardProps {
  clasName?: string;
  style?: CSSProperties;
  image?: string;
  title?: string;
  tagList?: string[];
  leasePrice?: string;
  sellingPrice?: string;
  favorites?: number;
  status?: number;
  companyLogo?: string;
  companyName?: string;
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
  favorites = 0,
  status = ProductStatus['正常'],
  companyLogo,
  companyName,
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
            {tagList?.map((item, index) => (
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
          <Space
            className={`${PREFIX_CLS}-content-info-company`}
            size={4}
            onClick={(e) => {
              e.stopPropagation();
              onCompanyClick?.();
            }}
          >
            <Avatar src={companyLogo} name={companyName} size="18" />
            <View className={`${PREFIX_CLS}-content-info-company-name`}>
              {companyName}
            </View>
          </Space>
          <Space className={`${PREFIX_CLS}-content-info-favorites`} size={4}>
            <Icon name="LoveOutlined" size={12} />
            {favorites}
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
