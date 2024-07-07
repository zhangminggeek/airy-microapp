import { COLOR_PRIMARY } from '@/constants/theme';

export default {
  pages: [
    'pages/security/index',
    // 登录
    'pages/user/login/index',
    'pages/user/login/other/index',
    'pages/user/login/bind/index',
    // 注册
    'pages/user/register/index',
    'pages/user/register/code/index',
    'pages/user/register/result/index',
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
  ],
  subpackages: [
    {
      // 地址管理
      root: 'packageAddress',
      pages: ['pages/management/index', 'pages/action/index'],
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
      pages: ['pages/create/index', 'pages/create/result/index'],
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
