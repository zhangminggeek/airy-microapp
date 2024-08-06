import { ImagePreview, Swiper } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo, useRef, useState } from 'react';

import { ROOT_PREFIX_CLS } from '../../constants';

import type { ImagePreviewProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import { Media, Space } from '@/components';
import { formatPreviewSrc, isVideo } from '@/components/Media/utils';

import './index.scss';

export interface PictureGroupProps {
  images?: string[];
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-detail-picture-group`;
const windowWidth = Taro.getSystemInfoSync().windowWidth;

const PictureGroup: FC<PictureGroupProps> = ({ images }) => {
  const swiperRef = useRef<any>(null);
  // 选中图片列表的索引值
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // 是否显示大图预览
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const previewUrls = useMemo(() => {
    return images?.reduce(
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
  }, [images]);

  return (
    <View className={classnames(PREFIX_CLS)}>
      <Swiper
        ref={swiperRef}
        height={windowWidth}
        indicator
        loop
        onChange={(e) => {
          setSelectedIndex(e.detail.current);
        }}
      >
        {images?.map((url, index) => (
          <Swiper.Item key={index}>
            <Media
              className={`${PREFIX_CLS}-image`}
              src={url}
              width="100vw"
              height="100vw"
              mode="aspectFill"
              onClick={() => {
                setShowPreview(true);
              }}
            />
          </Swiper.Item>
        ))}
      </Swiper>
      <ImagePreview
        className={`${PREFIX_CLS}-preview`}
        visible={showPreview}
        images={previewUrls?.images}
        videos={previewUrls?.videos}
        defaultValue={selectedIndex + 1}
        closeIcon
        closeIconPosition="bottom"
        onClose={() => {
          setShowPreview(false);
        }}
      />
      <View className={`${PREFIX_CLS}-thumbnail-group`}>
        <Space block>
          {images?.map((url, index) => (
            <View
              className={classnames(`${PREFIX_CLS}-thumbnail-item`, {
                [`${PREFIX_CLS}-thumbnail-selected`]: index === selectedIndex,
              })}
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                swiperRef.current?.to(index);
              }}
            >
              <Media
                className={`${PREFIX_CLS}-thumbnail-item-media`}
                src={url}
                mode="aspectFill"
              />
            </View>
          ))}
        </Space>
      </View>
    </View>
  );
};

export default PictureGroup;
