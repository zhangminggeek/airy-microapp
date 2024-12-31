import { useDidShow } from '@tarojs/taro';
import { Fragment } from 'react';

import type { FC, ReactNode } from 'react';

import { getGetewayWsSign } from '@/api';
import { useRequest, useWebSocket } from '@/hooks';
import { Toast } from '@/utils';

interface WebSocketWrapperProps {
  children?: ReactNode;
}

const WebSocketWrapper: FC<WebSocketWrapperProps> = ({ children }) => {
  const { ws, connect } = useWebSocket();

  useDidShow(() => {
    if (!ws) {
      run();
    }
  });

  // 获取 ws 连接凭证
  const { run } = useRequest(getGetewayWsSign, {
    manual: true,
    onSuccess(res) {
      // 获取凭证成功后进行 ws 连接
      connect({ token: res });
    },
    onError() {
      Toast.info('网络异常，请退出重试');
    },
  });

  return <Fragment>{children}</Fragment>;
};

export default WebSocketWrapper;
