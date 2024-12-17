import { Dialog, Image, NoticeBar } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { Fragment } from 'react';

import styles from './index.module.scss';

import { Icon, Space } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';

const DIALOG_ID = 'dialog-qrcode';

const Notice = () => {
  return (
    <Fragment>
      <NoticeBar
        className={styles.notice}
        content="关注微信公众号，接受消息通知"
        align="center"
        leftIcon={null}
        rightIcon={<Icon name="RightOutlined" size={16} />}
        onClick={() => {
          Dialog.open(DIALOG_ID, {
            className: styles.dialog,
            content: (
              <View className={styles['dialog-content']}>
                <Image
                  className={styles['dialog-content-qrcode']}
                  src={`${OSS_ASSETS_DIR}/official-account.jpg`}
                  mode="aspectFit"
                  width={175}
                  height={175}
                  showMenuByLongpress
                />
                <Space block className={styles['dialog-content-tip']}>
                  <Icon
                    className={styles['tip-icon']}
                    name="ScanOutlined"
                    size={18}
                  />
                  <View className={styles['tip-text']}>长按识别二维码</View>
                </Space>
              </View>
            ),
            closeIcon: true,
            hideConfirmButton: true,
            hideCancelButton: true,
            onClose() {
              Dialog.close(DIALOG_ID);
            },
          });
        }}
      />
      <Dialog id={DIALOG_ID} />
    </Fragment>
  );
};

export default Notice;
