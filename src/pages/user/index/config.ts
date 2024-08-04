import type { IconItemProps } from './IconItem';

import IconCustomerManagement from '@/assets/icons/customer_management.png';
import IconDressManagement from '@/assets/icons/dress_management.png';
import IconEmployeeManagement from '@/assets/icons/employee_management.png';
import IconOrderManagement from '@/assets/icons/order_management.png';
import IconShopManagement from '@/assets/icons/shop_management.png';
import { RouterUtil } from '@/utils';

export const getShopConfig = ({
  companyId,
}: {
  companyId?: number;
}): IconItemProps[] => [
  {
    icon: IconDressManagement,
    name: '服饰管理',
    to: '/packageDress/pages/management/index',
  },
  { icon: IconOrderManagement, name: '订单管理', to: '', disabled: true },
  { icon: IconCustomerManagement, name: '客户管理', to: '', disabled: true },
  { icon: IconEmployeeManagement, name: '员工管理', to: '', disabled: true },
  {
    icon: IconShopManagement,
    name: '我的店铺',
    onClick() {
      if (!companyId) {
        RouterUtil.navigateTo('/pages/user/login/index');
        return;
      }
      RouterUtil.navigateTo('/packageCompany/pages/index/index', {
        id: companyId,
      });
    },
  },
];

export const marketConfig: IconItemProps[] = [
  { icon: 'PlaneFilled', name: '我发布的', to: '/pages/user/published/index' },
  { icon: 'BagFilled', name: '我的购买', to: '/pages/user/bought/index' },
  { icon: 'CurrencyFilled', name: '我卖出的', to: '/pages/user/sold/index' },
  { icon: 'TagFilled', name: '我求购的', to: '/pages/user/purchase/index' },
  { icon: 'LoveFilled', name: '我的收藏', to: '/pages/user/favorite/index' },
];

export const settingConfig: IconItemProps[] = [
  {
    icon: 'AddressFilled',
    name: '地址管理',
    to: '/packageCompany/pages/address/management/index',
  },
  {
    icon: 'PaymentFilled',
    name: '收款账户',
    to: '/packageCompany/pages/payment/management/index',
  },
  {
    icon: 'MessageFilled',
    name: '微信通知',
    to: '/packagePlatform/pages/official-account/index',
  },
  {
    icon: 'ProtocolFilled',
    name: '协议指南',
    to: '/packagePlatform/pages/protocol/index',
  },
  { icon: 'CustomerServiceFilled', name: '在线客服', openType: 'contact' },
  { icon: 'FeedbackFilled', name: '问题与建议', openType: 'feedback' },
];
