import Wrapper from '../Wrapper';

import type { ITouchEvent } from '@tarojs/components';
import type { FC, ReactNode } from 'react';

export interface CustomProps {
  className?: string;
  children?: ReactNode;
  onClick?: (e: ITouchEvent) => void;
}

const Custom: FC<CustomProps> = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default Custom;
