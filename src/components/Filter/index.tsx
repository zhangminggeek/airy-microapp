import { Menu } from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import { useRef } from 'react';

import CustomWrappwer from './CustomWrapper';

import type { MenuItemProps, MenuProps } from '@nutui/nutui-react-taro';
import type { CSSProperties, MutableRefObject, ReactNode } from 'react';

import { Icon } from '@/components';

import './index.scss';

interface Field extends Partial<Omit<MenuItemProps, 'value' | 'onChange'>> {
  name: string;
  emptyOption?: boolean;
  emptyOptionText?: string;
  render?: (ref: MutableRefObject<any>) => ReactNode;
}

type ValueType = { [key in string]: any };

interface FilterProps extends Partial<MenuProps> {
  className?: string;
  style?: CSSProperties;
  fields?: Field[];
  value?: ValueType;
  onChange?: (value: ValueType) => void;
}

const PREFIX_CLS = 'm-filter';
export const IGNORE_VALUE = 'ignore';

const Filter = ({
  className,
  style,
  fields,
  value,
  onChange,
  ...rest
}: FilterProps) => {
  return (
    <Menu
      className={classnames(PREFIX_CLS, className)}
      style={style}
      icon={<Icon name="DownFilled" size={10} />}
      {...rest}
    >
      {fields?.map((item) => {
        const ref = useRef(null);
        const {
          name,
          icon = <Icon name="CheckOutlined" size={18} />,
          options = [],
          emptyOption = true,
          emptyOptionText = '不限',
          defaultValue,
          render,
          ...restProps
        } = item;

        const _emptyOption = render ? false : emptyOption;

        return (
          <Menu.Item
            key={name}
            className={classnames(`${PREFIX_CLS}-item`, {
              [`${PREFIX_CLS}-item-custom`]: !!render,
            })}
            ref={ref}
            icon={icon}
            options={
              _emptyOption
                ? [{ text: emptyOptionText, value: IGNORE_VALUE }, ...options]
                : options
            }
            defaultValue={_emptyOption ? IGNORE_VALUE : defaultValue}
            children={render?.(ref)}
            value={value?.[name]}
            onChange={(option) => {
              onChange?.({
                ...value,
                [name]:
                  option.value === IGNORE_VALUE ? undefined : option.value,
              });
            }}
            {...restProps}
          />
        );
      })}
    </Menu>
  );
};

Filter.CustomWrappwer = CustomWrappwer;

export default Filter;
