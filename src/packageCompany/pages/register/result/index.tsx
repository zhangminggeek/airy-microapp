import { Result } from '@/components';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  return (
    <BasicLayout transparent>
      <Result
        title="注册成功"
        desc="账号会在几分钟内审核，请留意短信通知"
        status="success"
        okText="立即登录"
        onOk={() => {
          RouterUtil.navigateTo('/pages/user/login/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
