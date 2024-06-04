import { TriangleDown } from '@nutui/icons-react-taro';
import { Text, View } from '@tarojs/components';
import classnames from 'classnames';
import { Fragment, useMemo } from 'react';

import type { ITouchEvent } from '@tarojs/components';
import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

const PREFIX_CLS = 'm-picker-view';
const DEFAULT_TEXT = '请选择';

interface PickerViewProps {
  className?: string;
  style?: CSSProperties;
  text?: ReactNode;
  defaultText?: ReactNode;
  children?: ReactNode;
  onClick?: (e: ITouchEvent) => void;
}

const PickerView: FC<PickerViewProps> = ({
  className,
  style,
  text,
  defaultText = DEFAULT_TEXT,
  children,
  onClick,
}) => {
  const view = useMemo(() => {
    if (!text)
      return <Text className={`${PREFIX_CLS}-placeholder`}>{defaultText}</Text>;
    return text;
  }, [text, defaultText]);

  return (
    <Fragment>
      <View
        className={classnames(PREFIX_CLS, className)}
        style={style}
        onClick={onClick}
      >
        <View className={`${PREFIX_CLS}-view-text`}>{view}</View>
        <TriangleDown className={`${PREFIX_CLS}-view-icon`} size={14} />
      </View>
      {children}
    </Fragment>
  );
};

export default PickerView;
