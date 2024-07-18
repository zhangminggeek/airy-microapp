import IconAddressManagement from '@/assets/icons/address_management.png';
import IconCustomerManagement from '@/assets/icons/customer_management.png';
import IconDressManagement from '@/assets/icons/dress_management.png';
import IconEmployeeManagement from '@/assets/icons/employee_management.png';
import IconFeedback from '@/assets/icons/feedback.png';
import IconMyBought from '@/assets/icons/my_bought.png';
import IconMyFavorite from '@/assets/icons/my_favorite.png';
import IconMyPurchase from '@/assets/icons/my_purchase.png';
import IconMyRelease from '@/assets/icons/my_release.png';
import IconMySold from '@/assets/icons/my_sold.png';
import IconOnlineCustomerService from '@/assets/icons/online_customer_service.png';
import IconOrderManagement from '@/assets/icons/order_management.png';
import IconProtocolGuide from '@/assets/icons/protocol_guide.png';
import IconReceivingAccount from '@/assets/icons/receiving_account.png';
import IconShopManagement from '@/assets/icons/shop_management.png';
import IconWeChatNotice from '@/assets/icons/wechat_notice.png';

export const shopConfig = [
  { icon: IconOrderManagement, name: '订单管理', to: '' },
  { icon: IconCustomerManagement, name: '客户管理', to: '' },
  {
    icon: IconDressManagement,
    name: '服饰管理',
    to: '/packageDress/pages/management/index',
  },
  { icon: IconEmployeeManagement, name: '员工管理', to: '' },
  { icon: IconShopManagement, name: '店铺信息', to: '' },
];

export const marketConfig = [
  { icon: IconMyRelease, name: '我发布的', to: '/pages/user/published/index' },
  { icon: IconMyBought, name: '我的购买', to: '/pages/user/bought/index' },
  { icon: IconMySold, name: '我卖出的', to: '/pages/user/sold/index' },
  { icon: IconMyPurchase, name: '我求购的', to: '/pages/user/purchase/index' },
  { icon: IconMyFavorite, name: '我的收藏', to: '/pages/user/favorite/index' },
];

export const settingConfig = [
  {
    icon: IconAddressManagement,
    name: '地址管理',
    to: '/packageCompany/pages/address/management/index',
  },
  {
    icon: IconReceivingAccount,
    name: '收款账户',
    to: '/packageCompany/pages/payment/management/index',
  },
  { icon: IconWeChatNotice, name: '微信通知', to: '' },
  { icon: IconProtocolGuide, name: '协议指南', to: '' },
  {
    icon: IconOnlineCustomerService,
    name: '在线客服',
    to: '',
  },
  {
    icon: IconFeedback,
    name: '问题与建议',
    to: '/packagePlatform/pages/feedback/index',
  },
];
