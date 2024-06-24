import {
  ConfigProvider,
  Input,
  type InputProps,
} from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import { Fragment, useContext, useState } from 'react';

import { PREFIX_CLS } from '../../constants';
import { Context } from '../../context';
import Popup from '../Popup';
import Text from '../Text';
import Wrapper from '../Wrapper';

import type { FC } from 'react';

export interface CustomInputProps extends Partial<InputProps> {}

const CustomInput: FC<CustomInputProps> = ({
  className,
  onChange: origanOnChange,
  ...rest
}) => {
  const { name, value, onChange } = useContext(Context);

  const [innerValue, setInnerValue] = useState<string>();

  return (
    <Fragment>
      <Popup
        action={
          <Wrapper>
            <Text>{value}</Text>
          </Wrapper>
        }
        onOpen={() => {
          setInnerValue(value);
        }}
        onOk={async () => {
          await onChange?.(name, innerValue);
        }}
        onCancel={() => {
          setInnerValue(value);
        }}
      >
        <ConfigProvider
          theme={{
            nutuiInputBorderBottomWidth: '1px',
          }}
        >
          <Input
            className={classnames(`${PREFIX_CLS}-input`, className)}
            value={innerValue}
            onChange={(v) => {
              setInnerValue(v);
              origanOnChange?.(v);
            }}
            {...rest}
          />
        </ConfigProvider>
      </Popup>
    </Fragment>
  );
};

export default CustomInput;
