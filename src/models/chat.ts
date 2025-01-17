import Taro from '@tarojs/taro';
import dayjs from 'dayjs';
import { create } from 'zustand';

import type {
  GetChatMessageWithPageResponse,
  GetChatWithPageResponse,
} from '@/api';

import { postChatMessageRead } from '@/api';

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
  readMessages: (chatId: number) => Promise<void>;
  sendMessage: (event: string, data: any) => void;
  addMessage: (msg: MessageType) => void;
  mergeMessages: (data: MessageType[]) => void;
  setMessages: (data: MessageType[]) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  ws: undefined,
  list: [],
  messages: [],
  /**
   * 设置 ws 实例
   * @param ws 实例
   */
  setWebSocket: (ws) => {
    set({ ws });
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
    const { list, setList } = get();
    // 更新对话列表中未读消息数量
    const newList = list.map((chat) => {
      if (chat.id === chatId) {
        return { ...chat, unreadMessageCount: 0 };
      }
      return chat;
    });
    setList(newList);
    // 更新所有未读消息状态
    await postChatMessageRead({ chatId });
  },
  /**
   * 发送消息到服务端
   * @param event ws 事件类型，如维持心跳、加入对话、离开对话、发送对话消息等
   * @param data 消息内容
   */
  sendMessage: (event, data) => {
    const { ws } = get();
    if (!ws) return;
    const msg = JSON.stringify({ event, data });
    ws.send({ data: msg });
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
}));
