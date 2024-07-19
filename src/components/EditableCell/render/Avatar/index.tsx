import { Button } from '@tarojs/components';
import classnames from 'classnames';
import { useContext } from 'react';

import { PREFIX_CLS } from '../../constants';
import { Context } from '../../context';
import Wrapper from '../Wrapper';

import type { AvatarProps } from '@/components/Avatar';
import type { FC } from 'react';

import { Avatar } from '@/components';
import { useUpload } from '@/hooks';
import { Toast } from '@/utils';

import './index.scss';

export interface CustomAvatarProps extends Partial<Omit<AvatarProps, 'src'>> {}

const CustomAvatar: FC<CustomAvatarProps> = ({ className, ...rest }) => {
  const { name, value, onChange } = useContext(Context);

  const { upload } = useUpload();

  return (
    <Wrapper className={`${PREFIX_CLS}-avatar-wrapper`}>
      <Avatar
        {...rest}
        className={classnames(`${PREFIX_CLS}-avatar`, className)}
        src={value}
        size={40}
      />
      <Button
        className={`${PREFIX_CLS}-avatar-btn`}
        openType="chooseAvatar"
        onChooseAvatar={async (e) => {
          const path = e.detail.avatarUrl;
          if (!path) {
            Toast.info('图片获取失败，请重试');
          }
          const url = await upload(path);
          onChange?.(name, url);
        }}
      />
    </Wrapper>
  );
};

export default CustomAvatar;
