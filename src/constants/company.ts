// 公司收款账户
export enum CompanyPaymentType {
  '银行卡' = 1,
  '支付宝' = 2,
}

export const companyPaymentTypeMap = new Map([
  [
    CompanyPaymentType['银行卡'],
    { text: '银行卡', value: CompanyPaymentType['银行卡'] },
  ],
  [
    CompanyPaymentType['支付宝'],
    { text: '支付宝', value: CompanyPaymentType['支付宝'] },
  ],
]);

// 支付方式
export enum PaymentType {
  '余额' = 1,
  '微信支付' = 2,
}

export const paymentTypeMap = new Map([
  [PaymentType['余额'], { text: '余额', value: PaymentType['余额'] }],
  [
    PaymentType['微信支付'],
    { text: '微信支付', value: PaymentType['微信支付'] },
  ],
]);
