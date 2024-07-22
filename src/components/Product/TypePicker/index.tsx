import type { PickerProps } from '@/components/Picker';

import { Picker } from '@/components';
import { productTypeMap } from '@/constants/product';

interface TypePickerProps extends Omit<PickerProps<string>, 'options'> {}

const TypePicker = (props: TypePickerProps) => {
  return <Picker {...props} options={Array.from(productTypeMap.values())} />;
};

export default TypePicker;
