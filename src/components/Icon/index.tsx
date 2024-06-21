import { IconFont } from '@nutui/icons-react-taro';
import { Text, View } from '@tarojs/components';
import classnames from 'classnames';
import { CSSProperties, FC } from 'react';

import './index.scss';

interface IconProps {
  className?: string;
  style?: CSSProperties;
  name: string;
  type?: 'default' | 'primary';
  size?: number;
  color?: string;
  title?: string;
  onClick?: () => void;
}

const PREFIX_CLS = 'm-icon';

const Icon: FC<IconProps> = ({
  className,
  style,
  name,
  type = 'default',
  size = 20,
  color,
  title,
  onClick,
}) => {
  return (
    <View
      className={classnames(
        PREFIX_CLS,
        {
          [`${PREFIX_CLS}-with-title`]: !!title,
          [`${PREFIX_CLS}-${type}`]: !color,
        },
        className,
      )}
      style={style}
      onClick={onClick}
    >
      <IconFont
        className={`${PREFIX_CLS}-font`}
        fontClassName="iconfont"
        classPrefix="icon"
        name={name}
        size={size}
        color={color}
      />
      {title ? <Text className={`${PREFIX_CLS}-title`}>{title}</Text> : null}
    </View>
  );
};

export default Icon;
