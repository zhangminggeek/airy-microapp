import { useMemo } from 'react';

import type { PickerProps } from '@/components/Picker';
import type { FC } from 'react';

import { Picker } from '@/components';
import { productInfoFieldMap, ProductType } from '@/constants/product';

interface FieldPickerProps extends Omit<PickerProps, 'options'> {
  code: string; // 服饰类型 code
  field: string; // 字段 key
}

const FieldPicker: FC<FieldPickerProps> = ({ code, field, ...rest }) => {
  const options = useMemo(() => {
    return (
      productInfoFieldMap
        .get(code as ProductType)
        ?.find((item) => item.key === field)
        ?.options?.map((item) => ({
          text: item.text,
          value: item.value,
        })) ?? []
    );
  }, [code, field]);

  return <Picker {...rest} options={options} />;
};

export default FieldPicker;
