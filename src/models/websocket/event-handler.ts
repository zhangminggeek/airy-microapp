import dayjs from 'dayjs';

import type { HandleChatBroadcastParams } from './interfaces';

import { DATE_TIME_FORMAT } from '@/constants';
import { useChatStore } from '@/models';

/**
 * 处理对话消息通知
 * @param params 消息内容
 */
export const handleChatBroadcast = (params: HandleChatBroadcastParams) => {
  const { message } = params;
  const { list, fetchChatList, updateChat, addMessage } =
    useChatStore.getState();
  // 将新消息添加到对应的对话中
  addMessage(message);
  // 修改对话的更新时间和未读消息数量
  const chat = list?.find((item) => item.id === message.chatId);
  if (chat) {
    updateChat(message.chatId, {
      message,
      unreadMessageCount: chat.unreadMessageCount + 1,
      updateTime: dayjs().format(DATE_TIME_FORMAT),
    });
  } else {
    fetchChatList();
  }
};
