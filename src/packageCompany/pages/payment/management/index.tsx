import { View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import { useMemo } from 'react';

import Empty from './Empty';
import styles from './index.module.scss';
import PaymentCard from './Payment';

import { deleteCompanyPaymentId, getCompanyPayment } from '@/api';
import IconUnionPay from '@/assets/icons/union_pay.png';
import { CompanyPaymentType } from '@/constants/company';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { Toast } from '@/utils';
import { PlatformAbility, PlatformAbilityWrapper } from '@/wrappers';

const Page = () => {
  useDidShow(() => {
    fetchPayment();
  });

  // 获取公司收款账户
  const { data, run: fetchPayment } = useRequest(getCompanyPayment, {
    manual: true,
  });

  // 获取公司收款账户
  const { run: deletePayment } = useRequest(deleteCompanyPaymentId, {
    manual: true,
    onSuccess() {
      Toast.success('移除成功');
      fetchPayment();
    },
  });

  const { renderDialog, open } = useDialog({
    id: 'delete-confirm',
    title: '是否删除当前收款账户',
    onConfirm(_, params) {
      const { id } = params;
      deletePayment({ id });
    },
  });

  const payments = useMemo(() => {
    return {
      union: data?.find((item) => item.type === CompanyPaymentType['银行卡']),
      alipay: data?.find((item) => item.type === CompanyPaymentType['支付宝']),
    };
  }, [data]);

  return (
    <BasicLayout title="收款账户" back>
      <PlatformAbilityWrapper name={PlatformAbility.PAYMENT_ACCOUNT}>
        <View>
          <View className={styles.item}>
            {payments.union ? (
              <PaymentCard
                icon={IconUnionPay}
                name={payments.union?.bankName}
                owner={payments.union?.owner}
                account={payments.union?.account}
                onRemove={() => {
                  open({ params: { id: `${payments.union?.id}` } });
                }}
              />
            ) : (
              <Empty
                text="添加银行卡"
                type={CompanyPaymentType['银行卡']}
              ></Empty>
            )}
          </View>
          <View className={styles.item}>
            {payments.alipay ? (
              <PaymentCard
                icon="AliPayFilled"
                color="#1677FF"
                name="支付宝"
                owner={payments.alipay?.owner}
                account={payments.alipay?.account}
                onRemove={() => {
                  open({ params: { id: `${payments.alipay?.id}` } });
                }}
              />
            ) : (
              <Empty
                text="添加支付宝"
                type={CompanyPaymentType['支付宝']}
              ></Empty>
            )}
          </View>
        </View>
        <View className={styles.tip}>仅允许添加两个收款账户</View>
      </PlatformAbilityWrapper>
      {renderDialog()}
    </BasicLayout>
  );
};

export default Page;
