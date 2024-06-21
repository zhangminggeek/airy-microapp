import Taro from '@tarojs/taro';
import { Component, PropsWithChildren } from 'react';

import './assets/iconfont/iconfont.css';
import './app.scss';

class App extends Component<PropsWithChildren> {
  onLaunch() {
    if (process.env.NODE_ENV === 'production') {
      Taro.cloud.init();
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
