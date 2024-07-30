import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { IconProps } from '@/components/Icon';
import type { CSSProperties, FC, ReactNode } from 'react';

import { Icon } from '@/components';

import './index.scss';

interface ResultProps {
  className?: string;
  style?: CSSProperties;
  status?: 'success' | 'waiting';
  icon?: ReactNode;
  title?: ReactNode;
  desc?: ReactNode;
  extra?: ReactNode;
  okText?: ReactNode;
  cancelText?: ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

const PREFIX_CLS = 'm-result';

const Result: FC<ResultProps> = ({
  className,
  style,
  status,
  icon,
  title,
  desc,
  extra,
  okText,
  cancelText,
  onOk,
  onCancel,
}) => {
  const _icon = useMemo(() => {
    if (icon) return icon;
    const config: IconProps = {} as any;
    switch (status) {
      case 'success':
        config.name = 'SuccessFilled';
        break;
      case 'waiting':
        config.name = 'ShiJianFilled';
        break;
      default:
        break;
    }
    return <Icon {...config} size={56} />;
  }, [status, icon]);

  const _extra = useMemo(() => {
    if (extra) return extra;
    if (!okText && !cancelText) return null;
    const isMultiple = (okText ? 1 : 0) + (cancelText ? 1 : 0) > 1;
    return (
      <View
        className={classnames(`${PREFIX_CLS}-extra-space`, {
          [`${PREFIX_CLS}-extra-space-multiple`]: isMultiple,
        })}
      >
        {cancelText ? (
          <Button
            className={`${PREFIX_CLS}-extra-btn`}
            size={isMultiple ? 'large' : 'xlarge'}
            block
            onClick={onCancel}
          >
            {cancelText}
          </Button>
        ) : null}
        {okText ? (
          <Button
            className={`${PREFIX_CLS}-extra-btn`}
            type="primary"
            size={isMultiple ? 'large' : 'xlarge'}
            block
            onClick={onOk}
          >
            {okText}
          </Button>
        ) : null}
      </View>
    );
  }, [extra, okText, cancelText, onOk, onCancel]);

  return (
    <View
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-${status}`]: !!status },
        className,
      )}
      style={style}
    >
      <View className={`${PREFIX_CLS}-icon`}>{_icon}</View>
      <View className={`${PREFIX_CLS}-title`}>{title}</View>
      {desc ? <View className={`${PREFIX_CLS}-desc`}>{desc}</View> : null}
      {_extra ? <View className={`${PREFIX_CLS}-extra`}>{_extra}</View> : null}
    </View>
  );
};

export default Result;
