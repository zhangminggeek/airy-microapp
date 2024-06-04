import { Text, type TextProps } from '@tarojs/components';
import classnames from 'classnames';
import { useContext } from 'react';

import { PREFIX_CLS } from '../../constants';
import { Context } from '../../context';
import Wrapper from '../Wrapper';

import type { FC } from 'react';

export interface CustomTextProps extends TextProps {
  wrapper?: boolean;
}

const CustomText: FC<CustomTextProps> = ({
  className,
  wrapper = false,
  children,
  ...rest
}) => {
  const { value } = useContext(Context);

  const text = (
    <Text className={classnames(`${PREFIX_CLS}-text`, className)} {...rest}>
      {value}
    </Text>
  );

  return wrapper ? <Wrapper>{text}</Wrapper> : text;
};

export default CustomText;
