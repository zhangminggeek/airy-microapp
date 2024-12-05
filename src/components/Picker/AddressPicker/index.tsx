import { View } from '@tarojs/components';
import classnames from 'classnames';
import { Fragment, useMemo, useState } from 'react';

import { PREFIX_CLS } from './constants';
import useAddressPopup from './useAddressPopup';

import type { GetAddressResponse } from '@/api';
import type { CSSProperties, FC } from 'react';

import { AddressCard, Icon } from '@/components';

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

  // 地址选择弹出层
  const { popup, data } = useAddressPopup({
    visible: showPopup,
    value,
    onLoad,
    onChange,
    onClose: () => {
      setShowPopup(false);
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
          <Icon
            className={`${PREFIX_CLS}-empty-icon`}
            name="RightOutlined"
            size={16}
          />
        </View>
      )}
      {popup}
    </Fragment>
  );
};

export default AddressPicker;
