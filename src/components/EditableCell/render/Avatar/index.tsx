import { Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useContext, useEffect } from 'react';

import { PREFIX_CLS } from '../../constants';
import { Context } from '../../context';
import Wrapper from '../Wrapper';

import type { AvatarProps } from '@/components/Avatar';
import type { FC } from 'react';

import { Avatar } from '@/components';
import { useOSSStore } from '@/models';
import { Toast } from '@/utils';

import './index.scss';

export interface CustomAvatarProps extends Partial<Omit<AvatarProps, 'src'>> {}

const CustomAvatar: FC<CustomAvatarProps> = ({ className, ...rest }) => {
  const { name, value, onChange } = useContext(Context);

  const { signature, fetchOSSSignature } = useOSSStore();

  useEffect(() => {
    fetchOSSSignature();
  }, []);

  // 上传图片
  const upload = (path: string) => {
    const filename = path.split('/').at(-1);
    const key = `${signature?.dir}${filename}`;
    Taro.uploadFile({
      url: signature!.host,
      filePath: path,
      name: 'file',
      formData: {
        ...signature,
        key,
        success_action_status: '200',
      },
      success() {
        const url = `${signature!.host}/${key}`;
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
