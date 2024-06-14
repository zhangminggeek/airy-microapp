import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

export interface Option {
  label: ReactNode;
  field: string;
  render?: (v: any) => ReactNode;
  col?: number;
}

interface DescriptionsProps {
  className?: string;
  style?: CSSProperties;
  colon?: boolean;
  options: Option[];
  data?: { [key: string]: any };
}

const PREFIX_CLS = 'm-descriptions';
const EMPTY_TEXT = '-';

const Descriptions: FC<DescriptionsProps> = ({
  className,
  style,
  colon = true,
  options = [],
  data,
}) => {
  const renderContent = (value: any, render: Option['render']) => {
    const ret = render ? render(value) : value;
    return ret ?? EMPTY_TEXT;
  };

  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      {options?.map((item) => (
        <View
          key={item.field}
          className={classnames(`${PREFIX_CLS}-item`, {
            [`${PREFIX_CLS}-item-full`]: item.col === 2,
          })}
        >
          <View className={`${PREFIX_CLS}-item-label`}>
            {item.label}
            {colon ? (
              <View className={`${PREFIX_CLS}-item-label-colon`}>:</View>
            ) : null}
          </View>
          <View className={`${PREFIX_CLS}-item-content`}>
            {renderContent(data?.[item.field], item.render)}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Descriptions;
