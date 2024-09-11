import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { PREFIX_CLS as ROOT_PREFIX_CLS } from '../constants';

import type { CSSProperties, FC, MouseEvent, ReactNode } from 'react';

import './index.scss';

export interface FooterProps {
  className?: string;
  style?: CSSProperties;
  extra?: ReactNode;
  btnText?: string;
  children?: ReactNode;
  onConfirm?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-footer`;

const Footer: FC<FooterProps> = ({
  className,
  style,
  extra,
  btnText,
  children,
  onConfirm,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      {extra ? <View className={`${PREFIX_CLS}-extra`}>{extra}</View> : null}
      <View className={`${PREFIX_CLS}-actions`}>
        {children ?? (
          <Button type="primary" size="large" onClick={onConfirm}>
            {btnText}
          </Button>
        )}
      </View>
    </View>
  );
};

export default Footer;
