import { useShareAppMessage } from '@tarojs/taro';

import type { FC, ReactNode } from 'react';

import ImageLogo from '@/assets/logo.svg';

interface ShareWrapperProps {
  children?: ReactNode;
}

const ShareWrapper: FC<ShareWrapperProps> = ({ children }) => {
  useShareAppMessage(() => {
    // 来自页面转发分享
    return {
      title: 'AIRYBLUE',
      path: `/pages/security/index`,
      imageUrl: ImageLogo,
    };
  });

  return children;
};

export default ShareWrapper;
