import dayjs from 'dayjs';
import { create } from 'zustand';

import { getOssSignature, type GetOssSignatureResponse } from '@/api';
import { OSS_SUPER_KEY } from '@/constants';

export type Signature = GetOssSignatureResponse;

interface OSSState {
  signature?: Signature;
}

interface OSSStore extends OSSState {
  fetchOSSSignature: () => Promise<void>;
}

export const useOSSStore = create<OSSStore>((set, get) => ({
  signature: undefined,
  fetchOSSSignature: async (superKey = OSS_SUPER_KEY) => {
    const s = get().signature;

    // 如果签名存在且未过期，则不再请求
    if (s?.signature && dayjs().isBefore(dayjs.unix(s?.expire))) {
      return;
    }

    // 否则请求签名
    const res = await getOssSignature({ superKey });
    set({ signature: res.data });
  },
}));
