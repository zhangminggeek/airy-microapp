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
            if (res.data) {
              Taro.setStorageSync(StorageKey.TOKEN, res.data);
              resolve(true);
            } else {
              resolve(false);
            }
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

  /**
   * 生成支付签名
   * @param options 签名参数
   * @returns 签名
   */
  static async generatePaySign(options: {
    timeStamp: string;
    nonceStr: string;
    package: string;
  }) {
    options;
  }
}
