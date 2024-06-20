import { ArrowRight } from '@nutui/icons-react-taro';
import { Popup } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { Fragment, useMemo, useState } from 'react';

import styles from './index.module.scss';

import type { FC } from 'react';

import { getAddress } from '@/api';
import { AddressCard } from '@/components';
import { useRequest } from '@/hooks';

interface AddressPickerProps {
  value?: number;
  onChange?: (value: number) => void;
}

const AddressPicker: FC<AddressPickerProps> = ({ value, onChange }) => {
  // 是否展示地址选择弹出层
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // 获取地址列表
  const { data } = useRequest(getAddress);

  const address = useMemo(() => {
    return data?.find((item) => item.id === value);
  }, [data, value]);

  return (
    <Fragment>
      {value ? (
        <AddressCard
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
          className={styles.empty}
          onClick={() => {
            setShowPopup(true);
          }}
        >
          <View className={styles['empty-text']}>请添加返还地址</View>
          <ArrowRight className={styles['empty-icon']} size={16} />
        </View>
      )}
      <Popup
        className={styles.popup}
        title="选择地址"
        visible={showPopup}
        position="bottom"
        closeable
        onClose={() => {
          setShowPopup(false);
        }}
      >
        <View className={styles['popup-content']}>
          {data?.map((item) => (
            <AddressCard
              key={item.id}
              className={classnames(styles.item, {
                [styles['item-selected']]: item.id === value,
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
