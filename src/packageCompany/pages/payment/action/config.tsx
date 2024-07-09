import { CompanyPaymentType } from '@/constants/company';

export const fields = new Map([
  [
    CompanyPaymentType['银行卡'],
    [
      { name: 'owner', label: '持卡人', type: 'text' },
      { name: 'account', label: '卡号', type: 'input', required: true },
      { name: 'bankName', label: '银行名称', type: 'input', required: true },
      {
        name: 'phone',
        label: '手机号',
        type: 'input',
        required: true,
        rules: [{ pattern: /1\d{10}/, message: '请输入正确的手机号' }],
      },
    ],
  ],
  [
    CompanyPaymentType['支付宝'],
    [
      { name: 'owner', label: '姓名', type: 'text' },
      { name: 'account', label: '账号', type: 'input', required: true },
    ],
  ],
]);
