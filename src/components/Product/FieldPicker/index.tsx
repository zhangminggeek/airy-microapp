import { useMemo } from 'react';

import type { PickerProps } from '@/components/Picker';
import type { FC } from 'react';

import { Picker } from '@/components';
import {
  ProductFiledKey,
  productInfoFieldMap,
  ProductType,
} from '@/constants/product';

interface FieldPickerProps extends Omit<PickerProps, 'options'> {
  code: string; // 服饰类型 code
  field: string; // 字段 key
}

const FieldPicker: FC<FieldPickerProps> = ({ code, field, ...rest }) => {
  const options = useMemo(() => {
    console.log('1', productInfoFieldMap.get(code as ProductType));
    console.log(
      '2',
      productInfoFieldMap
        .get(code as ProductType)
        ?.get(field as ProductFiledKey),
    );
    return (
      productInfoFieldMap
        .get(code as ProductType)
        ?.get(field as ProductFiledKey)
        ?.options?.map((item) => ({
          text: item.text,
          value: item.value,
        })) ?? []
    );
  }, [code, field]);

  return <Picker {...rest} options={options} />;
};

export default FieldPicker;
