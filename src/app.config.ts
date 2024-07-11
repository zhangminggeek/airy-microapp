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
    'pages/market/action/index',
    'pages/market/action/result/index',
    'pages/market/detail/index',
    // 求购
    'pages/requirement/index',
    // 我的
    'pages/user/index/index',
    'pages/user/published/index',
    'pages/user/bought/index',
    'pages/user/sold/index',
    'pages/user/favorite/index',
    // 公共页
    'pages/common/edit/index',
  ],
  subpackages: [
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
        // 地址管理
        'pages/address/management/index',
        'pages/address/action/index',
        // 收款方式
        'pages/payment/management/index',
        'pages/payment/action/index',
        // 提现
        'pages/withdraw/index/index',
        'pages/withdraw/result/index',
        'pages/withdraw/record/index',
        // 我的关注
        'pages/followee/index',
        // 我的粉丝
        'pages/fans/index',
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
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationStyle: 'custom',
  },
  tabBar: {
    selectedColor: COLOR_PRIMARY,
    list: [
      {
        pagePath: 'pages/market/index/index',
        text: '首页',
        iconPath: 'assets/icons/my_favorite.png',
        selectedIconPath: 'assets/icons/my_favorite.png',
      },
      {
        pagePath: 'pages/requirement/index',
        text: '求购',
        iconPath: 'assets/icons/my_favorite.png',
        selectedIconPath: 'assets/icons/my_favorite.png',
      },
      {
        pagePath: 'pages/user/index/index',
        text: '我的',
        iconPath: 'assets/icons/my_favorite.png',
        selectedIconPath: 'assets/icons/my_favorite.png',
      },
    ],
  },
};
