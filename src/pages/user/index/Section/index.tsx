import { View } from '@tarojs/components';
import classnames from 'classnames';

import styles from './index.module.scss';

import type { CSSProperties, FC, ReactNode } from 'react';

interface SectionProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
  children?: ReactNode;
}

const Section: FC<SectionProps> = ({ className, style, title, children }) => {
  return (
    <View className={classnames(styles.section, className)} style={style}>
      {title ? <View className={styles['section-header']}>{title}</View> : null}
      <View className={styles['section-body']}>{children}</View>
    </View>
  );
};

export default Section;
