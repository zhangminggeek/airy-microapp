import { Skeleton } from '@nutui/nutui-react-taro';
import Taro, { useRouter } from '@tarojs/taro';
import dayjs from 'dayjs';
import { useEffect } from 'react';

import { StorageKey } from '@/constants/storage';
import { useOrganizationStore, useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

/**
 * 业务逻辑：
 * 1. 冷启动（用户首次打开小程序，或清除本地缓存后打开小程序），此时没有 token，跳转到登录页
 * 2. 热启动（用户已登录，小程序已有 token），获取用户信息
 *  - 如果用户 token 还在有效期，跳转到空间页面
 *  - 如果用户 token 已失效，静默登录，重新获取用户信息，然后跳转到空间页面
 */
const Page = () => {
  const { params } = useRouter();

  const { fetchUserInfo } = useUserStore((state) => state);
  const { fetchOrganizationList } = useOrganizationStore((state) => state);

  useEffect(() => {
    init();
  }, []);

  // 初始化应用状态
  const init = async () => {
    const { target, userId, expried } = params ?? {};
    // 检查登录状态，如果没有 token，说明是新用户，或者是用户清除了本地缓存，跳转到登录页手动登录
    const token = Taro.getStorageSync(StorageKey.TOKEN);
    if (!token) {
      // 邀请新用户
      if (target === 'invitation') {
        RouterUtil.redirectTo('/pages/login/index', params);
        return;
      }
      // 正常登录
      RouterUtil.redirectTo('/pages/login/index');
      return;
    }
    // 如果 token 存在则获取用户信息，即使 token 失效，也做了静默登录逻辑，依然可以获取到用户信息
    const { id } = await fetchUserInfo();
    // 获取当前用户所在的组织列表
    await fetchOrganizationList();

    // 如果用户已存在，是邀请进入的，且邀请未过期，则跳转到邀请页面
    if (
      target === 'invitation' &&
      id !== Number(userId) &&
      dayjs().isBefore(dayjs(Number(expried)))
    ) {
      RouterUtil.redirectTo('/pages/organization/invitation/index', params);
      return;
    }
    RouterUtil.switchTab('/pages/room/index');
  };

  return <Skeleton title rows={10} animated />;
};

export default Page;
