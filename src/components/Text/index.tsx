import { Text as TaroText } from '@tarojs/components';

import Copy from './Copy';
import Info from './Info';
import Link from './Link';

import type { TextProps } from '@tarojs/components';

const Text = (props: TextProps) => {
  return <TaroText {...props} />;
};

Text.Copy = Copy;
Text.Info = Info;
Text.Link = Link;

export default Text;
