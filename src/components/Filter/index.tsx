import { Menu } from '@nutui/nutui-react-taro';
import classnames from 'classnames';

import type { MenuItemProps, MenuProps } from '@nutui/nutui-react-taro';
import type { CSSProperties, FC } from 'react';

import { Icon } from '@/components';

import './index.scss';

interface Field extends Partial<Omit<MenuItemProps, 'value' | 'onChange'>> {
  name: string;
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

const Filter: FC<FilterProps> = ({
  className,
  style,
  fields,
  value,
  onChange,
  ...rest
}) => {
  return (
    <Menu className={classnames(PREFIX_CLS, className)} style={style} {...rest}>
      {fields?.map((item) => {
        const { name, ...restProps } = item;
        return (
          <Menu.Item
            key={item.name}
            className={`${PREFIX_CLS}-panel`}
            {...restProps}
            icon={<Icon name="CheckOutlined" size={18} />}
            value={value?.[item.name]}
            onChange={(option) => {
              onChange?.({
                ...value,
                [item.name]: option.value,
              });
            }}
          />
        );
      })}
    </Menu>
  );
};
export default Filter;
