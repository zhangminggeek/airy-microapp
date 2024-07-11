import { useEffect } from 'react';

import type { PickerProps } from '@/components/Picker';
import type { FC } from 'react';

import { getProductFieldOption } from '@/api';
import { Picker } from '@/components';
import { useRequest } from '@/hooks';

interface FieldPickerProps extends Omit<PickerProps, 'options'> {
  code: string; // 服饰类型 code
  field: string; // 字段 key
}

const FieldPicker: FC<FieldPickerProps> = ({ code, field, ...rest }) => {
  // 获取字段选项
  const { data, run } = useRequest(getProductFieldOption, { manual: true });

  useEffect(() => {
    run({ code, field });
  }, [code, field]);

  return (
    <Picker
      {...rest}
      options={data?.map((item) => ({
        text: item.name,
        value: item.id,
      }))}
    />
  );
};

export default FieldPicker;
