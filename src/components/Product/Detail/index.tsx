import { Button, SafeArea } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo } from 'react';

import { ROOT_PREFIX_CLS } from '../constants';
import LeasePrice, { type LeasePriceProps } from '../LeasePrice';
import SellingPrice, { type SellingPriceProps } from '../SellingPrice';

import Field, { type FieldProps } from './Field';
import PictureGroup, { type PictureGroupProps } from './PictureGroup';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Avatar, Icon, Space, Tag } from '@/components';
import { expressMethodMap } from '@/constants/market';
import { productInfoFieldMap, ProductType } from '@/constants/product';
import { RouterUtil } from '@/utils';

import './index.scss';

interface ProductDetailProps {
  className?: string;
  style?: CSSProperties;
  typeCode?: string;
  images?: PictureGroupProps['images'];
  allowSell?: boolean;
  allowLease?: boolean;
  sellingPrice?: SellingPriceProps['value'];
  leasePrice?: LeasePriceProps['value'];
  favorites?: number;
  expressMethod?: number;
  tagList?: string[];
  title?: string;
  desc?: string;
  fieldData?: FieldProps['data'];
  companyId?: number;
  companyName?: string;
  companyLogo?: string;
  companySold?: number;
  companyFans?: number;
  share?: boolean;
  extra?: ReactNode;
  footer?: ReactNode;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-detail`;

const ProductDetail: FC<ProductDetailProps> = ({
  className,
  style,
  typeCode,
  images,
  allowSell = false,
  allowLease = false,
  sellingPrice,
  leasePrice,
  expressMethod,
  tagList = [],
  title,
  desc,
  fieldData,
  companyId,
  companyName,
  companyLogo,
  companySold = 0,
  companyFans = 0,
  share = false,
  extra,
  footer,
}) => {
  const fieldList = useMemo(() => {
    const product = productInfoFieldMap.get(typeCode as ProductType);
    return Array.from(product?.entries() ?? []).map(([key, value]) => ({
      label: value.name,
      field: key,
    }));
  }, [typeCode]);

  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <PictureGroup images={images} />
      <View className={`${PREFIX_CLS}-header`}>
        <View className={`${PREFIX_CLS}-header-title`}>{title}</View>
        {sellingPrice || leasePrice || extra ? (
          <View className={`${PREFIX_CLS}-header-top`}>
            <Space size={16} align="baseline">
              {allowSell ? <SellingPrice value={sellingPrice} /> : null}
              {allowLease ? <LeasePrice value={leasePrice} /> : null}
            </Space>
            {extra ? (
              <View className={`${PREFIX_CLS}-header-top-extra`}>{extra}</View>
            ) : null}
          </View>
        ) : null}
        <View className={`${PREFIX_CLS}-header-secondary`}>
          <View className={`${PREFIX_CLS}-header-secondary-tag-group`}>
            {expressMethod ? (
              <Tag
                className={`${PREFIX_CLS}-header-secondary-tag`}
                type="success"
                plain
              >
                {expressMethodMap.get(expressMethod)?.text}
              </Tag>
            ) : null}
            {tagList?.map((item, index) => (
              <Tag
                key={index}
                className={`${PREFIX_CLS}-header-secondary-tag`}
                type="primary"
                plain
              >
                {item}
              </Tag>
            ))}
          </View>
          {share ? (
            <Button
              className={`${PREFIX_CLS}-header-secondary-share`}
              icon={<Icon name="ShareOneOutlined" size={14} />}
              openType="share"
              fill="none"
            >
              分享
            </Button>
          ) : null}
        </View>
        {desc ? (
          <View className={`${PREFIX_CLS}-header-desc`}>{desc}</View>
        ) : null}
      </View>
      {companyId ? (
        <View className={`${PREFIX_CLS}-company`}>
          <Avatar
            className={`${PREFIX_CLS}-company-logo`}
            src={companyLogo}
            name={companyName}
            size={36}
          />
          <View className={`${PREFIX_CLS}-company-content`}>
            <View className={`${PREFIX_CLS}-company-content-title`}>
              {companyName}
            </View>
            <Space className={`${PREFIX_CLS}-company-content-desc`} size={16}>
              <View>已卖出：{companySold}</View>
              <View>粉丝数：{companyFans}</View>
            </Space>
          </View>
          <Button
            className={`${PREFIX_CLS}-company-btn`}
            size="mini"
            onClick={() => {
              RouterUtil.navigateTo('/packageCompany/pages/index/index', {
                id: companyId,
              });
            }}
          >
            进店逛逛
          </Button>
        </View>
      ) : null}
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
