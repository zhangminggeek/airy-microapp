import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../constants';
import LeasePrice from '../LeasePrice';
import SellingPrice from '../SellingPrice';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Space } from '@/components';

import './index.scss';

interface BriefProps {
  clasName?: string;
  style?: CSSProperties;
  image?: string;
  title?: string;
  desc?: string;
  leasePrice?: string;
  sellingPrice?: string;
  footer?: ReactNode;
  onClick?: () => void;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-brief`;

const Brief: FC<BriefProps> = ({
  clasName,
  image,
  title,
  desc,
  leasePrice,
  sellingPrice,
  footer,
  onClick,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, clasName)} onClick={onClick}>
      <View className={`${PREFIX_CLS}-body`}>
        <Image
          className={`${PREFIX_CLS}-body-image`}
          src={image}
          mode="aspectFill"
          width={72}
          height={72}
        />
        <View className={`${PREFIX_CLS}-body-content`}>
          <View className={`${PREFIX_CLS}-body-content-title`}>{title}</View>
          {desc ? (
            <View className={`${PREFIX_CLS}-body-content-desc`}>{desc}</View>
          ) : null}
          <View className={`${PREFIX_CLS}-body-content-price`}>
            <Space size={16}>
              {sellingPrice ? <SellingPrice value={sellingPrice} /> : null}
              {leasePrice ? <LeasePrice value={leasePrice} /> : null}
            </Space>
          </View>
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
