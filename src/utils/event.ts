import { Events } from '@tarojs/taro';
import { useEffect, useState } from 'react';

const globalEvent = new Events();

// 通知事件key
export enum EventsKey {
  LOGOUT = 'logout',
}

// 监听和关闭事件的hooks
export const useEvents = (
  key: EventsKey | string,
  listener: (info?: any) => void,
  isUse = true,
) => {
  // 监听事件实例;
  const [eventInstance, setEventInstance] = useState<any>();

  useEffect(() => {
    if (isUse) {
      const event = globalEvent.on(key, listener);
      setEventInstance(event);
    }
    return () => {
      eventInstance && globalEvent.off(key);
    };
  }, []);
};

// 通知方法
export const emit = (key: EventsKey | string, info?: any) => {
  globalEvent.trigger(key, info);
};
