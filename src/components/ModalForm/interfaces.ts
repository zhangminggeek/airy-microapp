import { InputProps, TextAreaProps } from '@nutui/nutui-react-taro';

import type { FormProps as NutFormProps } from '@nutui/nutui-react-taro/dist/types/packages/form/form.taro';
import type { FormItemProps } from '@nutui/nutui-react-taro/dist/types/packages/formitem/formitem.taro';

export interface TextRenderProps {
  renderType: 'text';
  content?: string;
}

export interface InputRenderProps extends Partial<InputProps> {
  renderType: 'input';
}

export interface TextAreaRenderProps extends Partial<TextAreaProps> {
  renderType: 'textarea';
}

export type RenderConfig =
  | TextRenderProps
  | InputRenderProps
  | TextAreaRenderProps;

interface Field extends Partial<FormItemProps> {
  contentConfig: RenderConfig;
  hidden?: boolean;
}

export interface FormProps extends Partial<NutFormProps> {
  fields: Field[];
}
