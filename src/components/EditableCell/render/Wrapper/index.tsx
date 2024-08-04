import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useContext } from 'react';

import { PREFIX_CLS } from '../../constants';
import { Context } from '../../context';

import type { ITouchEvent } from '@tarojs/components';
import type { FC, ReactNode } from 'react';

import { Icon, Space } from '@/components';

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
        {editable && (
          <Icon
            className={`${PREFIX_CLS}-wrapper-icon`}
            name="RightOutlined"
            size={12}
          />
        )}
      </Space>
    </View>
  );
};

export default Wrapper;
