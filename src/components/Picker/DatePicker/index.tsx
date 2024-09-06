import { DatePicker as NutDatePicker } from '@nutui/nutui-react-taro';
import dayjs, { Dayjs } from 'dayjs';
import { useMemo, useState } from 'react';

import PickerView from '../PickerView';

import type { DatePickerProps as NutDatePickerProps } from '@nutui/nutui-react-taro';
import type { PickerOption } from '@nutui/nutui-react-taro/dist/types/packages/picker';
import type { FC } from 'react';

import {
  DATE_FORMAT,
  HOUR_FORMAT,
  MINUTE_FORMAT,
  MONTH_FORMAT,
  TIME_FORMAT,
} from '@/constants';

interface DatePickerProps
  extends Partial<
    Omit<NutDatePickerProps, 'visible' | 'defaultValue' | 'value' | 'onConfirm'>
  > {
  defaultValue?: Dayjs;
  value?: Dayjs;
  onConfirm?: (option: PickerOption[], value: Dayjs) => void;
}

const formatTypeMap = new Map<DatePickerProps['type'], string>([
  ['date', DATE_FORMAT],
  ['time', TIME_FORMAT],
  ['year-month', MONTH_FORMAT],
  ['month-day', 'MM-DD'],
  ['datehour', `${DATE_FORMAT} ${HOUR_FORMAT}`],
  ['datetime', `${DATE_FORMAT} ${MINUTE_FORMAT}`],
  ['hour-minutes', MINUTE_FORMAT],
]);

const DatePicker: FC<DatePickerProps> = ({
  type,
  defaultValue,
  value,
  onConfirm,
  onClose,
  ...rest
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const text = useMemo(() => {
    if (!value) return null;
    return value.format(formatTypeMap.get(type));
  }, [type, value]);

  return (
    <PickerView
      text={text}
      onClick={() => {
        setVisible(true);
      }}
    >
      <NutDatePicker
        visible={visible}
        type={type}
        defaultValue={defaultValue?.toDate()}
        value={value?.toDate()}
        onConfirm={(option, value) => {
          console.log('onConfirm', option, value);
          let year = dayjs().year();
          let month = dayjs().month() + 1;
          let date = dayjs().date();
          let hour = dayjs().hour();
          let minute = dayjs().minute();
          let second = dayjs().second();
          if (type === 'date') {
            year = Number(value[0]);
            month = Number(value[1]);
            date = Number(value[2]);
          } else if (type === 'time') {
            hour = Number(value[0]);
            minute = Number(value[1]);
            second = Number(value[2]);
          } else if (type === 'year-month') {
            year = Number(value[0]);
            month = Number(value[1]);
          } else if (type === 'month-day') {
            month = Number(value[0]);
            date = Number(value[1]);
          } else if (type === 'datehour') {
            year = Number(value[0]);
            month = Number(value[1]);
            date = Number(value[2]);
            hour = Number(value[3]);
          } else if (type === 'datetime') {
            year = Number(value[0]);
            month = Number(value[1]);
            date = Number(value[2]);
            hour = Number(value[3]);
            minute = Number(value[4]);
          } else if (type === 'hour-minutes') {
            hour = Number(value[0]);
            minute = Number(value[1]);
          }

          const v = dayjs()
            .year(year)
            .month(month - 1)
            .date(date)
            .hour(hour)
            .minute(minute)
            .second(second);
          onConfirm?.(option, v);
        }}
        onClose={() => {
          setVisible(false);
          onClose?.();
        }}
        {...rest}
      />
    </PickerView>
  );
};

export default DatePicker;
