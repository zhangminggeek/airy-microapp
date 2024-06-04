import { useShareAppMessage } from '@tarojs/taro';

import type { FC, ReactNode } from 'react';

import ImageLogo from '@/assets/logo_primary.png';

interface ShareWrapperProps {
  children?: ReactNode;
}

const ShareWrapper: FC<ShareWrapperProps> = ({ children }) => {
  useShareAppMessage(() => {
    // 来自页面转发分享
    return {
      title: '居简记',
      path: `/pages/security/index`,
      imageUrl: ImageLogo,
    };
  });

  return children;
};

export default ShareWrapper;
