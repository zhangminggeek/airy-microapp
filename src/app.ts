import Taro from '@tarojs/taro';
import { Component, PropsWithChildren } from 'react';

import { DEFAULT_MAX_PAGE_SIZE, DEFAULT_PAGE_NUM } from './constants';

import { getOrderWechatOrderStatus } from '@/api';
import { StorageKey } from '@/constants/storage';
import {
  useChatStore,
  useGlobalStore,
  useUserStore,
  useWebSocketStore,
} from '@/models';
import { EventUtil } from '@/utils';

import './assets/iconfont/iconfont.css';
import './app.scss';

class App extends Component<PropsWithChildren> {
  onLaunch() {
    Taro.cloud.init();
  }

  componentDidMount() {}

  async componentDidShow(options) {
    const { fetchPlatformAbility, setShowBarrage } = useGlobalStore.getState();
    const { fetchUserInfo } = useUserStore.getState();
    const { fetchChatList } = useChatStore.getState();
    const { connect } = useWebSocketStore.getState();
    // 获取平台能力
    fetchPlatformAbility();
    // 打开弹幕
    setShowBarrage(true);

    const token = Taro.getStorageSync(StorageKey.TOKEN);
    if (token) {
      // 获取用户信息
      await fetchUserInfo();
      // 获取用户对话列表
      await fetchChatList({
        pageNum: `${DEFAULT_PAGE_NUM}`,
        pageSize: `${DEFAULT_MAX_PAGE_SIZE}`,
      });
      // 建立 ws 连接
      await connect();
    }

    const { appId, extraData } = options?.referrerInfo ?? {};
    // 微信确认收货的 appId 固定为 wx1183b055aeec94d1
    if (appId === 'wx1183b055aeec94d1') {
      const transactionId = extraData?.req_extradata?.transaction_id;
      if (transactionId) {
        getOrderWechatOrderStatus({ transactionId }).then(() => {
          EventUtil.emit(EventUtil.EventsKey.CONFIRM_RECEIPT);
        });
      }
    }
  }

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
