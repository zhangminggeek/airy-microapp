import { ArrowRight } from '@nutui/icons-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useContext } from 'react';

import { PREFIX_CLS } from '../../constants';
import { Context } from '../../context';

import type { ITouchEvent } from '@tarojs/components';
import type { FC, ReactNode } from 'react';

import { Space } from '@/components';

import './index.scss';

interface WrapperProps {
  className?: string;
  children: ReactNode;
  onClick?: (e: ITouchEvent) => void;
}

const Wrapper: FC<WrapperProps> = ({ className, children, onClick }) => {
  const { editable } = useContext(Context);

  return (
    <View
      className={classnames(`${PREFIX_CLS}-wrapper`, className)}
      onClick={(e) => {
        if (!editable) return;
        onClick?.(e);
      }}
    >
      <Space>
        {children}
        {editable && <ArrowRight size={12} color="#959595" />}
      </Space>
    </View>
  );
};

export default Wrapper;
