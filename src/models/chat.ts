import dayjs from 'dayjs';
import { create } from 'zustand';

import { useWebSocketStore, WebSocketEvent } from './websocket';

import type {
  GetChatMessageWithPageResponse,
  GetChatWithPageRequest,
  GetChatWithPageResponse,
} from '@/api';

import { getChatWithPage, postChatMessageRead } from '@/api';
import { DEFAULT_MAX_PAGE_SIZE, DEFAULT_PAGE_NUM } from '@/constants';

export type Chat = GetChatWithPageResponse['list'][number];
export type Message = GetChatMessageWithPageResponse['list'][number];

interface ChatState {
  list: Chat[];
  total: number; // 对话总数
  messages: Message[];
}

interface ChatStore extends ChatState {
  fetchChatList: (params?: GetChatWithPageRequest) => Promise<void>;
  addList: (data: Chat[]) => void;
  setList: (data: Chat[]) => void;
  updateChat: (id: number, data: Partial<Chat>) => void;
  readMessages: (chatId: number) => Promise<void>;
  sendMessage: (data: any) => void;
  addMessage: (msg: Message) => void;
  mergeMessages: (data: Message[]) => void;
  setMessages: (data: Message[]) => void;
  reset: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  list: [],
  total: 0,
  messages: [],
  /**
   * 获取聊天列表
   */
  fetchChatList: async (params) => {
    const { addList, setList } = get();
    const {
      pageNum = `${DEFAULT_PAGE_NUM}`,
      pageSize = `${DEFAULT_MAX_PAGE_SIZE}`,
      ...rest
    } = params ?? {};
    const res = await getChatWithPage({ ...rest, pageNum, pageSize });
    const { success, data } = res;
    if (success) {
      const { list, total } = data;
      if (Number(pageNum) === 1) {
        setList(list);
      } else {
        addList(list);
      }
      set({ total });
    }
  },
  /**
   * 往全局状态中的对话列表中增加一些对话数据
   * @param data 对话列表
   */
  addList: (data) => {
    const { list } = get();
    set({ list: list.concat(data) });
  },
  /**
   * 设置全局状态中的对话列表
   * @param list 对话列表
   */
  setList: (list) => {
    set({ list });
  },
  /**
   * 更新某一条对话内容中的字段值，同时对对话重新进行排序
   * @param id 对话 id
   * @param data 对话对象
   */
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
  /**
   * 更新服务端和全局状态中消息的已读状态
   * @param chatId 对话 id
   */
  readMessages: async (chatId) => {
    const { updateChat } = get();
    // 更新对话列表中未读消息数量
    updateChat(chatId, { unreadMessageCount: 0 });
    // 更新所有未读消息状态
    await postChatMessageRead({ chatId });
  },
  /**
   * 发送消息到服务端
   * @param data 消息内容
   */
  sendMessage: (data) => {
    const { send } = useWebSocketStore.getState();
    send(WebSocketEvent.CHAT_MESSAGE, data);
  },
  /**
   * 往全局存储的消息列表中添加消息
   * @param msg 消息对象
   */
  addMessage: async (msg) => {
    const { messages } = get();
    set({ messages: [...messages, msg] });
  },
  /**
   * 往全局存储的消息列表中合并一些消息
   * @param data 消息对象数组
   */
  mergeMessages: (data) => {
    const { messages } = get();
    set({ messages: [...data.reverse(), ...messages] });
  },
  /**
   * 设置全局存储的消息列表内容
   * @param data 消息对象数组
   */
  setMessages: (data) => {
    set({ messages: data.reverse() });
  },
  /**
   * 重置存储状态
   */
  reset: () => {
    set({
      list: [],
      messages: [],
    });
  },
}));
