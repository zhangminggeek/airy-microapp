import { Camera, Close } from '@nutui/icons-react-taro';
import { ImagePreview, Loading } from '@nutui/nutui-react-taro';
import { Image, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import type { CSSProperties, FC } from 'react';

import { useOSSStore } from '@/models';
import { Toast } from '@/utils';

import './index.scss';

type ValueType = string[];

interface UploadProps {
  className?: string;
  style?: CSSProperties;
  maxCount?: number; // 最大上传数量
  maxFileSize?: number; // 最大文件大小，单位字节
  sourceType?: Array<'album' | 'camera'>;
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
  value = [],
  onChange,
}) => {
  const { signature, fetchOSSSignature } = useOSSStore();

  // 是否上传中
  const [uploading, setUploading] = useState<boolean>(false);
  // 是否显示预览
  const [showPreview, setShowPreview] = useState<boolean>(false);
  // 预览初始值
  const [previewInitNum, setPreviewInitNum] = useState<number>(0);

  useEffect(() => {
    fetchOSSSignature();
  }, []);

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
    // 校验 signature 是否过期，过期则重新获取
    if (!signature?.expire || dayjs().isBefore(dayjs.unix(signature?.expire))) {
      await fetchOSSSignature();
    }
  };

  // 上传图片
  const uploadImage = async (file: Taro.chooseImage.ImageFile) => {
    await beforeUpload(file);
    const filename = file.path.split('/').at(-1);
    const key = `${signature?.dir}${filename}`;
    Taro.uploadFile({
      url: signature!.host,
      filePath: file.path,
      name: 'file',
      formData: {
        ...signature,
        key,
        success_action_status: '200',
      },
      success() {
        const url = `${signature!.host}/${key}`;
        onChange?.(value.concat(url));
      },
      complete() {
        setUploading(false);
      },
    });
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
        onClose={() => {
          setShowPreview(false);
        }}
      />
      {value?.length < maxCount ? (
        <View className={`${PREFIX_CLS}-btn`} onClick={chooseImage}>
          {uploading ? (
            <Loading />
          ) : (
            <Camera className={`${PREFIX_CLS}-btn-icon`} />
          )}
        </View>
      ) : null}
    </View>
  );
};

export default Upload;
