import { Avatar as NutAvatar } from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { AvatarProps as NutAvatarProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import './index.scss';

export interface AvatarProps extends Partial<Omit<NutAvatarProps, 'size'>> {
  name?: string;
  defaultImage?: string;
  size?: number | string;
}

const PREFIX_CLS = 'm-avatar';

const Avatar: FC<AvatarProps> = ({
  className,
  src,
  name,
  defaultImage,
  size = 40,
  background,
  ...rest
}) => {
  const _src = useMemo(() => {
    // 如果存在图片，优先显示图片
    if (src) return src;
    // 如果存在文字，显示文字，不显示默认图片
    if (name) return undefined;
    // 如果存在外部传入的默认图片，显示默认图片，否则显示组件默认图标
    return defaultImage;
  }, [src, name, defaultImage]);

  const _children = useMemo(() => {
    // 如果存在图片，不显示文字内容
    if (src) return null;
    // 如果不存在文字，不显示内容
    if (!name) return null;
    // 如果存在文字，只显示第一个字符
    return name.slice(0, 1);
  }, [src, name]);

  return (
    <NutAvatar
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-image`]: _src },
        className,
      )}
      src={_src}
      size={`${size}`}
      {...rest}
    >
      {_children}
    </NutAvatar>
  );
};

export default Avatar;
