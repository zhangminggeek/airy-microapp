import { IconFont } from '@nutui/icons-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { IconFontConfig } from '@nutui/icons-react-taro';
import type { CSSProperties, FC, ReactNode } from 'react';

import IconSuccessFilled from '@/assets/icons/SuccessFilled.svg';

import './index.scss';

interface ResultProps {
  className?: string;
  style?: CSSProperties;
  status?: 'success';
  icon?: ReactNode;
  title?: ReactNode;
  desc?: ReactNode;
  extra?: ReactNode;
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
}) => {
  const renderIcon = useMemo(() => {
    if (icon) return icon;
    const config: IconFontConfig = {};
    switch (status) {
      case 'success':
        config.name = IconSuccessFilled;
        break;
      default:
        break;
    }
    return <IconFont {...config} size={56} />;
  }, [status, icon]);

  return (
    <View
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-${status}`]: !!status },
        className,
      )}
      style={style}
    >
      <View className={`${PREFIX_CLS}-icon`}>{renderIcon}</View>
      <View className={`${PREFIX_CLS}-title`}>{title}</View>
      {desc ? <View className={`${PREFIX_CLS}-desc`}>{desc}</View> : null}
      {extra ? <View className={`${PREFIX_CLS}-extra`}>{extra}</View> : null}
    </View>
  );
};

export default Result;
