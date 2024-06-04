import Taro from '@tarojs/taro';
import qs from 'qs';

type ParamsType = {
  [key: string]: any;
};

export class RouterUtil {
  /**
   * 路由跳转
   * @param target 目标路由地址
   * @param params 路由参数
   */
  static navigateTo(target: string, params: ParamsType = {}) {
    const url = this.formatUrl(target, params);
    Taro.navigateTo({ url });
  }

  /**
   * 路由重定向
   * @param target 目标路由地址
   * @param params 路由参数
   */
  static redirectTo(target: string, params: ParamsType = {}) {
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
    const url = this.formatUrl(target, params);
    Taro.switchTab({ url });
  }

  /**
   * 关闭所有页面，打开到应用内的某个页面
   * @param target 目标路由地址
   * @param params 路由参数
   */
  static reLaunch(target: string, params: ParamsType = {}) {
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
}