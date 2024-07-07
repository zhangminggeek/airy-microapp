import { Button, Popup } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import type { PopupProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

interface CustomerServicePopupProps {
  visible: PopupProps['visible'];
  onClose: PopupProps['onClose'];
}

const CustomerServicePopup: FC<CustomerServicePopupProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Popup position="bottom" visible={visible} closeable onClose={onClose}>
      <View className={styles.content}>
        <View className={styles.title}>取消订单</View>
        <View className={styles.desc}>
          <View className={styles.paragraph}>已支付订单暂不支持直接取消</View>
          <View className={styles.paragraph}>如需取消，请联系客服</View>
        </View>
        <Button
          className={styles.btn}
          type="primary"
          openType="contact"
          size="large"
          onClick={() => {
            onClose?.();
          }}
        >
          联系客服
        </Button>
      </View>
    </Popup>
  );
};

export default CustomerServicePopup;
