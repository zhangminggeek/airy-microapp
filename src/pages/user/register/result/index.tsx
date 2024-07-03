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
        okText="确定"
        onOk={() => {
          RouterUtil.navigateTo('/pages/security/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
