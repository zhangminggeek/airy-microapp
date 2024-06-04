import Avatar, { type CustomAvatarProps } from './Avatar';
import Input, { type CustomInputProps } from './Input';
import Text, { type CustomTextProps } from './Text';

interface TextRenderProps extends CustomTextProps {
  renderType: 'text';
}

interface InputRenderProps extends CustomInputProps {
  renderType: 'input';
}

interface AvatarRenderProps extends CustomAvatarProps {
  renderType: 'avatar';
}

export type RenderContentProps =
  | AvatarRenderProps
  | InputRenderProps
  | TextRenderProps;

const renderContent = (renderConfig: RenderContentProps) => {
  const { renderType, ...rest } = renderConfig;

  switch (renderType) {
    case 'text':
      return <Text wrapper />;
    case 'input':
      return <Input {...(rest as CustomInputProps)} />;
    case 'avatar':
      return <Avatar {...(rest as CustomAvatarProps)} />;
    default:
      return null;
  }
};

export default renderContent;
