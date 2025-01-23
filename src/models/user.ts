import Taro from '@tarojs/taro';
import { create } from 'zustand';

import { useChatStore } from './chat';
import { useWebSocketStore } from './websocket';

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
    // 清空用户信息
    set({ info: {} as any });
    // 清空对话信息
    const { reset } = useChatStore.getState();
    reset();
    // 断开 ws 连接
    const { disconnect } = useWebSocketStore.getState();
    disconnect({});
    // 清空本地 cookie
    Taro.removeStorageSync(StorageKey.TOKEN);
    EventUtil.emit(EventUtil.EventsKey.LOGOUT);
  },
}));
