import { Image, ImagePreview } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useState } from 'react';

import type { CSSProperties, FC } from 'react';

import { Space } from '@/components';

import './index.scss';

interface ProductPictureProps {
  className?: string;
  style?: CSSProperties;
  images?: string[];
}

const PREFIX_CLS = 'm-product-picture';

const ProductPicture: FC<ProductPictureProps> = ({
  className,
  style,
  images,
}) => {
  // 选中图片列表的索引值
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // 是否显示大图预览
  const [showPreview, setShowPreview] = useState<boolean>(false);

  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <Image
        className={`${PREFIX_CLS}-image`}
        src={images?.[selectedIndex]}
        width="100vw"
        height="100vw"
        mode="aspectFill"
        onClick={() => {
          setShowPreview(true);
        }}
      />
      <ImagePreview
        visible={showPreview}
        images={images?.map((src) => ({ src }))}
        defaultValue={selectedIndex + 1}
        closeOnContentClick
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
              }}
            >
              <Image
                className={`${PREFIX_CLS}-thumbnail`}
                src={url}
                mode="aspectFill"
                width={48}
                height={48}
              />
            </View>
          ))}
        </Space>
      </View>
    </View>
  );
};

export default ProductPicture;
