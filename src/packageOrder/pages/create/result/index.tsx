import { Result } from '@/components';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  return (
    <BasicLayout back>
      <Result
        status="success"
        title="支付成功"
        desc="可以在“我的-我的购买”中查看"
        okText="查看订单"
        cancelText="继续逛逛"
        onOk={() => {
          RouterUtil.navigateTo('/pages/user/bought/index');
        }}
        onCancel={() => {
          RouterUtil.switchTab('/pages/market/index/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
