import { VIDEO_SUFFIX } from './constants';

import { getParamFromUrl, getSuffixFromUrl } from '@/utils';

/**
 * 判断是否为视频缩略图地址
 * @param src 图片地址
 * @returns 视频地址
 */
export const isVideo = (src: string) => {
  const videoUrl = getVideoUrl(src);
  if (!videoUrl) return false;
  const videoSuffix = getSuffixFromUrl(videoUrl);
  if (!videoSuffix) return false;
  return VIDEO_SUFFIX.includes(videoSuffix);
};

/**
 * 从缩略图地址参数中获取视频地址
 * @param src 缩略图地址
 * @returns 视频地址
 */
export const getVideoUrl = (src: string) => {
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
