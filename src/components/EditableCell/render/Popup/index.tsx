import { Button, Popup, type PopupProps } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { cloneElement, Fragment, useState } from 'react';

import { PREFIX_CLS } from '../../constants';

import type { FC } from 'react';

import './index.scss';

interface CustomPopupProps extends Partial<Omit<PopupProps, 'visible'>> {
  okText?: string;
  cancelText?: string;
  action: JSX.Element;
  onOk?: () => Promise<void>;
  onCancel?: () => void;
}

const CustomPopup: FC<CustomPopupProps> = ({
  className,
  action,
  position = 'bottom',
  okText = '确定',
  cancelText = '取消',
  children,
  onOk,
  onCancel,
  onClose,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      {cloneElement(action, {
        onClick() {
          setVisible(true);
        },
      })}
      <Popup
        className={classnames(`${PREFIX_CLS}-popup`, className)}
        visible={visible}
        position={position}
        onClose={() => {
          setVisible(false);
          onClose?.();
        }}
        {...rest}
      >
        <View className={`${PREFIX_CLS}-popup-content`}>
          <View className={`${PREFIX_CLS}-popup-content-body`}>{children}</View>
          <View className={`${PREFIX_CLS}-popup-content-footer`}>
            <Button
              className={classnames(
                `${PREFIX_CLS}-popup-content-footer-btn`,
                `${PREFIX_CLS}-popup-content-footer-btn-cancel`,
              )}
              onClick={() => {
                onCancel?.();
                setVisible(false);
              }}
            >
              {cancelText}
            </Button>
            <Button
              className={classnames(
                `${PREFIX_CLS}-popup-content-footer-btn`,
                `${PREFIX_CLS}-popup-content-footer-btn-ok`,
              )}
              type="primary"
              onClick={async () => {
                await onOk?.();
                setVisible(false);
              }}
            >
              {okText}
            </Button>
          </View>
        </View>
      </Popup>
    </Fragment>
  );
};

export default CustomPopup;
