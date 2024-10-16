import { COLOR_PRIMARY } from '@/constants/theme';

export default {
  pages: [
    'pages/security/index',
    // 登录
    'pages/user/login/index',
    'pages/user/login/other/index',
    'pages/user/login/bind/index',
    // 首页
    'pages/market/index/index',
    'pages/market/search/index',
    'pages/market/category/index',
    'pages/market/action/index',
    'pages/market/action/result/index',
    'pages/market/detail/index',
    // 求购
    'pages/purchase/index/index',
    'pages/purchase/action/index',
    'pages/purchase/action/result/index',
    'pages/purchase/detail/index',
    'pages/purchase/select/index',
    // 我的
    'pages/user/index/index',
    'pages/user/password/verification/index',
    'pages/user/password/code/index',
    'pages/user/password/setting/index',
    'pages/user/published/index',
    'pages/user/bought/index',
    'pages/user/sold/index',
    'pages/user/purchase/index',
    'pages/user/favorite/index',
  ],
  subpackages: [
    // 公共页
    {
      root: 'packageCommon',
      pages: ['pages/edit/index'],
    },
    {
      // 公司管理
      root: 'packageCompany',
      pages: [
        // 注册
        'pages/register/index',
        'pages/register/code/index',
        'pages/register/result/index',
        // 主页
        'pages/index/index',
        // 设置
        'pages/setting/index',
        // 上传营业执照
        'pages/setting/license/index',
        // 地址管理
        'pages/address/management/index',
        'pages/address/action/index',
        // 收款方式
        'pages/payment/management/index',
        'pages/payment/action/index',
        // 余额明细
        'pages/balance/index',
        // 提现
        'pages/withdraw/index/index',
        'pages/withdraw/result/index',
        'pages/withdraw/record/index',
        // 我的关注
        'pages/followee/index',
        // 我的粉丝
        'pages/fans/index',
        // 我的粉丝
        'pages/invitation/index',
        // 上新通知
        'pages/launch-notice/index',
      ],
    },
    {
      // 服装管理
      root: 'packageDress',
      pages: [
        'pages/management/index',
        'pages/action/index',
        'pages/detail/index',
        'pages/select/index',
      ],
    },
    {
      // 订单管理
      root: 'packageOrder',
      pages: [
        'pages/create/index',
        'pages/create/result/index',
        'pages/detail/index',
        'pages/deliver/index',
        'pages/return/index',
      ],
    },
    {
      // 平台相关业务
      root: 'packagePlatform',
      pages: [
        // 协议相关
        'pages/protocol/index',
        'pages/protocol/lease/index',
        'pages/protocol/privacy/index',
        'pages/protocol/software/index',
        // 关注公众号
        'pages/official-account/index',
        // 功能预约
        'pages/feature-reservation/index',
      ],
    },
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationStyle: 'custom',
  },
  tabBar: {
    selectedColor: COLOR_PRIMARY,
    color: '#959595',
    list: [
      {
        pagePath: 'pages/market/index/index',
        text: '首页',
        iconPath: 'assets/icons/tab_index.png',
        selectedIconPath: 'assets/icons/tab_index_active.png',
      },
      {
        pagePath: 'pages/purchase/index/index',
        text: '求购',
        iconPath: 'assets/icons/tab_purchase.png',
        selectedIconPath: 'assets/icons/tab_purchase_active.png',
      },
      {
        pagePath: 'pages/user/index/index',
        text: '我的',
        iconPath: 'assets/icons/tab_my.png',
        selectedIconPath: 'assets/icons/tab_my_active.png',
      },
    ],
  },
  lazyCodeLoading: 'requiredComponents',
};
