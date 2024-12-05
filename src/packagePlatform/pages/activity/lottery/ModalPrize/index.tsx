import { Button, Dialog, Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import type { Prize } from '../interfaces';
import type { FC } from 'react';

import { Icon } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';

interface ModalPrizeProps {
  visible: boolean;
  prize?: Prize;
  onOk?: () => void;
  onClose?: () => void;
}

const ModalPrize: FC<ModalPrizeProps> = ({ visible, prize, onOk, onClose }) => {
  // 是否中奖
  const isWinning = prize?.type !== 0;

  return (
    <Dialog
      className={styles.dialog}
      visible={visible}
      hideConfirmButton
      hideCancelButton
      closeIconPosition="bottom"
      closeOnOverlayClick={false}
      lockScroll
      closeIcon={<Icon name="QingCOutlined" color="#fff" size={36} />}
      onClose={onClose}
    >
      <View className={styles.container}>
        <Image
          className={styles.ornamental}
          src={`${OSS_ASSETS_DIR}/modal_prize_ornamental.png`}
          width={255}
          height={72}
        />
        <View className={styles.content}>
          <View className={styles.title}>
            {isWinning ? `恭喜你获得${prize?.name}` : `很遗憾，未中奖`}
          </View>
          <View className={styles.image}>
            <Image src={prize?.pic} width={180} height={180} />
          </View>
          {isWinning && (
            <View className={styles.tip}>实物奖品前往我的奖品设置收货地址</View>
          )}
          <Button
            className={styles.btn}
            type="primary"
            size="large"
            block
            onClick={onOk}
          >
            确定
          </Button>
        </View>
      </View>
    </Dialog>
  );
};

export default ModalPrize;
