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
