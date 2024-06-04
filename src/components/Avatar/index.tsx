import { Avatar as NutAvatar } from '@nutui/nutui-react-taro';
import { Text } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { AvatarProps as NutAvatarProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import './index.scss';

interface AvatarProps extends Partial<NutAvatarProps> {
  name?: string;
  defaultImage?: string;
}

const PREFIX_CLS = 'm-avatar';

const Avatar: FC<AvatarProps> = ({
  className,
  src,
  name,
  defaultImage,
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
    // 如果存在文字，只显示前4个字符
    const abbr = name.slice(0, 4);
    return abbr.split('').map((s, index) => (
      <Text
        className={classnames(
          `${PREFIX_CLS}-text-item`,
          `${PREFIX_CLS}-text-item-${abbr.length}`,
        )}
        key={index}
      >
        {s}
      </Text>
    ));
  }, [src, name]);

  const _background = useMemo(() => {
    if (_src) return 'transparent';
    return background ?? '#eee';
  }, [_src, background]);

  return (
    <NutAvatar
      className={classnames(PREFIX_CLS, className)}
      src={_src}
      background={_background}
      {...rest}
    >
      {_children}
    </NutAvatar>
  );
};

export default Avatar;
