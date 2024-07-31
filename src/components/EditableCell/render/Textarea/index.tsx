import { useRouter } from '@tarojs/taro';
import { useContext } from 'react';

import { Context } from '../../context';
import Text from '../Text';
import Wrapper from '../Wrapper';

import type { TextAreaProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import { EventUtil, RouterUtil } from '@/utils';

export interface CustomTextareaProps extends Partial<TextAreaProps> {}

const CustomTextarea: FC<CustomTextareaProps> = ({
  className,
  onChange: origanOnChange,
  ...rest
}) => {
  const { path } = useRouter();
  const { title, name, value, onChange } = useContext(Context);

  const field = `${path}_${name}`;

  EventUtil.useEvents(field, (v) => {
    onChange?.(name, v);
  });

  return (
    <Wrapper
      onClick={() => {
        RouterUtil.navigateTo('/packageCommon/pages/edit/index', {
          title,
          field,
          defaultValue: value,
          renderType: 'textarea',
          props: JSON.stringify(rest ?? {}),
        });
      }}
    >
      <Text>{value}</Text>
    </Wrapper>
  );
};

export default CustomTextarea;
