import { Button, Popup } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { PREFIX_CLS } from './constants';

import { getAddress } from '@/api';
import { AddressCard, Icon } from '@/components';
import { useRequest } from '@/hooks';
import { EventUtil, RouterUtil } from '@/utils';
import { EventsKey } from '@/utils/event';

interface UseAddressPopupProps {
  visible: boolean;
  value?: number;
  onLoad?: (data: any) => void;
  onChange?: (id: number) => void;
  onClose?: () => void;
}

const useAddressPopup = ({
  visible,
  value,
  onLoad,
  onChange,
  onClose,
}: UseAddressPopupProps) => {
  // 获取地址列表
  const { data, run } = useRequest(getAddress, {
    onSuccess(data) {
      onLoad?.(data);
    },
  });

  // 监听地址列表更新事件
  EventUtil.useEvents(EventsKey.UPDATE_ADDRESS_LIST, () => {
    run();
  });

  return {
    data,
    fetchAddressList: run,
    popup: (
      <Popup
        className={`${PREFIX_CLS}-popup`}
        title="选择地址"
        visible={visible}
        position="bottom"
        closeable
        onOpen={() => {
          run();
        }}
        onClose={onClose}
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
                onClose?.();
              }}
            />
          ))}
          <View className={`${PREFIX_CLS}-popup-content-btn-wrapper`}>
            <Button
              className={`${PREFIX_CLS}-popup-content-btn`}
              type="primary"
              fill="outline"
              block
              icon={
                <Icon
                  className={`${PREFIX_CLS}-popup-content-btn-icon`}
                  name="PlusOutlined"
                />
              }
              onClick={() => {
                RouterUtil.navigateTo(
                  '/packageCompany/pages/address/action/index',
                );
              }}
            >
              创建地址
            </Button>
          </View>
        </View>
      </Popup>
    ),
  };
};

export default useAddressPopup;
