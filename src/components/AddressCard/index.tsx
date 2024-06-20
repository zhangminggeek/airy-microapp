import { ArrowRight } from '@nutui/icons-react-taro';
import { Text, View } from '@tarojs/components';
import classnames from 'classnames';
import { useEffect, useMemo } from 'react';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Tag } from '@/components';
import { useGlobalStore } from '@/models';

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
  const { administrativeCodeTree, fetchAdministrativeCode } = useGlobalStore(
    (state) => state,
  );

  useEffect(() => {
    fetchAdministrativeCode();
  }, []);

  const _address = useMemo(() => {
    const p = administrativeCodeTree?.find((item) => item.code === province);
    const c = p?.children?.find((item) => item.code === city);
    const a = c?.children?.find((item) => item.code === area);
    return `${p?.name}${c?.name}${a?.name}${address}`;
  }, [province, city, area, address, administrativeCodeTree]);

  return (
    <View
      className={classnames(PREFIX_CLS, className)}
      style={style}
      onClick={onClick}
    >
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
        <View className={`${PREFIX_CLS}-content-desc`}>{_address}</View>
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
