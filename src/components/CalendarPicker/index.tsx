import { Calendar } from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';

import type { CalendarProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import { PickerView } from '@/components';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/constants';

interface CalenderPickerProps extends Partial<CalendarProps> {
  className?: string;
  format?: string;
  value?: Dayjs;
  onChange?: (value?: Dayjs) => void;
}

const PREFIX_CLS = 'm-calender-picker';

const CalenderPicker: FC<CalenderPickerProps> = ({
  className,
  format = DATE_TIME_FORMAT,
  value,
  onChange,
  ...rest
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <PickerView
      text={
        value && dayjs(value).isValid() ? value?.format(DATE_FORMAT) : undefined
      }
      onClick={() => {
        setVisible(true);
      }}
    >
      <Calendar
        className={classnames(PREFIX_CLS, className)}
        visible={visible}
        defaultValue={value?.format(DATE_FORMAT)}
        onConfirm={(v) => {
          const date = v?.[3];
          onChange?.(date ? dayjs(date) : undefined);
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
