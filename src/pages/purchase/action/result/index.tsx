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
        okText="返回"
        onOk={() => {
          RouterUtil.navigateTo('/pages/user/purchase/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
