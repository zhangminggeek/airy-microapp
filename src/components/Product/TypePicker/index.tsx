import { useEffect } from 'react';

import type { PickerProps } from '@/components/Picker';

import { Picker } from '@/components';
import { useProductStore } from '@/models';

interface TypePickerProps extends Omit<PickerProps<string>, 'options'> {}

const TypePicker = (props: TypePickerProps) => {
  const { typeList, fetchProductType } = useProductStore((state) => state);

  useEffect(() => {
    fetchProductType();
  }, []);

  return (
    <Picker
      {...props}
      options={typeList?.map((item) => ({
        text: item.name,
        value: item.code,
      }))}
    />
  );
};

export default TypePicker;
