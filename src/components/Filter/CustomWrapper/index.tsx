import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

interface CustomWrappwerProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onOk?: () => void;
  onReset?: () => void;
}

const PREFIX_CLS = 'm-filter-custom-wrapper';

const CustomWrappwer: FC<CustomWrappwerProps> = ({
  className,
  style,
  children,
  onOk,
  onReset,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <View className={`${PREFIX_CLS}-body`}>{children}</View>
      <View className={`${PREFIX_CLS}-footer`}>
        <Button
          className={`${PREFIX_CLS}-footer-btn`}
          size="large"
          onClick={() => {
            onReset?.();
          }}
        >
          重置
        </Button>
        <Button
          className={`${PREFIX_CLS}-footer-btn`}
          type="primary"
          size="large"
          onClick={() => {
            onOk?.();
          }}
        >
          确定
        </Button>
      </View>
    </View>
  );
};
export default CustomWrappwer;
