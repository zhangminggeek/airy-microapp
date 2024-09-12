import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import { Title } from '@/components';

import './index.scss';

export interface SectionProps {
  className?: string;
  style?: CSSProperties;
  fill?: boolean;
  title?: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
}

const PREFIX_CLS = 'm-section';

const Section: FC<SectionProps> = ({
  className,
  style,
  fill = false,
  title,
  extra,
  children,
}) => {
  return (
    <View
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-fill`]: fill },
        className,
      )}
      style={style}
    >
      {title ? (
        <Title className={`${PREFIX_CLS}-header`} extra={extra}>
          {title}
        </Title>
      ) : null}
      <View className={`${PREFIX_CLS}-body`}>{children}</View>
    </View>
  );
};

export default Section;
