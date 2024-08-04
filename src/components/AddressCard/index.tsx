import { Text, View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Icon, Tag } from '@/components';
import { useAddress } from '@/hooks';

import './index.scss';

interface AddressCardProps {
  className?: string;
  style?: CSSProperties;
  name?: string;
  phone?: string;
  province?: string;
  city?: string;
  area?: string;
  address?: string;
  isDefault?: boolean;
  link?: boolean;
  footer?: ReactNode;
  onClick?: () => void;
}

const PREFIX_CLS = 'm-address-card';

const AddressCard: FC<AddressCardProps> = ({
  className,
  style,
  name,
  phone,
  province,
  city,
  area,
  address,
  isDefault,
  link,
  footer,
  onClick,
}) => {
  const { address: _address } = useAddress({ province, city, area, address });

  return (
    <View
      className={classnames(PREFIX_CLS, className)}
      style={style}
      onClick={onClick}
    >
      <View className={`${PREFIX_CLS}-content`}>
        <View className={`${PREFIX_CLS}-content-title`}>
          {isDefault && (
            <Tag
              className={`${PREFIX_CLS}-content-title-tag`}
              type="primary"
              plain
            >
              默认
            </Tag>
          )}
          <Text className={`${PREFIX_CLS}-content-title-name`}>{name}</Text>
          <Text className={`${PREFIX_CLS}-content-title-phone`}>{phone}</Text>
        </View>
        <View className={`${PREFIX_CLS}-content-desc`}>{_address}</View>
        {link && (
          <View className={`${PREFIX_CLS}-content-icon`}>
            <Icon name="RightOutlined" size={16} />
          </View>
        )}
      </View>
      {footer ? <View className={`${PREFIX_CLS}-footer`}>{footer}</View> : null}
    </View>
  );
};

export default AddressCard;
