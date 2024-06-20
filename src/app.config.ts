import { COLOR_PRIMARY } from '@/constants/theme';

export default {
  pages: [
    'pages/security/index',
    // 登录
    'pages/user/login/index',
    'pages/user/login/other/index',
    // 注册
    'pages/user/register/index',
    'pages/user/register/code/index',
    'pages/user/register/result/index',
    // 首页
    'pages/market/index/index',
    'pages/market/action/index',
    'pages/market/action/result/index',
    // 求购
    'pages/requirement/index',
    // 我的
    'pages/user/index/index',
    'pages/user/published/index',
    // 服装管理
    'pages/dress/management/index',
    'pages/dress/action/index',
    'pages/dress/detail/index',
    'pages/dress/select/index',
  ],
  subpackages: [
    {
      root: 'packageAddress',
      pages: ['pages/management/index', 'pages/action/index'],
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
