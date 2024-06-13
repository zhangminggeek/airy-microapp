import { create } from 'zustand';

import type {
  GetProductFieldResponse,
  GetProductSizeOptionResponse,
  GetProductTypeResponse,
} from '@/api';

import { getProductField, getProductSizeOption, getProductType } from '@/api';

type ProductType = GetProductTypeResponse[0];
type ProductSize = GetProductSizeOptionResponse[0];
type ProductField = GetProductFieldResponse[0];

interface ProductState {
  typeList: ProductType[];
  sizeList: ProductSize[];
  fieldMap: Map<string, ProductField[]>;
}

interface ProductStore extends ProductState {
  fetchProductType: () => Promise<void>;
  fetchProductSize: () => Promise<void>;
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
  fetchProductSize: async () => {
    if (get().sizeList.length) return;
    const res = await getProductSizeOption();
    set({ sizeList: res.data });
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
