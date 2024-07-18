import { Button } from '@nutui/nutui-react-taro';

import styles from './index.module.scss';

import type { ButtonProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import { Icon } from '@/components';
import { RouterUtil } from '@/utils';

export interface IconItemProps {
  name: string;
  icon: string;
  iconSize?: number;
  openType?: ButtonProps['openType'];
  to?: string;
  onClick?: () => void;
}

const IconItem: FC<IconItemProps> = ({
  name,
  icon,
  iconSize = 32,
  openType,
  to,
  onClick,
}) => {
  return (
    <Button
      className={styles.btn}
      icon={<Icon name={icon} size={iconSize} />}
      openType={openType}
      fill="none"
      onClick={() => {
        if (to) {
          RouterUtil.navigateTo(to);
          return;
        }
        onClick?.();
      }}
    >
      {name}
    </Button>
  );
};

export default IconItem;
