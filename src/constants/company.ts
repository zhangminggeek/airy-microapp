// 公司收款账户
export enum CompanyPaymentType {
  '银行卡' = 1,
  '支付宝' = 2,
  '微信' = 3,
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
  [
    CompanyPaymentType['微信'],
    { text: '微信', value: CompanyPaymentType['微信'] },
  ],
]);

export enum CompanyPaymentStatus {
  '审核中' = 1,
  '待转账' = 2,
  '已完成' = 3,
  '已拒绝' = 4,
  '已取消' = 5,
}

export const companyPaymentStatusMap = new Map([
  [
    CompanyPaymentStatus['审核中'],
    { text: '审核中', value: CompanyPaymentStatus['审核中'] },
  ],
  [
    CompanyPaymentStatus['待转账'],
    { text: '待转账', value: CompanyPaymentStatus['待转账'] },
  ],
  [
    CompanyPaymentStatus['已完成'],
    { text: '已完成', value: CompanyPaymentStatus['已完成'] },
  ],
  [
    CompanyPaymentStatus['已拒绝'],
    { text: '已拒绝', value: CompanyPaymentStatus['已拒绝'] },
  ],
  [
    CompanyPaymentStatus['已取消'],
    { text: '已取消', value: CompanyPaymentStatus['已取消'] },
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

// 流水类型
export enum BalanceRecordType {
  '服装出售' = 1,
  '服装借出' = 2,
  '服装购买' = 3,
  '服装借入' = 4,
  '押金' = 5,
  '押金退还' = 6,
  '提现' = 7,
}

export const balanceRecordTypeMap = new Map([
  [
    BalanceRecordType['服装出售'],
    { text: '服装出售', value: BalanceRecordType['服装出售'] },
  ],
  [
    BalanceRecordType['服装借出'],
    { text: '服装借出', value: BalanceRecordType['服装借出'] },
  ],
  [
    BalanceRecordType['服装购买'],
    { text: '服装购买', value: BalanceRecordType['服装购买'] },
  ],
  [
    BalanceRecordType['服装借入'],
    { text: '服装借入', value: BalanceRecordType['服装借入'] },
  ],
  [
    BalanceRecordType['押金'],
    { text: '押金', value: BalanceRecordType['押金'] },
  ],
  [
    BalanceRecordType['押金退还'],
    { text: '押金退还', value: BalanceRecordType['押金退还'] },
  ],
  [
    BalanceRecordType['提现'],
    { text: '提现', value: BalanceRecordType['提现'] },
  ],
]);
