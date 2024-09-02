import { Checkbox } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import styles from './index.module.scss';

import type { CSSProperties, FC } from 'react';

import { Text } from '@/components';

interface ProtocolProps {
  className?: string;
  value?: boolean;
  onChange?: (v: boolean) => void;
}

const Protocol: FC<ProtocolProps> = ({ className, value, onChange }) => {
  return (
    <View className={classnames(styles.protocol, className)}>
      <Checkbox
        style={{ '--nut-icon-width': '16px' } as CSSProperties}
        label={
          <View>
            我已阅读并同意
            <Text.Link to="/packagePlatform/pages/protocol/privacy/index">
              《用户隐私协议》
            </Text.Link>
            和
            <Text.Link to="/packagePlatform/pages/protocol/software/index">
              《软件许可使用协议》
            </Text.Link>
          </View>
        }
        checked={value}
        onChange={(val) => {
          onChange?.(val);
        }}
      />
    </View>
  );
};

export default Protocol;
