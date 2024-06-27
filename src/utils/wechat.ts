import Taro from '@tarojs/taro';

import { Toast } from './toast';

import { postAccountBindOpenid, postAccountLoginWechat } from '@/api';
import { StorageKey } from '@/constants/storage';

export class WeChatUtil {
  /**
   * 微信登录
   * @params phone 手机号
   */
  static async loginForWeChat(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Taro.login({
        async success(res) {
          const { code } = res;
          if (code) {
            // 获取用户 openid
            const res = await postAccountLoginWechat({ code });
            if (!res.data) {
              Taro.setStorageSync(StorageKey.TOKEN, res.data);
              resolve(false);
            }
            resolve(true);
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

  /**
   * 绑定账号和openid
   * @param account 账号
   */
  static async bindOpenId(account: string) {
    return new Promise((resolve, reject) => {
      Taro.login({
        async success(res) {
          const { code } = res;
          if (code) {
            await postAccountBindOpenid({ account, code });
            resolve(undefined);
          } else {
            Toast.info('绑定微信失败, 请稍后重试');
            reject();
          }
        },
        fail() {
          Toast.info('绑定微信失败, 请稍后重试');
          reject();
        },
      });
    });
  }
}
