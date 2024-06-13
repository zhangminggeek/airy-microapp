import { Skeleton } from '@nutui/nutui-react-taro';
import Taro, { useDidShow } from '@tarojs/taro';

import { StorageKey } from '@/constants/storage';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { fetchUserInfo } = useUserStore((state) => state);

  useDidShow(async () => {
    const token = Taro.getStorageSync(StorageKey.TOKEN);
    // 如果 token 存在，获取当前登录用户信息
    if (token) {
      await fetchUserInfo();
    }

    RouterUtil.switchTab('/pages/home/index');
  });

  return <Skeleton title rows={10} animated />;
};

export default Page;
