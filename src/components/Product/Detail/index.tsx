import { SafeArea } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../constants';
import LeasePrice from '../LeasePrice';
import SellingPrice from '../SellingPrice';

import Field, { type FieldProps } from './Field';
import PictureGroup, { type PictureGroupProps } from './PictureGroup';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Space, Tag } from '@/components';

import './index.scss';

interface ProductDetailProps {
  className?: string;
  style?: CSSProperties;
  images?: PictureGroupProps['images'];
  sellingPrice?: string;
  leasePrice?: string;
  favorites?: number;
  tagList?: string[];
  title?: string;
  desc?: string;
  fieldList?: FieldProps['fieldList'];
  fieldData?: FieldProps['data'];
  extra?: ReactNode;
  footer?: ReactNode;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-detail`;

const ProductDetail: FC<ProductDetailProps> = ({
  className,
  style,
  images,
  sellingPrice,
  leasePrice,
  tagList = [],
  title,
  desc,
  fieldList = [],
  fieldData,
  extra,
  footer,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <PictureGroup images={images} />
      <View className={`${PREFIX_CLS}-header`}>
        <View className={`${PREFIX_CLS}-header-top`}>
          <Space size={16}>
            {sellingPrice ? <SellingPrice value={sellingPrice} /> : null}
            {leasePrice ? <LeasePrice value={leasePrice} /> : null}
          </Space>
          {extra ? (
            <View className={`${PREFIX_CLS}-header-top-extra`}>{extra}</View>
          ) : null}
        </View>
        {tagList?.length ? (
          <View className={`${PREFIX_CLS}-header-tag-group`}>
            {tagList.map((item, index) => (
              <Tag
                key={index}
                className={`${PREFIX_CLS}-header-tag`}
                type="primary"
                plain
              >
                {item}
              </Tag>
            ))}
          </View>
        ) : null}
        <View className={`${PREFIX_CLS}-header-title`}>{title}</View>
        {desc ? (
          <View className={`${PREFIX_CLS}-header-desc`}>{desc}</View>
        ) : null}
      </View>
      <View className={`${PREFIX_CLS}-body`}>
        <Field fieldList={fieldList} data={fieldData} />
      </View>
      {footer ? (
        <View className={`${PREFIX_CLS}-footer`}>
          {footer}
          <SafeArea position="bottom" />
        </View>
      ) : null}
    </View>
  );
};

export default ProductDetail;
