export default {
  pages: [
    'pages/security/index',
    'pages/login/index',
    'pages/room/index',
    'pages/room/space/index',
    'pages/belongings/index',
    'pages/belongings/action/index',
    'pages/belongings/detail/index',
    'pages/user/index',
    'pages/user/profile/index',
    'pages/user/feedback/index',
    'pages/organization/index',
    'pages/organization/invitation/index',
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    selectedColor: '#003C43',
    list: [
      {
        pagePath: 'pages/room/index',
        text: '房间',
        iconPath: 'assets/icon_room.png',
        selectedIconPath: 'assets/icon_room_selected.png',
      },
      {
        pagePath: 'pages/belongings/index',
        text: '物品',
        iconPath: 'assets/icon_belongings.png',
        selectedIconPath: 'assets/icon_belongings_selected.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'assets/icon_user.png',
        selectedIconPath: 'assets/icon_user_selected.png',
      },
    ],
  },
};
