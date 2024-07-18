import { request } from '@tarojs/taro';
import { create } from 'zustand';

import { OSS_ASSETS_DIR_WITH_DOMAIN } from '@/constants';

export interface AdministrativeCode {
  name: string;
  code: string;
  children?: AdministrativeCode[];
}

interface GloablState {
  // 行政编码树形数据
  administrativeCodeTree: AdministrativeCode[];
  // 行政编码字典，以 code 为 key，对应 code 的行政区信息为 value
  administrativeCodeMap: Map<string, AdministrativeCode>;
}

interface GloablStore extends GloablState {
  // 获取行政编码，获取全量数据并保存
  fetchAdministrativeCode: () => Promise<AdministrativeCode[]>;
  // 储存行政编码
  saveAdministrativeCode: (code: string, data: AdministrativeCode) => void;
}

export const useGlobalStore = create<GloablStore>((set, get) => ({
  administrativeCodeTree: [] as AdministrativeCode[],
  administrativeCodeMap: new Map(),
  fetchAdministrativeCode: async () => {
    const { administrativeCodeTree } = get();
    if (administrativeCodeTree?.length) return administrativeCodeTree;
    const res = await request({
      url: `${OSS_ASSETS_DIR_WITH_DOMAIN}/pca-code.json`,
      method: 'GET',
      success(result) {
        set({ administrativeCodeTree: result.data });
      },
    });
    return res.data;
  },
  saveAdministrativeCode: (code, data) => {
    const { administrativeCodeMap } = get();
    if (administrativeCodeMap.get(code)) return;
    administrativeCodeMap.set(code, data);
    set({ administrativeCodeMap });
  },
}));
