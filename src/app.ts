import Taro from '@tarojs/taro';
import { Component, PropsWithChildren } from 'react';

import { getOrderWechatOrderStatus } from '@/api';

import './assets/iconfont/iconfont.css';
import './app.scss';

class App extends Component<PropsWithChildren> {
  onLaunch() {
    Taro.cloud.init();
  }

  componentDidMount() {}

  componentDidShow(options) {
    const { appId, extraData } = options?.referrerInfo ?? {};
    // 微信确认收货的 appId 固定为 wx1183b055aeec94d1
    if (appId === 'wx1183b055aeec94d1') {
      const transactionId = extraData?.req_extradata?.transaction_id;
      if (transactionId) {
        getOrderWechatOrderStatus({ transactionId });
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
