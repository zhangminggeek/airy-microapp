import { ImagePreview } from '@nutui/nutui-react-taro';
import { Image, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useEffect, useMemo, useRef, useState } from 'react';

import { PREFIX_CLS } from './constants';
import { formatPreviewSrc, isVideo } from './utils';

import type { ImagePreviewProps } from '@nutui/nutui-react-taro';
import type { ImageProps, ITouchEvent } from '@tarojs/components';
import type { VideoContext } from '@tarojs/taro';
import type { CSSProperties, FC } from 'react';

import { Icon } from '@/components';
import { getFilenameFromUrl, getSuffixFromUrl } from '@/utils';

import './index.scss';

interface MediaProps {
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
  mode?: ImageProps['mode'];
  showMenuByLongpress?: ImageProps['showMenuByLongpress'];
  src?: string;
  controls?: boolean;
  preview?:
    | boolean
    | {
        url: string[];
      };
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
  const filename = getFilenameFromUrl(src);
  const suffix = getSuffixFromUrl(src);

  const videoContext = useRef<VideoContext>();

  // 图片模式时，是否显示预览大图
  const [showPreview, setShowPreview] = useState<boolean>(false);

  useEffect(() => {
    if (!src || !isVideo(src)) return;
    const context = Taro.createVideoContext(filename, this);
    videoContext.current = context;
  }, [src]);

  // 预览图片
  const previewUrls = useMemo(() => {
    if (!src) {
      return {
        videos: [] as ImagePreviewProps['videos'],
        images: [] as ImagePreviewProps['images'],
      };
    }

    if (typeof preview === 'boolean') {
      return isVideo(src)
        ? {
            videos: [formatPreviewSrc(src)] as ImagePreviewProps['videos'],
            images: [] as ImagePreviewProps['images'],
          }
        : {
            videos: [] as ImagePreviewProps['videos'],
            images: [formatPreviewSrc(src)] as ImagePreviewProps['images'],
          };
    }
    return preview.url?.reduce(
      (prev, cur) => {
        if (isVideo(cur)) {
          const ret = formatPreviewSrc<'videos'>(cur);
          prev.videos.push(ret);
        } else {
          const ret = formatPreviewSrc<'images'>(cur);
          prev.images.push(ret);
        }
        return prev;
      },
      {
        videos: [] as ImagePreviewProps['videos'],
        images: [] as ImagePreviewProps['images'],
      },
    );
  }, [src, preview]);

  const renderMedia = () => {
    if (!src) return null;
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
          setShowPreview(true);
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
      {preview ? (
        <ImagePreview
          className={`${PREFIX_CLS}-preview`}
          visible={showPreview}
          images={previewUrls.images}
          videos={previewUrls.videos}
          indicator
          closeIcon
          closeIconPosition="bottom"
          onClose={() => {
            setShowPreview(false);
          }}
        />
      ) : null}
    </View>
  );
};

export default Media;
