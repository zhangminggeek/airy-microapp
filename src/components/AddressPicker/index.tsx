import { ArrowRight } from '@nutui/icons-react-taro';
import { Popup } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { Fragment, useMemo, useState } from 'react';

import type { GetAddressResponse } from '@/api';
import type { CSSProperties, FC } from 'react';

import { getAddress } from '@/api';
import { AddressCard } from '@/components';
import { useRequest } from '@/hooks';

import './index.scss';

type AddressType = GetAddressResponse[number];

interface AddressPickerProps {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: number;
  onLoad?: (data: AddressType[]) => void;
  onChange?: (value: number) => void;
}

const PREFIX_CLS = 'm-address-picker';

const AddressPicker: FC<AddressPickerProps> = ({
  className,
  style,
  placeholder,
  value,
  onLoad,
  onChange,
}) => {
  // 是否展示地址选择弹出层
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // 获取地址列表
  const { data } = useRequest(getAddress, {
    onSuccess(data) {
      onLoad?.(data);
    },
  });

  const address = useMemo(() => {
    return data?.find((item) => item.id === value);
  }, [data, value]);

  return (
    <Fragment>
      {value ? (
        <AddressCard
          className={classnames(PREFIX_CLS, className)}
          style={style}
          name={address?.recipient}
          phone={address?.phone}
          province={address?.province}
          city={address?.city}
          area={address?.area}
          address={address?.address}
          isDefault={!!address?.isDefault}
          link
          onClick={() => {
            setShowPopup(true);
          }}
        />
      ) : (
        <View
          className={`${PREFIX_CLS}-empty`}
          onClick={() => {
            setShowPopup(true);
          }}
        >
          <View className={`${PREFIX_CLS}-empty-text`}>{placeholder}</View>
          <ArrowRight className={`${PREFIX_CLS}-empty-icon`} size={16} />
        </View>
      )}
      <Popup
        className={`${PREFIX_CLS}-popup`}
        title="选择地址"
        visible={showPopup}
        position="bottom"
        closeable
        onClose={() => {
          setShowPopup(false);
        }}
      >
        <View className={`${PREFIX_CLS}-popup-content`}>
          {data?.map((item) => (
            <AddressCard
              key={item.id}
              className={classnames(`${PREFIX_CLS}-popup-content-item`, {
                [`${PREFIX_CLS}-popup-content-active`]: item.id === value,
              })}
              name={item.recipient}
              phone={item.phone}
              province={item.province}
              city={item.city}
              area={item.area}
              address={item.address}
              isDefault={!!item.isDefault}
              onClick={() => {
                onChange?.(item.id);
                setShowPopup(false);
              }}
            />
          ))}
        </View>
      </Popup>
    </Fragment>
  );
};

export default AddressPicker;
