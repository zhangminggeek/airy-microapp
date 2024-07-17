import { Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useContext } from 'react';

import { PREFIX_CLS } from '../../constants';
import { Context } from '../../context';
import Wrapper from '../Wrapper';

import type { AvatarProps } from '@/components/Avatar';
import type { FC } from 'react';

import { Avatar } from '@/components';
import { CLOUD_ENV_ID, OSS_DOMAIN, OSS_UPLOAD_DIR } from '@/constants';
import { Toast } from '@/utils';

import './index.scss';

export interface CustomAvatarProps extends Partial<Omit<AvatarProps, 'src'>> {}

const CustomAvatar: FC<CustomAvatarProps> = ({ className, ...rest }) => {
  const { name, value, onChange } = useContext(Context);

  // 上传图片
  const upload = (path: string) => {
    const filename = path.split('/').at(-1);
    const cloudPath = `${OSS_UPLOAD_DIR}/${filename}`;
    Taro.cloud.uploadFile({
      cloudPath,
      filePath: path,
      config: {
        env: CLOUD_ENV_ID,
      },
      success() {
        const url = `${OSS_DOMAIN}/${path}`;
        onChange?.(name, url);
      },
      fail() {
        Toast.info('图片上传失败，请重试');
      },
    });
  };

  return (
    <Wrapper className={`${PREFIX_CLS}-avatar-wrapper`}>
      <Avatar
        className={classnames(`${PREFIX_CLS}-avatar`, className)}
        src={value}
        {...rest}
      />
      <Button
        className={`${PREFIX_CLS}-avatar-btn`}
        openType="chooseAvatar"
        onChooseAvatar={(e) => {
          const path = e.detail.avatarUrl;
          if (!path) {
            Toast.info('图片获取失败，请重试');
          }
          upload(path);
        }}
      />
    </Wrapper>
  );
};

export default CustomAvatar;
