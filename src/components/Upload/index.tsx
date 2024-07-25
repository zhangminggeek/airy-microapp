import { Add, Close } from '@nutui/icons-react-taro';
import { ImagePreview, Loading } from '@nutui/nutui-react-taro';
import { Image, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useState } from 'react';

import type { CSSProperties, FC } from 'react';

import { useUpload } from '@/hooks';
import { Toast } from '@/utils';

import './index.scss';

type ValueType = string[];

interface UploadProps {
  className?: string;
  style?: CSSProperties;
  maxCount?: number; // 最大上传数量
  maxFileSize?: number; // 最大文件大小，单位字节
  sourceType?: Array<'album' | 'camera'>;
  placeholder?: string;
  value?: ValueType;
  onChange?: (value: ValueType) => void;
}

const PREFIX_CLS = 'm-upload';

const Upload: FC<UploadProps> = ({
  className,
  style,
  maxCount = 1,
  maxFileSize,
  sourceType = ['album', 'camera'],
  placeholder,
  value = [],
  onChange,
}) => {
  const { upload } = useUpload();

  // 是否上传中
  const [uploading, setUploading] = useState<boolean>(false);
  // 是否显示预览
  const [showPreview, setShowPreview] = useState<boolean>(false);
  // 预览初始值
  const [previewInitNum, setPreviewInitNum] = useState<number>(0);

  // 选择图片
  const chooseImage = async () => {
    if (uploading) return;
    Taro.chooseImage({
      count: 1,
      sourceType,
      success(result) {
        const file = result.tempFiles[0];
        setUploading(true);
        uploadImage(file);
      },
      fail() {
        setUploading(false);
      },
    });
  };

  // 校验文件
  const checkFile = (file: Taro.chooseImage.ImageFile) => {
    // 校验文件大小
    if (maxFileSize && file.size > maxFileSize) {
      Toast.info(`文件大小不能超过${maxFileSize / 1024 / 1024}M`);
      return false;
    }
    return true;
  };

  // 上传前校验
  const beforeUpload = async (file: Taro.chooseImage.ImageFile) => {
    if (!checkFile(file)) return Promise.reject();
  };

  // 上传图片
  const uploadImage = async (file: Taro.chooseImage.ImageFile) => {
    await beforeUpload(file);
    try {
      const url = await upload(file.path);
      onChange?.(value?.concat([url]));
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  // 删除图片
  const handleDelete = (index: number) => {
    const ret = [...value];
    ret.splice(index, 1);
    onChange?.(ret);
  };

  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      {value?.map((url, index) => (
        <View key={url} className={`${PREFIX_CLS}-item`}>
          <Image
            className={`${PREFIX_CLS}-item-img`}
            src={url}
            mode="aspectFit"
            onClick={() => {
              setShowPreview(true);
              setPreviewInitNum(index + 1);
            }}
          />
          <View
            className={`${PREFIX_CLS}-item-icon`}
            onClick={() => {
              handleDelete(index);
            }}
          >
            <Close size={8} color="#4A4A4A" />
          </View>
        </View>
      ))}
      <ImagePreview
        visible={showPreview}
        images={value.map((src) => ({ src }))}
        defaultValue={previewInitNum}
        indicator
        closeOnContentClick
        onClose={() => {
          setShowPreview(false);
        }}
      />
      {value?.length < maxCount ? (
        <View className={`${PREFIX_CLS}-btn`} onClick={chooseImage}>
          {uploading ? (
            <Loading />
          ) : (
            <View className={`${PREFIX_CLS}-btn-content`}>
              <Add className={`${PREFIX_CLS}-btn-icon`} />
              <Text className={`${PREFIX_CLS}-btn-placeholder`}>
                {placeholder}
              </Text>
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
};

export default Upload;
