import { useRouter } from '@tarojs/taro';
import { useEffect } from 'react';

import { parseJson, RouterUtil } from '@/utils';

export enum ShareType {
  MARKET = 'market',
  PURCHASE = 'purchase',
  COMPANY = 'company',
}

export const useShare = () => {
  const { shareType, shareParams } = useRouter().params;

  useEffect(() => {
    if (!shareType) return;
    const params = parseJson(shareParams, {});
    handleRedirect(shareType as ShareType, params);
  }, [shareType, shareParams]);

  // 根据分享参数重定向到指定页面
  const handleRedirect = (type: ShareType, params: Record<string, any>) => {
    if (type === ShareType.MARKET) {
      RouterUtil.navigateTo('/pages/market/detail/index', params);
    } else if (type === ShareType.COMPANY) {
      RouterUtil.navigateTo('/packageCompany/pages/index/index', params);
    }
  };

  return {};
};
