import * as EventUtil from './event';

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
