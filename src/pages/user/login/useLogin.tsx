import { useUserStore, useWebSocketStore } from '@/models';
import { RouterUtil } from '@/utils';

const useLogin = () => {
  const { fetchUserInfo } = useUserStore((state) => state);
  const { connect } = useWebSocketStore((state) => state);

  // 处理登录成功后的逻辑
  const handleLoginSuccess = async () => {
    await fetchUserInfo();
    // 建立 ws 连接
    connect();
    RouterUtil.switchTab('/pages/market/index/index');
  };

  // 绑定微信 openid 成功后的逻辑
  const handleLoginBindSuccess = async () => {
    await fetchUserInfo();
    RouterUtil.switchTab('/pages/market/index/index');
  };

  return {
    handleLoginSuccess,
    handleLoginBindSuccess,
  };
};

export default useLogin;
