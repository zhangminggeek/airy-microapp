import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.scss';

export interface Option {
  label: ReactNode;
  field: string;
  render?: (v: any) => ReactNode;
  col?: number;
  enums?: Map<any, { text: string; [key: string]: any }>;
  hidden?: boolean;
}

interface DescriptionsProps {
  className?: string;
  style?: CSSProperties;
  colon?: boolean;
  options: Option[];
  data?: { [key: string]: any };
  align?: 'left' | 'right';
}

const PREFIX_CLS = 'm-descriptions';
const EMPTY_TEXT = '-';

const Descriptions: FC<DescriptionsProps> = ({
  className,
  style,
  colon = true,
  options = [],
  data,
  align = 'left',
}) => {
  const renderContent = (option: Option) => {
    const { render, enums, field } = option;
    const value = data?.[field];
    if (render) {
      return render(value);
    }
    if (enums) {
      return enums.get(value)?.text;
    }
    return value ?? EMPTY_TEXT;
  };

  return (
    <View
      className={classnames(
        PREFIX_CLS,
        `${PREFIX_CLS}-align-${align}`,
        className,
      )}
      style={style}
    >
      {options
        ?.filter((item) => !item.hidden)
        ?.map((item) => (
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
              {renderContent(item)}
            </View>
          </View>
        ))}
    </View>
  );
};

export default Descriptions;
