import { Calendar } from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import dayjs, { type Dayjs } from 'dayjs';
import { useMemo, useState } from 'react';

import type { CalendarProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import { PickerView } from '@/components';
import { DATE_FORMAT } from '@/constants';

/**
 * @example ["2024", "06", "27", "2024/06/27", "星期四"]
 */
export type DateType = [string, string, string, string, string];

export type ValueType = Dayjs | [Dayjs, Dayjs];

interface CalenderPickerProps extends Partial<Omit<CalendarProps, 'type'>> {
  className?: string;
  format?: string;
  type?: 'single' | 'range';
  value?: ValueType;
  onChange?: (value?: ValueType) => void;
}

const PREFIX_CLS = 'm-calender-picker';

const CalenderPicker: FC<CalenderPickerProps> = ({
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
            onChange?.([
              dayjs()
                .year(Number(start[0]))
                .month(Number(start[1]) - 1)
                .date(Number(start[2])),
              dayjs()
                .year(Number(end[0]))
                .month(Number(end[1]) - 1)
                .date(Number(end[2])),
            ]);
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

export default CalenderPicker;
