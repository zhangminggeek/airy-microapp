import Taro from '@tarojs/taro';

import { Toast } from './toast';

import { postAccountLoginWechat } from '@/api';
import { StorageKey } from '@/constants/storage';

export class WeChatUtil {
  /**
   * 微信登录
   * @returns 登录成功后的用户 token
   */
  static async loginForWeChat() {
    return new Promise((resolve, reject) => {
      Taro.login({
        async success(res) {
          const { code } = res;
          if (code) {
            // 发起网络请求
            const { data } = await postAccountLoginWechat({ code });
            Taro.setStorageSync(StorageKey.TOKEN, data);
            resolve(data);
            resolve(undefined);
          } else {
            Toast.info('微信登录失败, 请稍后重试');
            reject();
          }
        },
        fail() {
          Toast.info('微信登录失败, 请稍后重试');
          reject();
        },
      });
    });
  }
}
