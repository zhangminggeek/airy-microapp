import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';

import type { ITouchEvent } from '@tarojs/components';
import type { CSSProperties, FC } from 'react';

import { Icon } from '@/components';

import './index.scss';

interface CopyProps {
  className?: string;
  style?: CSSProperties;
  iconSize?: number;
  text: string;
  value?: string; // 需要被复制的值
  onClick?: (e: ITouchEvent) => void;
  onCopied?: () => void;
}

const PREFIX_CLS = 'm-text-copy';

const Copy: FC<CopyProps> = ({
  className,
  style,
  iconSize = 16,
  text,
  value,
  onClick,
  onCopied,
}) => {
  return (
    <View
      className={classnames(PREFIX_CLS, className)}
      style={style}
      onClick={onClick}
    >
      <View className={`${PREFIX_CLS}-content`}>{text}</View>
      <Icon
        className={`${PREFIX_CLS}-icon`}
        name="CopyOutlined"
        size={iconSize}
        onClick={async () => {
          if (!value && !text) return;
          await Taro.setClipboardData({
            data: value ?? text,
          });
          onCopied?.();
        }}
      />
    </View>
  );
};

export default Copy;
