import { Swiper } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useRef, useState } from 'react';

import { ROOT_PREFIX_CLS } from '../../constants';

import type { FC } from 'react';

import { Media, Space } from '@/components';
import { getVideoUrl, isVideo } from '@/components/Media/utils';

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
                Taro.previewMedia({
                  sources: images?.map((url) => ({
                    url: isVideo(url) ? getVideoUrl(url) : url,
                    type: isVideo(url) ? 'video' : 'image',
                    poster: isVideo(url) ? url : undefined,
                  })),
                  current: selectedIndex,
                });
              }}
            />
          </Swiper.Item>
        ))}
      </Swiper>
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
