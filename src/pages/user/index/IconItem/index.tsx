import { Button } from '@nutui/nutui-react-taro';

import styles from './index.module.scss';

import type { ButtonProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import { Icon } from '@/components';
import { useUserStore } from '@/models';
import { RouterUtil, Toast } from '@/utils';

export interface IconItemProps {
  name: string;
  icon: string;
  iconSize?: number;
  openType?: ButtonProps['openType'];
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const IconItem: FC<IconItemProps> = ({
  name,
  icon,
  iconSize = 32,
  openType,
  to,
  disabled = false,
  onClick,
}) => {
  const { info } = useUserStore((state) => state);

  return (
    <Button
      className={styles.btn}
      icon={<Icon className={styles.icon} name={icon} size={iconSize} />}
      openType={openType}
      fill="none"
      onClick={() => {
        if (!info?.account) {
          RouterUtil.navigateTo('/pages/user/login/index');
          return;
        }
        if (disabled) {
          Toast.info('功能正在加紧开发中，敬请期待');
          return;
        }
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
