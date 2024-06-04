import { create } from 'zustand';

import {
  getOrganization,
  type GetOrganizationResponse,
  putOrganizationChange,
} from '@/api';
import { useUserStore } from '@/models';
import { EventUtil } from '@/utils';

type OrganizationType = GetOrganizationResponse[0];

interface OrganizationState {
  list?: OrganizationType[];
}

interface OrganizationStore extends OrganizationState {
  fetchOrganizationList: () => Promise<void>;
  changeOrganization: (id: number) => Promise<void>;
}

export const useOrganizationStore = create<OrganizationStore>((set) => ({
  list: [],
  // 获取组织列表
  fetchOrganizationList: async () => {
    const res = await getOrganization();
    set({ list: res.data ?? [] });
  },
  // 切换组织
  changeOrganization: async (id: number) => {
    const { orgId, updateUserInfo } = useUserStore.getState();
    if (id === orgId) return;
    await putOrganizationChange({ id });
    updateUserInfo({ orgId: id });
    EventUtil.emit(EventUtil.EventsKey.ORGANIZATION_CHANGE, id);
  },
}));
