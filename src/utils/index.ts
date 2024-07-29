import Big from 'big.js';
import CryptoJS from 'crypto-js';

import * as EventUtil from './event';

import { PROJECT_NAME } from '@/constants';

export { EventUtil };
export { RouterUtil } from './router';
export { Toast } from './toast';
export { WeChatUtil } from './wechat';

/**
 * 值是否无效
 * @param val 需要判断的值
 * @param allowEmptyString 是否允许空字符串
 * @returns 是否无效
 */
export const isNil = (val: any, allowEmptyString = true) => {
  if (val === undefined || val === null) {
    return true;
  }
  if (!allowEmptyString && val === '') {
    return true;
  }
  return false;
};

/**
 * 校验是否为有效数字
 * @param val 值
 * @returns 是否为有效数字
 */
export const isValidNumber = (val: any) => {
  try {
    new Big(val);
    return true;
  } catch (err) {
    return false;
  }
};

type ObjectType = { [key in string]: any };

/**
 * 移除对象中无效属性（null、undefined）
 * @public
 * @param obj - 原对象
 * @returns 移除无效属性后的对象
 */
export function removeNilKey(obj: ObjectType): ObjectType {
  if (!obj) {
    return {};
  }
  const newObj: { [key: string]: any } = {};
  Object.keys(obj).forEach((key) => {
    if (!isNil((obj as ObjectType)[key])) {
      newObj[key] = (obj as ObjectType)[key];
    }
  });
  return newObj;
}

/**
 * 加密
 * @param pwd 密码（明文）
 * @param salt 盐值
 * @returns 加密后的密码
 */
export const encode = (pwd: string, salt: string) => {
  const srcs = CryptoJS.enc.Utf8.parse(pwd);
  const key = CryptoJS.enc.Utf8.parse(salt);
  const iv = CryptoJS.enc.Utf8.parse(PROJECT_NAME.padEnd(16, '0'));
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString();
};

/**
 * 解密
 * @param encryptedPwd 加密后的密码
 * @param salt 盐值
 * @returns 解密后的密码（明文）
 */
export const decode = (encryptedPwd: string, salt: string) => {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedPwd);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const key = CryptoJS.enc.Utf8.parse(salt);
  const iv = CryptoJS.enc.Utf8.parse(PROJECT_NAME.padEnd(16, '0'));
  const decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};

/**
 * 解析 json 格式的字符串
 * @param data json 字符串
 * @param defaultData 解析失败的默认值
 * @returns json 对象
 */
export const parseJson = <T>(data?: string, defaultData: T = {} as any): T => {
  try {
    return data ? JSON.parse(data) : defaultData;
  } catch (err) {
    return defaultData;
  }
};

/**
 * 格式化价格显示
 * @param range 价格范围
 * @returns 价格文案
 */
export const formatPriceRange = (
  range?: [string | undefined, string | undefined],
) => {
  if (!range || !Array.isArray(range)) return '';
  if (range[0] && range[1]) {
    return range.join('-');
  } else if (range[0]) {
    return `${range[0]}以上`;
  } else if (range[1]) {
    return `${range[1]}以下`;
  } else {
    return '';
  }
};
