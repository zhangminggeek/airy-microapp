import Taro from '@tarojs/taro';

import { camSafeUrlEncode, mimeTypeMap } from './utils';

import type { PutFileProps } from './interfaces';

import { getCommonOssPolicy } from '@/api';
import { Toast } from '@/utils';

export const useUpload = () => {
  const putFile = ({
    host,
    filePath,
    key,
    AuthData,
  }: PutFileProps): Promise<string> => {
    const fs = Taro.getFileSystemManager();
    return new Promise((resolve, reject) => {
      const ext = (filePath.split('.').at(-1) ?? '').toLowerCase();
      fs.readFile({
        filePath,
        success(res) {
          Taro.request({
            url: host + '/' + key,
            method: 'PUT',
            header: {
              'Content-Type':
                mimeTypeMap.get(`.${ext}`) ?? 'application/octet-stream',
              Authorization: AuthData.authorization,
              'x-cos-security-token': AuthData.securityToken,
            },
            data: res.data,
            success() {
              const url =
                host + '/' + camSafeUrlEncode(key).replace(/%2F/g, '/');
              resolve(url);
            },
            fail() {
              Toast.info('上传失败，请重试');
              reject();
            },
          });
        },
        fail() {
          Toast.info('文件读取失败');
          reject();
        },
      });
    });
  };

  /**
   * 前端直传文件
   * @param filePath 文件上传临时路径
   * @returns 文件地址
   */
  const upload = async (filePath: string) => {
    const fileExt = filePath.split('.').at(-1) ?? '';
    // 传入文件后缀名，服务端生成带签名的 url
    const { data } = await getCommonOssPolicy({ ext: fileExt });
    // 请求用到的参数
    const host = 'https://' + data.cosHost; // 请求 url
    const key = data.cosKey; // 让服务端来决定文件名更安全
    const url = await putFile({ host, filePath, key, AuthData: data });
    return url;
  };

  return {
    upload,
  };
};
