import { create } from 'zustand';

import type { GetChatWithPageResponse } from '@/api';

type ChatType = GetChatWithPageResponse['list'][number];

interface ChatState {
  list: ChatType[];
}

interface ChatStore extends ChatState {
  addList: (data: ChatType[]) => void;
  setList: (data: ChatType[]) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  list: [],
  addList: (data) => {
    const { list } = get();
    set({ list: list.concat(data) });
  },
  setList: (list: ChatType[]) => {
    set({ list });
  },
}));
