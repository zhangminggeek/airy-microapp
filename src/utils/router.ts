import Taro from '@tarojs/taro';
import qs from 'qs';

import { StorageKey } from '@/constants/storage';

type ParamsType = {
  [key: string]: any;
};

export class RouterUtil {
  private static notReuiredTokenPageList = [
    '/pages/security/index',
    '/pages/user/login/index',
    '/pages/user/login/other/index',
    '/packageCompany/pages/index/index',
    '/packageCompany/pages/register/index',
    '/packageCompany/pages/register/code/index',
    '/packageCompany/pages/register/result/index',
    '/pages/market/index/index',
    '/pages/market/search/index',
    '/pages/market/category/index',
    '/pages/market/detail/index',
    '/pages/purchase/index/index',
    '/pages/purchase/detail/index',
    '/pages/user/index/index',
  ];

  /**
   * 校验路由是否需要鉴权
   * @param path 路由地址
   */
  private static checkToken(path: string) {
    if (this.notReuiredTokenPageList.includes(path)) {
      return;
    }
    const token = Taro.getStorageSync(StorageKey.TOKEN);
    if (!token) {
      Taro.navigateTo({ url: '/pages/user/login/index' });
    }
  }

  /**
   * 格式化 url
   * @param params 路由参数
   * @returns 格式化后的参数
   * @example
   * ```ts
   * formatParams({ id: 1, text: 'text' })
   * // '?id=1&text=text'
   * ```
   */
  private static formatUrl(target: string, params: ParamsType = {}): string {
    const paramsString = qs.stringify(params);
    return `${target}${paramsString ? `?${paramsString}` : ''}`;
  }

  /**
   * 路由跳转
   * @param target 目标路由地址
   * @param params 路由参数
   */
  static navigateTo(target: string, params: ParamsType = {}) {
    this.checkToken(target);
    const url = this.formatUrl(target, params);
    Taro.navigateTo({ url });
  }

  /**
   * 路由重定向
   * @param target 目标路由地址
   * @param params 路由参数
   */
  static redirectTo(target: string, params: ParamsType = {}) {
    this.checkToken(target);
    const url = this.formatUrl(target, params);
    Taro.redirectTo({ url });
  }

  /**
   * 返回
   * @param delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
   */
  static navigateBack(delta = 1) {
    Taro.navigateBack({ delta });
  }

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * @param target 目标路由地址
   * @param params 路由参数
   */
  static switchTab(target: string, params: ParamsType = {}) {
    this.checkToken(target);
    const url = this.formatUrl(target, params);
    Taro.switchTab({ url });
  }

  /**
   * 关闭所有页面，打开到应用内的某个页面
   * @param target 目标路由地址
   * @param params 路由参数
   */
  static reLaunch(target: string, params: ParamsType = {}) {
    this.checkToken(target);
    const url = this.formatUrl(target, params);
    Taro.reLaunch({ url });
  }

  /**
   * 关闭所有页面并跳转
   * @param target 目标路由地址
   * @param params 路由参
   */
  static closeAllTo(target: string, params: ParamsType = {}) {
    try {
      this.reLaunch(target, params);
    } catch (e) {
      try {
        this.switchTab(target, params);
      } catch (error) {
        console.log('error', error);
      }
    }
  }
}
