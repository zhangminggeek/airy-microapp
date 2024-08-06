import { Loading } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useState } from 'react';

import type { CSSProperties, FC } from 'react';

import { Icon, Media } from '@/components';
import { useUpload } from '@/hooks';
import { Toast } from '@/utils';

import './index.scss';

type ValueType = string[];

interface UploadProps {
  className?: string;
  style?: CSSProperties;
  maxCount?: number; // 最大上传数量
  maxFileSize?: number; // 最大文件大小，单位字节
  mediaType?: Array<'image' | 'video' | 'mix'>;
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
  mediaType = ['mix'],
  sourceType = ['album', 'camera'],
  placeholder,
  value = [],
  onChange,
}) => {
  const { upload } = useUpload();

  // 是否上传中
  const [uploading, setUploading] = useState<boolean>(false);

  // 选择图片或视频
  const chooseMedia = async () => {
    if (uploading) return;
    Taro.chooseMedia({
      count: 1,
      mediaType,
      sourceType,
      success(result) {
        const file = result.tempFiles[0];
        uploadMedia(file);
      },
      fail() {
        Toast.info('获取文件失败，请重试');
      },
    });
  };

  // 校验文件
  const checkFile = (file: Taro.chooseMedia.ChooseMedia) => {
    // 校验文件大小
    if (maxFileSize && file.size > maxFileSize) {
      Toast.info(`文件大小不能超过${maxFileSize / 1024 / 1024}M`);
      return false;
    }
    return true;
  };

  // 上传前校验
  const beforeUpload = async (file: Taro.chooseMedia.ChooseMedia) => {
    if (!checkFile(file)) return Promise.reject();
  };

  // 上传图片/视频
  const uploadMedia = async (file: Taro.chooseMedia.ChooseMedia) => {
    await beforeUpload(file);
    try {
      setUploading(true);
      const url = await upload(file.tempFilePath);
      if (file.thumbTempFilePath) {
        // 上传视频时，同时上传缩略图，并且显示缩略图
        const thumbUrl = await upload(file.thumbTempFilePath);
        const filename = url.split('/').at(-1);
        const urlWithSource = `${thumbUrl}?source=${filename}`;
        onChange?.(value?.concat([urlWithSource]));
      } else {
        onChange?.(value?.concat([url]));
      }
    } catch (err) {
      console.log(err);
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
          <Media
            className={`${PREFIX_CLS}-item-media`}
            src={url}
            preview={{ url: value }}
          />
          <View
            className={`${PREFIX_CLS}-item-icon`}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(index);
            }}
          >
            <Icon
              className={`${PREFIX_CLS}-item-icon-close`}
              name="CloseOutlined"
              size={10}
            />
          </View>
        </View>
      ))}
      {value?.length < maxCount ? (
        <View className={`${PREFIX_CLS}-btn`} onClick={chooseMedia}>
          {uploading ? (
            <Loading />
          ) : (
            <View className={`${PREFIX_CLS}-btn-content`}>
              <Icon
                className={`${PREFIX_CLS}-btn-icon`}
                name="PlusOutlined"
                size={24}
              />
              {placeholder ? (
                <Text className={`${PREFIX_CLS}-btn-placeholder`}>
                  {placeholder}
                </Text>
              ) : null}
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
};

export default Upload;
