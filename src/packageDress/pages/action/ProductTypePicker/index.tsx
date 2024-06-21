import { useEffect } from 'react';

import type { PickerProps } from '@/components/Picker';

import { Picker } from '@/components';
import { useProductStore } from '@/models/product';

interface ProductTypePickerProps extends Omit<PickerProps<string>, 'options'> {}

const ProductTypePicker = (props: ProductTypePickerProps) => {
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

export default ProductTypePicker;
