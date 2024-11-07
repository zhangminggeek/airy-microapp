import Taro from '@tarojs/taro';
import { Component, PropsWithChildren } from 'react';

import { getOrderWechatOrderStatus } from '@/api';
import { StorageKey } from '@/constants/storage';
import { useGlobalStore, useUserStore } from '@/models';
import { EventUtil } from '@/utils';

import './assets/iconfont/iconfont.css';
import './app.scss';

class App extends Component<PropsWithChildren> {
  onLaunch() {
    Taro.cloud.init();
  }

  componentDidMount() {}

  componentDidShow(options) {
    // 获取平台能力
    useGlobalStore.getState().fetchPlatformAbility();

    // 获取用户信息
    const token = Taro.getStorageSync(StorageKey.TOKEN);
    if (token) {
      useUserStore.getState().fetchUserInfo();
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
