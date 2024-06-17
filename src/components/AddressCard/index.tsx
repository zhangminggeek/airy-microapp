import { ArrowRight } from '@nutui/icons-react-taro';
import { Text, View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Tag } from '@/components';

import './index.scss';

interface AddressCardProps {
  className?: string;
  style?: CSSProperties;
  name?: string;
  phone?: string;
  address?: string;
  isDefault?: boolean;
  link?: boolean;
  footer?: ReactNode;
}

const PREFIX_CLS = 'm-address-card';

const AddressCard: FC<AddressCardProps> = ({
  className,
  style,
  name,
  phone,
  address,
  isDefault,
  link,
  footer,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <View className={`${PREFIX_CLS}-content`}>
        <View className={`${PREFIX_CLS}-content-title`}>
          {isDefault && (
            <Tag className={`${PREFIX_CLS}-content-title-tag`} type="primary">
              默认
            </Tag>
          )}
          <Text className={`${PREFIX_CLS}-content-title-name`}>{name}</Text>
          <Text className={`${PREFIX_CLS}-content-title-phone`}>{phone}</Text>
        </View>
        <View className={`${PREFIX_CLS}-content-desc`}>{address}</View>
        {link && (
          <View className={`${PREFIX_CLS}-content-icon`}>
            <ArrowRight size={16} color="#C7C7C7" />
          </View>
        )}
      </View>
      {footer ? <View className={`${PREFIX_CLS}-footer`}>{footer}</View> : null}
    </View>
  );
};

export default AddressCard;
