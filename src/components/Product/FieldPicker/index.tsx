import { useMemo } from 'react';

import type { TagCheckerProps } from '@/components/TagChecker';
import type { FC } from 'react';

import { TagChecker } from '@/components';
import {
  ProductFiledKey,
  productInfoFieldMap,
  ProductType,
} from '@/constants/product';

interface FieldPickerProps
  extends Omit<TagCheckerProps<string>, 'options' | 'wrap'> {
  code: string; // 服饰类型 code
  field: string; // 字段 key
}

const FieldPicker: FC<FieldPickerProps> = ({ code, field, ...rest }) => {
  const options = useMemo(() => {
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

  return <TagChecker options={options} wrap={false} {...rest} />;
};

export default FieldPicker;
