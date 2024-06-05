import { create } from 'zustand';

import type { GetUserSelfResponse } from '@/api';

import { getUserSelf } from '@/api';

type UserInfo = GetUserSelfResponse;

interface UserState {
  info: UserInfo;
}

interface UserStore extends UserState {
  updateUserInfo: (info: UserInfo) => void;
  fetchUserInfo: () => Promise<GetUserSelfResponse>;
}

export const useUserStore = create<UserStore>((set) => ({
  info: {} as any,
  updateUserInfo: (info) => {
    set({ info });
  },
  fetchUserInfo: async () => {
    const res = await getUserSelf();
    set({ info: res.data });
    return res.data;
  },
}));
