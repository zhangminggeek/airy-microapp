import Avatar, { type CustomAvatarProps } from './Avatar';
import Custom, { type CustomProps } from './Custom';
import CustomRegion, { type CustomRegionProps } from './Region';
import Text, { type CustomTextProps } from './Text';
import Textarea, { type CustomTextareaProps } from './Textarea';

interface TextRenderProps extends CustomTextProps {
  renderType: 'text';
}

interface TextareaRenderProps extends CustomTextareaProps {
  renderType: 'textarea';
}

interface AvatarRenderProps extends CustomAvatarProps {
  renderType: 'avatar';
}

interface RegionRenderProps extends CustomRegionProps {
  renderType: 'region';
}

interface CustomRenderProps extends CustomProps {
  renderType: 'custom';
}

export type RenderContentProps =
  | AvatarRenderProps
  | TextareaRenderProps
  | TextRenderProps
  | RegionRenderProps
  | CustomRenderProps;

const renderContent = (renderConfig: RenderContentProps) => {
  const { renderType, ...rest } = renderConfig;

  switch (renderType) {
    case 'text':
      return <Text wrapper {...(rest as CustomTextProps)} />;
    case 'textarea':
      return <Textarea {...(rest as CustomTextareaProps)} />;
    case 'avatar':
      return <Avatar {...(rest as CustomAvatarProps)} />;
    case 'region':
      return <CustomRegion {...(rest as CustomRegionProps)} />;
    case 'custom':
      return <Custom {...(rest as CustomProps)} />;
    default:
      return null;
  }
};

export default renderContent;
