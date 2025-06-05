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
    if (process.env.NODE_ENV === 'development') {
      const socketTask = await Taro.connectSocket({
        url: `ws://192.168.43.26/?token=${res.data}`,
        success(res) {
          console.log('connectSocket success', res);
        },
        fail(res) {
          console.log('connectSocket fail', res);
        },
      });
      set({ ws: socketTask });
      // 监听 WebSocket 接受到服务器的消息事件
      socketTask?.onMessage((res) => {
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
    } else {
      console.log('process.env.NODE_ENV', process.env.NODE_ENV);
      console.log(
        'env',
        process.env.NODE_ENV === 'release'
          ? 'release-3gumdndcdaf859e0'
          : 'prod-1gc7fdtuac9b3c9f',
      );
      // @ts-expect-error: 确定 wx 存在
      const { socketTask } = await wx.cloud.connectContainer({
        config: {
          env:
            process.env.NODE_ENV === 'release'
              ? 'release-3gumdndcdaf859e0'
              : 'prod-1gc7fdtuac9b3c9f',
        },
        service: 'airy-server',
        path: `/?token=${res.data}`,
        // success(res) {
        //   console.log('connectSocket success', res);
        //   const socketTask = res.socketTask;
        //   set({ ws: socketTask });
        //   // 监听 WebSocket 接受到服务器的消息事件
        //   socketTask?.onMessage((res) => {
        //     const { event, data } = parseJson<WebSocketMessage>(res.data);
        //     console.log('onMessage', { event, data });
        //     if (event === WebSocketEvent.CHAT_BROADCAST) {
        //       handleChatBroadcast(data);
        //     }
        //     // 执行事件监听栈
        //     const handlers = eventHandlerMap.get(event);
        //     handlers?.forEach((handler) => {
        //       handler(data);
        //     });
        //   });
        //   socketTask.onOpen((res) => {
        //     console.log('connectSocket【WEBSOCKET】链接成功', res);
        //   });
        //   socketTask.onClose((res) => {
        //     console.log('connectSocket【WEBSOCKET】链接关闭', res);
        //   });
        // },
        // fail(res) {
        //   console.log('connectSocket fail', res);
        // },
      });
      set({ ws: socketTask });
      socketTask?.onMessage((res) => {
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
      socketTask.onOpen((res) => {
        console.log('socketTask.onOpen', res);
      });
      socketTask.onClose((res) => {
        console.log('socketTask.onClose', res);
      });
      socketTask.onError((res) => {
        console.log('socketTask.onError', res);
      });
    }
  },
  /**
   * 发送消息到服务端
   * @param event 事件类型，如维持心跳、加入对话、离开对话、发送对话消息等
   * @param data 消息内容
   */
  async send(event, data) {
    const { ws } = get();
    console.log('models websocket send', ws);
    if (!ws || ws.readyState !== 1) return;
    const msg = JSON.stringify({ event, data });
    ws.send({
      data: msg,
      success(res) {
        console.log('models websocket send success', res);
      },
      fail(res) {
        console.log('models websocket send fail', res);
      },
    });
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
