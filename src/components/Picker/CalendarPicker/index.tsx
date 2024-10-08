import { Calendar } from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import dayjs, { type Dayjs } from 'dayjs';
import { useMemo, useState } from 'react';

import PickerView from '../PickerView';

import type { CalendarProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import { DATE_FORMAT } from '@/constants';

/**
 * @example ["2024", "06", "27", "2024/06/27", "星期四"]
 */
export type DateType = [string, string, string, string, string];

export type ValueType = Dayjs | [Dayjs, Dayjs];

interface CalendarPickerProps extends Partial<Omit<CalendarProps, 'type'>> {
  className?: string;
  format?: string;
  type?: 'single' | 'range';
  value?: ValueType;
  onChange?: (value?: ValueType) => void;
}

const PREFIX_CLS = 'm-calender-picker';

const CalendarPicker: FC<CalendarPickerProps> = ({
  className,
  format = DATE_FORMAT,
  type = 'single',
  value,
  onChange,
  ...rest
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const _value = useMemo(() => {
    if (!value) return;
    if (type === 'single') {
      return (value as Dayjs).format(format);
    } else {
      return (value as Dayjs[])?.map((item) => item.format(format));
    }
  }, [type, value]);

  const text = useMemo(() => {
    if (!value) return;
    if (type === 'single') {
      return (value as Dayjs).format(format);
    } else {
      return (value as Dayjs[])?.map((item) => item.format(format)).join(' - ');
    }
  }, [type, value]);

  return (
    <PickerView
      text={text}
      onClick={() => {
        setVisible(true);
      }}
    >
      <Calendar
        className={classnames(PREFIX_CLS, className)}
        visible={visible}
        type={type}
        defaultValue={_value}
        onConfirm={(v) => {
          if (type === 'single') {
            const date = v?.[3];
            onChange?.(date ? dayjs(date) : undefined);
          } else {
            const [start, end] = v;
            if (!(start?.length || end?.length)) {
              onChange?.();
              return;
            }
            const _start = dayjs()
              .year(Number(start[0]))
              .month(Number(start[1]) - 1)
              .date(Number(start[2]))
              .startOf('day');
            const _end = dayjs()
              .year(Number(end[0]))
              .month(Number(end[1]) - 1)
              .date(Number(end[2]))
              .endOf('day');
            onChange?.([_start, _end]);
          }
        }}
        onClose={() => {
          setVisible(false);
        }}
        {...rest}
      />
    </PickerView>
  );
};

export default CalendarPicker;
