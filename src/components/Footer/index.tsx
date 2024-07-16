import { Button, SafeArea } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, MouseEvent, ReactNode } from 'react';

import './index.scss';

interface FooterProps {
  className?: string;
  style?: CSSProperties;
  extra?: ReactNode;
  actions?: ReactNode;
  btnText?: string;
  onConfirm?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const PREFIX_CLS = 'm-footer';

const Footer: FC<FooterProps> = ({
  className,
  style,
  extra,
  actions,
  btnText,
  onConfirm,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <View className={`${PREFIX_CLS}-content`}>
        {extra ? (
          <View className={`${PREFIX_CLS}-content-extra`}>{extra}</View>
        ) : null}
        <View className={`${PREFIX_CLS}-content-actions`}>
          {actions ?? (
            <Button type="primary" size="large" onClick={onConfirm}>
              {btnText}
            </Button>
          )}
        </View>
      </View>
      <SafeArea position="bottom" />
    </View>
  );
};

export default Footer;
