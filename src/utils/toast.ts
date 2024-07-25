import Taro from '@tarojs/taro';

const DEFAULT_TOAST_TIME = 3000;

// 文档
// showToast： http://taro-docs.jd.com/taro/docs/apis/ui/interaction/showToast/
// showModal: http://taro-docs.jd.com/taro/docs/apis/ui/interaction/showModal/

export class Toast {
  static info(
    msg: string,
    option?: Omit<Taro.showToast.Option, 'title' | 'icon'>,
  ) {
    const { duration = DEFAULT_TOAST_TIME, ...rest } = option || {};
    Taro.showToast({
      icon: 'none',
      title: msg,
      duration,
      ...rest,
    });
  }

  static success(
    msg: string,
    option?: Omit<Taro.showToast.Option, 'title' | 'icon'>,
  ) {
    const { duration = DEFAULT_TOAST_TIME, ...rest } = option || {};
    Taro.showToast({
      title: msg,
      icon: 'success',
      duration,
      ...rest,
    });
  }

  static alert({
    title = '提示',
    showCancel,
    success,
    fail,
    ...rest
  }: Taro.showModal.Option) {
    Taro.showModal({
      title,
      showCancel: false,
      success: (res) => {
        if (res.confirm) {
          success?.(res);
        }
      },
      ...rest,
    });
  }

  static confirm({
    confirmText = '确定',
    cancelText = '取消',
    success,
    fail,
    showCancel,
    confirmColor = '#f76793',
    ...rest
  }: Taro.showModal.Option) {
    Taro.showModal({
      confirmText,
      cancelText,
      showCancel: true,
      confirmColor,
      success: (res) => {
        if (res.confirm) {
          success?.(res);
        } else if (res.cancel) {
          fail?.(res);
        }
      },
      ...rest,
    });
  }
}
