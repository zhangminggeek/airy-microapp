import type { TagCheckerProps } from '@/components/TagChecker';

import { TagChecker } from '@/components';
import { productSizeMap } from '@/constants/product';

interface SizePickerProps extends Omit<TagCheckerProps<number>, 'options'> {}

const SizePicker = (props: SizePickerProps) => {
  return (
    <TagChecker options={Array.from(productSizeMap.values())} {...props} />
  );
};

export default SizePicker;
