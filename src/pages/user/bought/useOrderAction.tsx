import { requestPayment } from '@tarojs/taro';
import Big from 'big.js';
import { Fragment, useState } from 'react';

import CustomerServicePopup from './CustomerServicePopup';

import type { GetOrderIdResponse } from '@/api';

import {
  postOrderCancel,
  postOrderPayBalance,
  postOrderPayWechat,
  postOrderReceiveBuyer,
} from '@/api';
import { PaymentPicker } from '@/components';
import { PaymentType } from '@/constants/company';
import { OrderType } from '@/constants/order';
import { useDialog, useRequest } from '@/hooks';
import { RouterUtil, Toast } from '@/utils';

interface UserOrderActionProps {
  order?: Pick<GetOrderIdResponse, 'id' | 'type' | 'market'>;
  refresh?: () => void;
}

const useOrderAction = ({ order, refresh }: UserOrderActionProps) => {
  // 是否显示客服 popup
  const [showCustomerServicePopup, setShowCustomerServicePopup] =
    useState<boolean>(false);
  // 是否显示支付方式 popup
  const [showPaymentPicker, setShowPaymentPicker] = useState<boolean>(false);

  // 修改订单状态
  const { run: cancel } = useRequest(postOrderCancel, {
    manual: true,
    onSuccess() {
      Toast.success('操作成功');
      refresh?.();
    },
  });

  // 买家确认收货
  const { run: receive } = useRequest(postOrderReceiveBuyer, {
    manual: true,
    onSuccess() {
      Toast.success('收货成功');
      refresh?.();
    },
  });

  // 微信支付订单
  const { run: payOrderViaBalance } = useRequest(postOrderPayBalance, {
    manual: true,
    onSuccess(_, params) {
      RouterUtil.navigateTo('/packageOrder/pages/create/result/index', {
        orderId: params?.id,
      });
    },
  });

  // 微信支付订单
  const { run: payOrderViaWechat } = useRequest(postOrderPayWechat, {
    manual: true,
    onSuccess(data) {
      const { timestamp, nonceStr, pkg, paySign } = data;
      requestPayment({
        timeStamp: timestamp.toString(),
        nonceStr,
        package: pkg,
        signType: 'RSA',
        paySign,
        success() {
          Toast.success('支付成功');
          refresh?.();
        },
        fail(err) {
          console.log(err);
        },
      });
    },
  });

  // 取消订单二次确认
  const { renderDialog: renderDialogCancel, open: openDialogCancel } =
    useDialog({
      id: 'dialog-cancel',
      content: '确定取消该订单吗？',
      onConfirm: (_, params) => {
        cancel({ id: params.id });
      },
    });

  // 确认收货二次确认
  const {
    renderDialog: renderDialogConfirmReceive,
    open: openDialogConfirmReceive,
  } = useDialog({
    id: 'dialog-confirm-receive',
    content: '确认收到货了吗？',
    onConfirm: (_, params) => {
      receive({ id: params.id });
    },
  });

  const renderPopup = () => {
    return (
      <Fragment>
        <CustomerServicePopup
          visible={showCustomerServicePopup}
          onClose={() => {
            setShowCustomerServicePopup(false);
          }}
        />

        <PaymentPicker
          visible={showPaymentPicker}
          amount={
            order?.type === OrderType['出售']
              ? order?.market?.sellingPrice
              : Big(order?.market?.leasePrice ?? 0)
                  .plus(order?.market?.leaseDeposit ?? 0)
                  .toString()
          }
          onConfirm={async (v) => {
            setShowPaymentPicker(false);
            if (!order) return;
            if (v === PaymentType['余额']) {
              payOrderViaBalance({ id: order.id });
            } else if (v === PaymentType['微信支付']) {
              payOrderViaWechat({ id: order.id });
            }
          }}
          onClose={() => {
            setShowPaymentPicker(false);
          }}
        />
        {renderDialogCancel()}
        {renderDialogConfirmReceive()}
      </Fragment>
    );
  };

  return {
    renderPopup,
    setShowCustomerServicePopup,
    setShowPaymentPicker,
    openDialogConfirmReceive,
    openDialogCancel,
  };
};

export default useOrderAction;
