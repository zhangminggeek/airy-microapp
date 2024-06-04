import { Cell } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Space } from '@/components';

import './index.scss';

interface Option {
  label: ReactNode;
  field: string;
  format?: (v: any) => ReactNode;
}

interface DescriptionsProps {
  className?: string;
  style?: CSSProperties;
  colon?: boolean;
  options: Option[];
  data?: { [key: string]: any };
}

const PREFIX_CLS = 'm-descriptions';

const Descriptions: FC<DescriptionsProps> = ({
  className,
  style,
  colon = true,
  options,
  data,
}) => {
  return (
    <Cell.Group className={classnames(PREFIX_CLS, className)} style={style}>
      {options.map(({ label, field, format }) => (
        <Cell key={field} className={`${PREFIX_CLS}-cell`}>
          <Space className={`${PREFIX_CLS}-cell-label`} size={2}>
            <Text className={`${PREFIX_CLS}-cell-label-text`}>{label}</Text>
            {colon ? (
              <Text className={`${PREFIX_CLS}-cell-label-colon`}>:</Text>
            ) : null}
          </Space>
          <View className={`${PREFIX_CLS}-cell-content`}>
            {(format ? format(data?.[field]) : data?.[field]) ?? '-'}
          </View>
        </Cell>
      ))}
    </Cell.Group>
  );
};

export default Descriptions;
