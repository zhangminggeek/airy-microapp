import { Button } from '@nutui/nutui-react-taro';

import { Result } from '@/components';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  return (
    <BasicLayout back>
      <Result
        title="发布成功"
        desc="正在等待审核，审核需要几分钟"
        status="success"
        extra={
          <Button
            type="primary"
            size="large"
            block
            onClick={() => {
              RouterUtil.switchTab('/pages/market/index/index');
            }}
          >
            返回
          </Button>
        }
      />
    </BasicLayout>
  );
};

export default Page;
