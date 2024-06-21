import { Follow } from '@nutui/icons-react-taro';
import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { CSSProperties, FC } from 'react';

import { Space, Tag } from '@/components';

import './index.scss';

interface ProductCardProps {
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

const PREFIX_CLS = 'm-product-card';

const ProductCard: FC<ProductCardProps> = ({
  clasName,
  image,
  title,
  tagList,
  leasePrice,
  sellingPrice,
  favorites = 0,
  onClick,
}) => {
  const _sellingPrice = useMemo(() => {
    if (!sellingPrice) return;
    const [integer, decimal] = Number(sellingPrice).toFixed(2).split('.');
    return [integer, decimal];
  }, [sellingPrice]);

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
              <View className={`${PREFIX_CLS}-content-info-lease-icon`}>
                借
              </View>
              <View
                className={`${PREFIX_CLS}-content-info-lease-text`}
              >{`¥${leasePrice}`}</View>
            </View>
          ) : null}
          {_sellingPrice ? (
            <View className={`${PREFIX_CLS}-content-info-sell`}>
              <View className={`${PREFIX_CLS}-content-info-sell-unit`}>¥</View>
              <View className={`${PREFIX_CLS}-content-info-sell-integer`}>
                {_sellingPrice[0]}
              </View>
              <View className={`${PREFIX_CLS}-content-info-sell-point`}>.</View>
              <View className={`${PREFIX_CLS}-content-info-sell-fractional`}>
                {_sellingPrice[1]}
              </View>
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

export default ProductCard;
