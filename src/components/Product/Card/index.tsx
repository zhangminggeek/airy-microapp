import { Follow } from '@nutui/icons-react-taro';
import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../constants';
import LeasePrice from '../LeasePrice';
import SellingPrice from '../SellingPrice';

import type { CSSProperties, FC } from 'react';

import { Space, Tag } from '@/components';

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
  onClick?: () => void;
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
  onClick,
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
              <Tag type="primary" key={index}>
                {item}
              </Tag>
            ))}
          </View>
        ) : null}
        <View className={`${PREFIX_CLS}-content-info`}>
          {leasePrice ? (
            <View className={`${PREFIX_CLS}-content-info-lease`}>
              <LeasePrice value={leasePrice} />
            </View>
          ) : null}
          {sellingPrice ? (
            <View className={`${PREFIX_CLS}-content-info-selling`}>
              <SellingPrice value={sellingPrice} />
            </View>
          ) : null}
          <Space className={`${PREFIX_CLS}-content-info-favorites`} size={4}>
            <Follow size={12} />
            <View>{favorites}</View>
          </Space>
        </View>
      </View>
    </View>
  );
};

export default Card;
