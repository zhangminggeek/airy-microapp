import { create } from 'zustand';

import type { GetUserSelfResponse } from '@/api';

import { getUserSelf } from '@/api';
import { RoleEnum } from '@/constants/role';

interface UserState {
  id?: number;
  no?: string;
  name?: string;
  avatar?: string;
  orgId?: number;
  roleId?: number;
}

interface UserStore extends UserState {
  updateUserInfo: (state: UserState) => void;
  fetchUserInfo: () => Promise<GetUserSelfResponse>;
}

export const useUserStore = create<UserStore>((set) => ({
  id: undefined, // 用户id
  no: undefined, // 用户编号
  name: undefined, // 用户昵称
  avatar: undefined, // 用户头像
  orgId: undefined, // 当前选中的组织id
  roleId: RoleEnum.USER, // 当前组织下用户的角色id
  updateUserInfo: (v) => {
    set(v);
  },
  fetchUserInfo: async () => {
    const res = await getUserSelf();
    const { id, no, name, avatar, orgId, roleId } = res.data;
    set({ id, no, name, avatar, orgId, roleId });
    return res.data;
  },
}));
