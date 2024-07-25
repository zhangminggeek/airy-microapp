import { ITouchEvent, View } from '@tarojs/components';
import classnames from 'classnames';
import { Children, Fragment } from 'react';

import type { CSSProperties, FC, ReactNode } from 'react';

interface SpaceProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  direction?: 'horizontal' | 'vertical';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline';
  size?: number;
  wrap?: boolean;
  block?: boolean;
  split?: boolean | ReactNode;
  onClick?: (e: ITouchEvent) => void;
}

import './index.scss';

const PREFIX_CLS = 'm-space';

const Space: FC<SpaceProps> = ({
  className,
  style,
  children,
  direction = 'horizontal',
  justify = 'flex-start',
  align = 'center',
  size = 8,
  wrap = true,
  block = false,
  split = false,
  onClick,
}) => {
  return (
    <View
      className={classnames(PREFIX_CLS, className)}
      style={{
        ...style,
        display: block ? 'flex' : 'inline-flex',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        justifyContent: justify,
        alignItems: align,
        gap: size,
        flexWrap: wrap ? 'wrap' : 'nowrap',
      }}
      onClick={onClick}
    >
      {Children.map(children, (child, index) => {
        if (typeof child !== 'string' && typeof child !== 'number' && !child) {
          return null;
        }
        return (
          <Fragment>
            <View className={`${PREFIX_CLS}-item`}>{child}</View>
            {split && index !== Children.count(children) - 1 ? (
              <View className={`${PREFIX_CLS}-split`}>
                {split && split !== true ? (
                  split
                ) : (
                  <View className={`${PREFIX_CLS}-split-divider`} />
                )}
              </View>
            ) : null}
          </Fragment>
        );
      })}
    </View>
  );
};

export default Space;
