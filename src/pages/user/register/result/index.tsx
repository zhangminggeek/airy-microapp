import { Button } from '@nutui/nutui-react-taro';
import Taro, { useDidShow } from '@tarojs/taro';

import { Result } from '@/components';
import { StorageKey } from '@/constants/storage';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  useDidShow(() => {
    // 清空之前的注册信息
    Taro.removeStorageSync(StorageKey.COMPANY_RESIGTER_INFO);
  });

  return (
    <BasicLayout>
      <Result
        title="注册成功"
        desc="请等待审核，审核需要1-3个工作日"
        status="success"
        extra={
          <Button
            type="primary"
            size="xlarge"
            block
            onClick={() => {
              RouterUtil.navigateTo('/pages/security/index');
            }}
          >
            确定
          </Button>
        }
      />
    </BasicLayout>
  );
};

export default Page;
