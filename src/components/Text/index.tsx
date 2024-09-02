import { Text as TaroText } from '@tarojs/components';

import Copy from './Copy';
import Link from './Link';

import type { TextProps } from '@tarojs/components';

const Text = (props: TextProps) => {
  return <TaroText {...props} />;
};

Text.Copy = Copy;
Text.Link = Link;

export default Text;
