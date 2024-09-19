import { Button, Checkbox, NoticeBar } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import Big from 'big.js';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';

import {
  getCompanyBalance,
  getCompanyPayment,
  postCompanyWithdraw,
} from '@/api';
import IconUnionPay from '@/assets/icons/union_pay.png';
import { Icon, InputNumber, Section, TagChecker } from '@/components';
import { CompanyPaymentType } from '@/constants/company';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { isValidNumber, RouterUtil, Toast } from '@/utils';
import { PlatformAbility, PlatformAbilityWrapper } from '@/wrappers';

const Page = () => {
  // 选中的提现方式
  const [method, setMethod] = useState<CompanyPaymentType>();
  // 自定义金额
  const [amount, setAmount] = useState<string>();

  useDidShow(() => {
    fetchCompany();
    fetchPayments();
  });

  // 获取公司余额
  const { data, run: fetchCompany } = useRequest(getCompanyBalance, {
    manual: true,
  });

  // 获取公司支付方式
  const { data: payments, run: fetchPayments } = useRequest(getCompanyPayment, {
    manual: true,
  });

  // 提现
  const { run: withdraw } = useRequest(postCompanyWithdraw, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateTo('/packageCompany/pages/withdraw/result/index');
    },
  });

  const options = useMemo(() => {
    const alipay = payments?.find(
      (item) => item.type === CompanyPaymentType['支付宝'],
    );
    const union = payments?.find(
      (item) => item.type === CompanyPaymentType['银行卡'],
    );
    return [
      {
        icon: <Icon name="AliPayFilled" color="#1677FF" size={24} />,
        name: '支付宝',
        account: alipay?.account,
        value: CompanyPaymentType['支付宝'],
      },
      {
        icon: <Icon name={IconUnionPay} size={24} />,
        name: union?.bankName ?? '银行卡',
        account: union?.account,
        value: CompanyPaymentType['银行卡'],
      },
    ];
  }, [payments]);

  return (
    <BasicLayout className={styles.container} title="提现" fill back>
      <PlatformAbilityWrapper name={PlatformAbility.WITHDRAW}>
        <NoticeBar
          className={styles.notice}
          content="工作人员将会在工作日的 09:00-18:00 处理您的提现申请"
          leftIcon={null}
          align="center"
        />
        <View className={styles.content}>
          <Section className={styles.balance}>
            <View className={styles['balance-title']}>余额(元)</View>
            <View className={styles['balance-value']}>
              <View>{data?.balance}</View>
              {Big(data?.locked ?? '0').gt(0) ? (
                <View className={styles['balance-value-warning']}>
                  提现中:{data?.locked ?? 0}
                </View>
              ) : null}
            </View>
            <Button
              className={styles['balance-btn']}
              fill="none"
              size="small"
              rightIcon={<Icon name="RightOutlined" size={14} />}
              onClick={() => {
                RouterUtil.navigateTo(
                  '/packageCompany/pages/withdraw/record/index',
                );
              }}
            >
              提现记录
            </Button>
          </Section>
          <Section className={styles.method} title="提现方式">
            <View className={styles.option}>
              {options.map((option) => (
                <View
                  className={styles['option-item']}
                  key={option.value}
                  onClick={() => {
                    if (option.account) {
                      setMethod(option.value);
                    } else {
                      RouterUtil.navigateTo(
                        '/packageCompany/pages/payment/action/index',
                        { type: option.value },
                      );
                    }
                  }}
                >
                  {option.icon}
                  <View className={styles['option-item-content']}>
                    <View className={styles['option-item-content-name']}>
                      {option.name}
                    </View>
                    <View className={styles['option-item-content-account']}>
                      {option.account}
                    </View>
                  </View>
                  {option.account ? (
                    <Checkbox checked={option.value === method} />
                  ) : (
                    <Button
                      className={styles['option-item-btn']}
                      fill="none"
                      size="small"
                      rightIcon={<Icon name="RightOutlined" size={14} />}
                    >
                      去绑定
                    </Button>
                  )}
                </View>
              ))}
            </View>
          </Section>
          <Section className={styles.amount} title="常规提现">
            <TagChecker
              className={styles.checker}
              options={[
                { text: '1000.00元', value: '1000' },
                { text: '2000.00元', value: '2000' },
                { text: '5000.00元', value: '5000' },
              ]}
              value={amount ? [amount] : undefined}
              onChange={(value) => {
                if (value) {
                  setAmount(value[0]);
                }
              }}
            />
            <InputNumber
              className={styles.input}
              placeholder="请输入提现金额"
              allowDecimal={false}
              value={amount}
              onChange={(v) => {
                setAmount(v);
              }}
            />
          </Section>
          <Button
            className={styles.btn}
            type="primary"
            size="xlarge"
            block
            onClick={() => {
              if (!method) {
                Toast.info('请选择提现方式');
                return;
              }
              if (!amount) {
                Toast.info('请输入提现金额');
                return;
              }
              if (!isValidNumber(amount) || Big(amount ?? 0).lte(0)) {
                Toast.info('提现金额必须为正整数');
                return;
              }
              if (
                Big(data?.balance ?? '0')
                  .minus(data?.locked ?? '0')
                  .lt(amount ?? 0)
              ) {
                Toast.info('提现金额不能大于余额');
                return;
              }
              withdraw({ type: method, amount });
            }}
          >
            立即提现
          </Button>
        </View>
      </PlatformAbilityWrapper>
    </BasicLayout>
  );
};

export default Page;
