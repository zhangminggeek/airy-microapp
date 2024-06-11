import { Skeleton } from '@nutui/nutui-react-taro';
import Taro, { useDidShow } from '@tarojs/taro';

import { StorageKey } from '@/constants/storage';
import { useUserStore } from '@/models';
import { useProductStore } from '@/models/product';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { fetchUserInfo } = useUserStore((state) => state);
  const { fetchProductType } = useProductStore((state) => state);

  useDidShow(async () => {
    const token = Taro.getStorageSync(StorageKey.TOKEN);
    // 如果 token 存在，获取当前登录用户信息
    if (token) {
      await fetchUserInfo();
    }

    // 获取产品类型
    await fetchProductType();

    RouterUtil.switchTab('/pages/home/index');
  });

  return <Skeleton title rows={10} animated />;
};

export default Page;
