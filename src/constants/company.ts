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
