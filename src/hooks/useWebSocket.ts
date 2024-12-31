import Taro from '@tarojs/taro';

import { useInterval } from './useInterval';

import type { SocketTask } from '@tarojs/taro';

import { useChatStore } from '@/models';

export interface WebSocketMessage<T = any> {
  event: string;
  data: T;
}

export enum WebSocketEvent {
  KEEP_ALIVE = 'keep_alive',
  JOIN_CHAT = 'join_chat',
  CHAT_MESSAGE = 'chat_message',
  CHAT_BROADCAST = 'chat_broadcast',
  LEAVE_CHAT = 'leave_chat',
}

export const useWebSocket = () => {
  const { ws, setWebSocket, sendMessage } = useChatStore((state) => state);

  // 保持心跳
  const { start: startKeepAlive, clear: clearKeepAliveInterval } = useInterval({
    fn: () => {
      sendMessage(WebSocketEvent.KEEP_ALIVE, 'ping');
    },
    interval: 3 * 60 * 1000,
    immediate: false,
    precondition: false,
  });

  // 连接 ws
  const connect = async ({ token }: { token?: string } = {} as any) => {
    // 不进行重复连接
    if (ws) return;
    const st = await Taro.connectSocket({
      url: 'ws://192.168.43.26:9000',
      header: { token },
      success(res) {
        console.log('connectSocket success', res);
      },
      fail(res) {
        console.log('connectSocket fail', res);
      },
    });
    setWebSocket(st);
    // 监听 WebSocket 连接打开事件
    st?.onOpen((res) => {
      console.log('onOpen', res);
      startKeepAlive();
    });
    // 监听 WebSocket 接受到服务器的消息事件
    st?.onMessage((res) => {
      console.log('onMessage', res);
    });
    // 监听 WebSocket 通道关闭事件
    st?.onClose((res) => {
      console.log('onClose', res);
      setWebSocket(undefined);
      clearKeepAliveInterval();
    });
    // 监听 WebSocket 错误事件
    st?.onError((res) => {
      console.log('onError', res);
      setWebSocket(undefined);
      clearKeepAliveInterval();
    });
  };

  // 断开连接
  const disconnect = (options: SocketTask.CloseOption) => {
    if (!ws) return;
    ws.close(options);
  };

  return {
    ws,
    connect,
    send: sendMessage,
    disconnect,
  };
};
