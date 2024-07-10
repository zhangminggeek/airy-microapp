import { View } from '@tarojs/components';

import { Result } from '@/components';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  return (
    <BasicLayout back>
      <Result
        status="success"
        title="提交成功"
        desc={
          <View style={{ textAlign: 'center' }}>
            <View>工作人员将会在工作日的 09:00-18:00</View>
            <View>处理您的提现申请</View>
          </View>
        }
        okText="返回主页"
        onOk={() => {
          RouterUtil.switchTab('/pages/user/index/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
