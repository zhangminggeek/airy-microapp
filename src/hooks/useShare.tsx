import Taro, { useRouter } from '@tarojs/taro';
import { useEffect } from 'react';

import { StorageKey } from '@/constants/storage';
import { parseJson, RouterUtil } from '@/utils';

export enum ShareType {
  MARKET = 'market',
  COMPANY = 'company',
  INVITATION = 'invitation',
}

export const useShare = () => {
  const { shareType, shareParams } = useRouter().params;

  useEffect(() => {
    if (!shareType) return;
    const params = parseJson(shareParams, {});
    handleShare(shareType as ShareType, params);
  }, [shareType, shareParams]);

  // 根据分享参数处理对应事件
  const handleShare = (type: ShareType, params: Record<string, any>) => {
    const { invitationCode, ...rest } = params;
    if (invitationCode) {
      Taro.setStorageSync(StorageKey.INVITATION_CODE, invitationCode);
    }
    if (type === ShareType.MARKET) {
      RouterUtil.navigateTo('/pages/market/detail/index', rest);
    } else if (type === ShareType.COMPANY) {
      RouterUtil.navigateTo('/packageCompany/pages/index/index', rest);
    }
  };

  return {};
};
