import Taro from '@tarojs/taro';
import dayjs from 'dayjs';
import { create } from 'zustand';

import type {
  GetChatMessageWithPageResponse,
  GetChatWithPageResponse,
} from '@/api';

type ChatType = GetChatWithPageResponse['list'][number];
type MessageType = GetChatMessageWithPageResponse['list'][number];

interface ChatState {
  ws?: Taro.SocketTask;
  list: ChatType[];
  messages: MessageType[];
}

interface ChatStore extends ChatState {
  setWebSocket: (ws?: Taro.SocketTask) => void;
  addList: (data: ChatType[]) => void;
  setList: (data: ChatType[]) => void;
  updateChat: (id: number, data: Partial<ChatType>) => void;
  sendMessage: (event: string, data: any) => void;
  addMessage: (msg: MessageType) => void;
  mergeMessages: (data: MessageType[]) => void;
  setMessages: (data: MessageType[]) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  ws: undefined,
  list: [],
  messages: [],
  setWebSocket: (ws) => {
    set({ ws });
  },
  addList: (data) => {
    const { list } = get();
    set({ list: list.concat(data) });
  },
  setList: (list) => {
    set({ list });
  },
  updateChat: (id, data) => {
    const { list } = get();
    const index = list.findIndex((item) => item.id === id);
    const val = {
      ...list[index],
      ...data,
    };
    const newList = [
      ...list.slice(0, index),
      val,
      ...list.slice(index + 1),
    ].sort((a, b) => dayjs(b.updateTime).diff(dayjs(a.updateTime)));
    set({ list: newList });
  },
  sendMessage: (event, data) => {
    const { ws } = get();
    if (!ws) return;
    const msg = JSON.stringify({ event, data });
    ws.send({ data: msg });
  },
  addMessage: async (msg) => {
    const { messages } = get();
    set({ messages: [...messages, msg] });
  },
  mergeMessages: (data) => {
    const { messages } = get();
    set({ messages: [...data.reverse(), ...messages] });
  },
  setMessages: (data) => {
    set({ messages: data.reverse() });
  },
}));
