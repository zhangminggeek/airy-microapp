import { request } from '@tarojs/taro';
import { create } from 'zustand';

import { getPlatformAbility } from '@/api';
import { OSS_ASSETS_DIR } from '@/constants';

export interface AdministrativeCode {
  name: string;
  code: string;
  children?: AdministrativeCode[];
}

interface GloablState {
  // 平台能力项（仅用于应付小程序审核）
  platformAbility: string[];
  // 行政编码树形数据
  administrativeCodeTree: AdministrativeCode[];
  // 行政编码字典，以 code 为 key，对应 code 的行政区信息为 value
  administrativeCodeMap: Map<string, AdministrativeCode>;
}

interface GloablStore extends GloablState {
  // 获取平台能力项
  fetchPlatformAbility: () => Promise<void>;
  // 获取行政编码，获取全量数据并保存
  fetchAdministrativeCode: () => Promise<AdministrativeCode[]>;
  // 储存行政编码
  saveAdministrativeCode: (code: string, data: AdministrativeCode) => void;
}

export const useGlobalStore = create<GloablStore>((set, get) => ({
  platformAbility: [],
  administrativeCodeTree: [] as AdministrativeCode[],
  administrativeCodeMap: new Map(),
  fetchPlatformAbility: async () => {
    const res = await getPlatformAbility();
    const ability = res.data
      ?.filter((item) => item.enable)
      ?.map((item) => item.name);
    console.log('fetchPlatformAbility', ability);
    set({ platformAbility: ability });
  },
  fetchAdministrativeCode: async () => {
    const { administrativeCodeTree } = get();
    if (administrativeCodeTree?.length) return administrativeCodeTree;
    const res = await request({
      url: `${OSS_ASSETS_DIR}/pca-code.json`,
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
