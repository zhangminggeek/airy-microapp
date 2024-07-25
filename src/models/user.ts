import Taro from '@tarojs/taro';
import { create } from 'zustand';

import type { GetUserSelfResponse } from '@/api';

import { getUserSelf } from '@/api';
import { StorageKey } from '@/constants/storage';
import { EventUtil } from '@/utils';

type UserInfo = GetUserSelfResponse;

interface UserState {
  info: UserInfo;
}

interface UserStore extends UserState {
  updateUserInfo: (info: UserInfo) => void;
  fetchUserInfo: () => Promise<GetUserSelfResponse>;
  logout: () => void;
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
  logout: () => {
    set({ info: {} as any });
    Taro.removeStorageSync(StorageKey.TOKEN);
    EventUtil.emit(EventUtil.EventsKey.LOGOUT);
  },
}));
