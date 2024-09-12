import { Image, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo } from 'react';

import { PREFIX_CLS } from './constants';
import { getVideoUrl, isVideo } from './utils';

import type { ImageProps, ITouchEvent } from '@tarojs/components';
import type { CSSProperties, FC } from 'react';

import { Icon } from '@/components';
import { getSuffixFromUrl } from '@/utils';

import './index.scss';

type Source = Taro.previewMedia.Sources;

interface MediaProps {
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
  mode?: ImageProps['mode'];
  showMenuByLongpress?: ImageProps['showMenuByLongpress'];
  src?: string;
  controls?: boolean;
  preview?: boolean;
  onClick?: (e: ITouchEvent) => void;
}

const Media: FC<MediaProps> = ({
  className,
  style,
  width,
  height,
  mode = 'aspectFit',
  showMenuByLongpress,
  src,
  controls = true,
  preview = false,
  onClick,
}) => {
  // 预览资源
  const previewSources: Source[] = useMemo(() => {
    if (!src) return [];

    return [
      {
        url: isVideo(src) ? getVideoUrl(src) : src,
        type: isVideo(src) ? 'video' : 'image',
        poster: isVideo(src) ? src : undefined,
      },
    ];
  }, [src, preview]);

  const renderMedia = () => {
    if (!src) return null;

    const suffix = getSuffixFromUrl(src);
    if (!suffix) return null;

    return (
      <Image
        className={`${PREFIX_CLS}-image`}
        src={src}
        mode={mode}
        showMenuByLongpress={showMenuByLongpress}
      />
    );
  };

  return (
    <View
      className={classnames(PREFIX_CLS, className)}
      style={{
        ...style,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      onClick={(e) => {
        if (preview) {
          Taro.previewMedia({ sources: previewSources });
        }
        onClick?.(e);
      }}
    >
      {renderMedia()}
      {src && isVideo(src) && controls ? (
        <Icon
          className={`${PREFIX_CLS}-video-icon`}
          name="PlayArrowFilled"
          size={36}
        />
      ) : null}
    </View>
  );
};

export default Media;
