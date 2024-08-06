import { VIDEO_SUFFIX } from './constants';

import type { ImagePreviewProps } from '@nutui/nutui-react-taro';

import { getParamFromUrl, getSuffixFromUrl } from '@/utils';

/**
 * 判断是否为视频缩略图地址
 * @param src 图片地址
 * @returns 视频地址
 */
export const isVideo = (src: string) => {
  const sourceUrl = generateSourceUrl(src);
  if (!sourceUrl) return false;
  const sourceSuffix = getSuffixFromUrl(sourceUrl);
  if (!sourceSuffix) return false;
  return VIDEO_SUFFIX.includes(sourceSuffix);
};

/**
 * 从缩略图地址参数中获取视频地址
 * @param src 缩略图地址
 * @returns 视频地址
 */
export const generateSourceUrl = (src: string) => {
  try {
    // 视频地址
    const filename = getParamFromUrl(src, 'source');
    const { origin, pathname } = new URL(src);
    const path = pathname.split('/').slice(0, -1).join('/');
    return `${origin}${path}/${filename}`;
  } catch (err) {
    console.log(err);
    return '';
  }
};

/**
 * 格式化预览图片/视频地址
 * @param src 图片地址
 * @returns 预览图片/视频地址
 */
export const formatPreviewSrc = <T extends 'videos' | 'images'>(
  src: string,
): ImagePreviewProps[T][number] => {
  // 视频地址
  const sourceUrl = generateSourceUrl(src);
  const sourceSuffix = getSuffixFromUrl(sourceUrl);
  return isVideo(src)
    ? {
        source: {
          src: sourceUrl,
          type: `video/${sourceSuffix}`,
        },
        options: {
          muted: false,
          controls: true,
        },
      }
    : { src };
};
