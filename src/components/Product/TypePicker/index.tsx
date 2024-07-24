import type { TagCheckerProps } from '@/components/TagChecker';

import { TagChecker } from '@/components';
import { ProductType, productTypeMap } from '@/constants/product';

interface TypePickerProps
  extends Omit<TagCheckerProps<ProductType>, 'options'> {}

const TypePicker = (props: TypePickerProps) => {
  return (
    <TagChecker options={Array.from(productTypeMap.values())} {...props} />
  );
};

export default TypePicker;
