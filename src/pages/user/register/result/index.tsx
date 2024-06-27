import { Button } from '@nutui/nutui-react-taro';

import { Result } from '@/components';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  return (
    <BasicLayout transparent>
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
