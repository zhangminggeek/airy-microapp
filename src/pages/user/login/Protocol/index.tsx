import { Checkbox } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import styles from './index.module.scss';

import type { CSSProperties, FC } from 'react';

import { Link } from '@/components';

interface ProtocolProps {
  className?: string;
  value?: boolean;
  onChange?: (v: boolean) => void;
}

const Protocol: FC<ProtocolProps> = ({ className, value, onChange }) => {
  return (
    <Checkbox
      className={classnames(styles.protocol, className)}
      style={{ '--nut-icon-width': '16px' } as CSSProperties}
      label={
        <View>
          已阅读并同意
          <Link to="/packagePlatform/pages/protocol/privacy/index">
            《用户隐私协议》
          </Link>
          和
          <Link to="/packagePlatform/pages/protocol/software/index">
            《软件许可使用协议》
          </Link>
        </View>
      }
      checked={value}
      onChange={(val) => {
        onChange?.(val);
      }}
    />
  );
};

export default Protocol;
