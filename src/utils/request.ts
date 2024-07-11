import Taro from '@tarojs/taro';
import { Method, type RequestFunctionParams } from 'yapi-to-typescript';

import type { BaseResponse } from '@/interfaces/base';

import { StorageKey } from '@/constants/storage';
import { RouterUtil, Toast } from '@/utils';

export const DEFAULT_TIP_MESSAGE = '请求失败，请刷新重试';

/**
 * 错误处理
 */
export function handleError(data: BaseResponse) {
  const message = data.message || DEFAULT_TIP_MESSAGE;
  Taro.showToast({
    title: message,
    mask: true,
    icon: 'none',
  });
}

// 格式化路径
function formatPath(path: string, method: Method) {
  // GET 请求添加时间戳，防止缓存
  if (method === Method.GET) {
    const t = new Date().getTime();
    return path.includes('?') ? `${path}&t=${t}` : `${path}?t=${t}`;
  }
  return path;
}

// 不处理错误的接口列表
const NOT_DEAL_ERROR_URLS = ['GET /user/self'];

const request = <ResponseData>(payload: RequestFunctionParams) => {
  const { method, path, data, ...rest } = payload;
  const url = `${process.env.BASE_URL || ''}${formatPath(path, method)}`;
  console.log('request', url, payload);
  return new Promise<BaseResponse<ResponseData>>((resolve, reject) => {
    Taro.request({
      timeout: 5000,
      mode: 'cors',
      method,
      url,
      data,
      header: {
        'content-type': 'application/json', // 默认值
        token: Taro.getStorageSync(StorageKey.TOKEN),
      },
      async success(res) {
        console.log('request success', res);
        const { success, code, message = DEFAULT_TIP_MESSAGE } = res.data;
        if (!success) {
          // 登录失效时静默登录，登录成功后重新发起请求
          if (['2001'].includes(code)) {
            RouterUtil.navigateTo('/pages/user/login/index');
            return;
          }
          if (
            !NOT_DEAL_ERROR_URLS.includes(`${method.toUpperCase()} ${path}`)
          ) {
            Toast.info(message, { mask: true });
            reject();
          }
        }
        resolve(res.data);
      },
      fail(err) {
        // for debug
        console.log('request err', err);
        Toast.info(DEFAULT_TIP_MESSAGE, { mask: true });
        reject(err);
      },
      ...rest,
    });
  });
};

const requestForCloud = <ResponseData>(payload: RequestFunctionParams) => {
  const { method, path, data, ...rest } = payload;
  const url = `${process.env.BASE_URL || ''}${formatPath(path, method)}`;
  console.log('request', url, payload);
  return new Promise<BaseResponse<ResponseData>>((resolve, reject) => {
    Taro.cloud.callContainer({
      // @ts-expect-error: 确定此参数存在
      config: {
        env: 'prod-7g0n4iff7a46e860',
      },
      timeout: 5000,
      method,
      path: url,
      data,
      header: {
        'X-WX-SERVICE': 'prod',
        'content-type': 'application/json', // 默认值
        token: Taro.getStorageSync(StorageKey.TOKEN),
      },
      async success(res: any) {
        console.log('request success', res);
        const { success, code, message = DEFAULT_TIP_MESSAGE } = res.data;
        if (!success) {
          // 登录失效时静默登录，登录成功后重新发起请求
          if (['2001'].includes(code)) {
            // await WeChatUtil.loginForWeChat();
            // await request(payload);
            // return;
          }
          if (
            !NOT_DEAL_ERROR_URLS.includes(`${method.toUpperCase()} ${path}`)
          ) {
            Toast.info(message, { mask: true });
            reject();
          }
        }
        resolve(res.data);
      },
      fail(err) {
        // for debug
        console.log('request err', err);
        Toast.info(DEFAULT_TIP_MESSAGE, { mask: true });
        reject(err);
      },
      ...rest,
    });
  });
};

const _request =
  process.env.NODE_ENV === 'production' ? requestForCloud : request;

export default _request;
