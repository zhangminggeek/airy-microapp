import {
  Picker as NutPicker,
  type PickerProps as NutPickerProps,
} from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import { useMemo, useState } from 'react';

import AddressPicker from './AddressPicker';
import CalendarPicker from './CalendarPicker';
import DatePicker from './DatePicker';
import PaymentPicker from './PaymentPicker';
import PickerView from './PickerView';
import RegionPicker from './RegionPicker';

import type { PickerOption } from '@nutui/nutui-react-taro/dist/types/packages/picker/types';
import type { ReactNode } from 'react';

import './index.scss';

export interface PickerProps<V extends number | string = number>
  extends Partial<
    Omit<
      NutPickerProps,
      'visible' | 'option' | 'value' | 'onChange' | 'onConfirm' | 'onClose'
    >
  > {
  options: PickerOption[];
  value?: V;
  children?: ReactNode;
  onChange?: (
    selectOption: PickerOption,
    selectedValue: V,
    columnIndex: number,
  ) => void;
  onConfirm?: (selectOption: PickerOption, selectedValue: V) => void;
  onClose?: (selectOption: PickerOption, selectedValue: V) => void;
}

const PREFIX_CLS = 'm-picker';

const Picker = <V extends string | number>({
  className,
  style,
  children,
  options,
  value,
  onChange,
  onConfirm,
  onClose,
  ...rest
}: PickerProps<V>) => {
  const [visible, setVisible] = useState<boolean>(false);

  const _value = useMemo(() => (value ? [value] : undefined), [value]);

  const text = useMemo(() => {
    if (children) return children;
    const checked = options
      ?.map((item) => (item.value === value ? item.text : ''))
      .filter((item) => !!item);
    return checked?.length ? checked.join(' / ') : undefined;
  }, [options, value, children]);

  return (
    <PickerView
      text={text}
      onClick={() => {
        setVisible(true);
      }}
    >
      <NutPicker
        className={classnames(PREFIX_CLS, className)}
        visible={visible}
        options={options}
        value={_value}
        onChange={(selectedOptions, selectedValue: V[], columnIndex) => {
          onChange?.(selectedOptions?.[0], selectedValue?.[0], columnIndex);
        }}
        onConfirm={(selectedOptions, selectedValue: V[]) => {
          setVisible(false);
          onConfirm?.(selectedOptions?.[0], selectedValue?.[0]);
        }}
        onClose={(selectedOptions, selectedValue: V[]) => {
          setVisible(false);
          onClose?.(selectedOptions?.[0], selectedValue?.[0]);
        }}
        {...rest}
      />
    </PickerView>
  );
};

Picker.View = PickerView;
Picker.Address = AddressPicker;
Picker.Calendar = CalendarPicker;
Picker.Date = DatePicker;
Picker.Payment = PaymentPicker;
Picker.Region = RegionPicker;

export default Picker;
