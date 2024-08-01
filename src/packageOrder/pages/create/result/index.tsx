import { useRouter } from '@tarojs/taro';
import { useMemo, useState } from 'react';

import { getOrderWechatPayTransaction } from '@/api';
import { Result } from '@/components';
import { useInterval, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const success = (
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
);

const waiting = <Result status="waiting" title="支付结果查询中，请稍候..." />;

const Page = () => {
  const { orderId } = useRouter().params;

  // 已支付
  const [paid, setPaid] = useState<boolean>(false);

  // 查询微信支付结果
  const { run } = useRequest(getOrderWechatPayTransaction, {
    manual: true,
    onSuccess(res) {
      if (res) {
        setPaid(true);
        clear();
      }
    },
    onError() {
      clear();
    },
  });

  const { clear } = useInterval({
    fn: () => {
      if (orderId) {
        run({ id: orderId });
      }
    },
    immediate: true,
    precondition: !!orderId,
  });

  const result = useMemo(() => {
    if (orderId) {
      return paid ? success : waiting;
    } else {
      return success;
    }
  }, [orderId, paid]);

  return <BasicLayout back>{result}</BasicLayout>;
};

export default Page;
