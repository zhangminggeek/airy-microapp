import { GetChatMessageWithPageResponse } from '@/api';

export type EventHandler = (data: any) => void;

export interface WebSocketMessage<T = any> {
  event: string;
  data: T;
}

export interface HandleChatBroadcastParams {
  message: GetChatMessageWithPageResponse['list'][number];
  count: number;
}
