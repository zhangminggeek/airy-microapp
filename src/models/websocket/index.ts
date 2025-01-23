import Taro from '@tarojs/taro';
import { create } from 'zustand';

import { WebSocketEvent } from './constants';
import { handleChatBroadcast } from './event-handler';

import type { EventHandler, WebSocketMessage } from './interfaces';
import type { SocketTask } from '@tarojs/taro';

import { getGetewayWsSign } from '@/api';
import { parseJson } from '@/utils';

export { WebSocketEvent };

interface WebSocketState {
  ws?: Taro.SocketTask;
}

interface WebSocketStore extends WebSocketState {
  connect: () => Promise<void>;
  send: (event: string, msg: any) => void;
  addListener: (event: string, handler: EventHandler) => { remove: () => void };
  disconnect: (option: SocketTask.CloseOption) => void;
}

// 监听事件
const eventHandlerMap = new Map<string, Set<EventHandler>>([]);

export const useWebSocketStore = create<WebSocketStore>((set, get) => ({
  ws: undefined,
  /**
   * 连接 ws
   */
  async connect() {
    const { ws } = get();
    if (ws) return;
    const res = await getGetewayWsSign();
    const st = await Taro.connectSocket({
      url: 'ws://192.168.43.26:9000',
      header: { token: res.data },
      success(res) {
        console.log('connectSocket success', res);
      },
      fail(res) {
        console.log('connectSocket fail', res);
      },
    });
    set({ ws: st });
    // 监听 WebSocket 接受到服务器的消息事件
    st?.onMessage((res) => {
      const { event, data } = parseJson<WebSocketMessage>(res.data);
      console.log('onMessage', { event, data });
      if (event === WebSocketEvent.CHAT_BROADCAST) {
        handleChatBroadcast(data);
      }
      // 执行事件监听栈
      const handlers = eventHandlerMap.get(event);
      handlers?.forEach((handler) => {
        handler(data);
      });
    });
  },
  /**
   * 发送消息到服务端
   * @param event 事件类型，如维持心跳、加入对话、离开对话、发送对话消息等
   * @param data 消息内容
   */
  async send(event, data) {
    const { ws } = get();
    if (!ws) return;
    const msg = JSON.stringify({ event, data });
    ws.send({ data: msg });
  },
  /**
   * 给事件添加监听事件
   * @param event 事件类型
   * @param handler 回调函数
   */
  addListener(event, handler) {
    const listeners = eventHandlerMap.get(event) ?? new Set();
    const ins = {
      remove: () => {
        listeners.delete(handler);
      },
    };
    if (listeners.has(handler)) return ins;
    listeners?.add(handler);
    eventHandlerMap.set(event, listeners);
    return ins;
  },
  /**
   * 断开连接
   */
  disconnect(option) {
    const { ws } = get();
    if (!ws) return;
    ws.close(option);
  },
}));
