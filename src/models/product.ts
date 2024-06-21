import { create } from 'zustand';

import type { GetProductFieldResponse, GetProductTypeResponse } from '@/api';

import { getProductField, getProductType } from '@/api';

type ProductType = GetProductTypeResponse[0];
type ProductField = GetProductFieldResponse[0];

interface ProductState {
  typeList: ProductType[];
  fieldMap: Map<string, ProductField[]>;
}

interface ProductStore extends ProductState {
  fetchProductType: () => Promise<void>;
  fetchProjectField: (code: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  typeList: [],
  sizeList: [],
  fieldMap: new Map(),
  fetchProductType: async () => {
    const { typeList } = get();
    if (typeList.length) return;
    const res = await getProductType();
    set({ typeList: res.data });
  },
  /**
   * 获取服饰信息字段
   * @param code 服饰类型 code
   * @returns 字段数组
   */
  fetchProjectField: async (code: string) => {
    const ret = get().fieldMap.get(code);
    if (ret) return;
    const res = await getProductField({ code });
    const _map = get().fieldMap;
    _map.set(code, res.data);
    set({ fieldMap: _map });
  },
}));
