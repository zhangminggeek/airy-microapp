import { Ellipsis, Input, TextArea } from '@nutui/nutui-react-taro';

import type {
  InputRenderProps,
  RenderConfig,
  TextAreaRenderProps,
  TextRenderProps,
} from './interfaces';

export function renderByType(config: RenderConfig) {
  const { renderType, ...rest } = config;

  switch (renderType) {
    case 'text': {
      const { content } = rest as Omit<TextRenderProps, 'renderType'>;
      return <Ellipsis content={content} />;
    }
    case 'input':
      return <Input {...(rest as InputRenderProps)} />;
    case 'textarea':
      return <TextArea showCount {...(rest as TextAreaRenderProps)} />;
    default:
      return null;
  }
}
