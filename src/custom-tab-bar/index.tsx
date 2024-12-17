import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import type { TabBarActiveKey } from '@/models/global';

import IconTabBtn from '@/assets/icons/tab_btn.png';
import IconTabIndex from '@/assets/icons/tab_index.png';
import IconTabIndexActive from '@/assets/icons/tab_index_active.png';
import IconTabMessage from '@/assets/icons/tab_message.png';
import IconTabMessageActive from '@/assets/icons/tab_message_active.png';
import IconTabMy from '@/assets/icons/tab_my.png';
import IconTabMyActive from '@/assets/icons/tab_my_active.png';
import IconTabPurchase from '@/assets/icons/tab_purchase.png';
import IconTabPurchaseActive from '@/assets/icons/tab_purchase_active.png';
import { ActionSheet } from '@/components';
import { ProductSource } from '@/constants/product';
import { useGlobalStore } from '@/models';
import { RouterUtil } from '@/utils';

import './index.scss';

interface Option {
  key: TabBarActiveKey;
  pagePath: string;
  text: string;
  iconPath: string;
  selectedIconPath: string;
}

const options: Option[] = [
  {
    key: 'index',
    pagePath: '/pages/market/index/index',
    text: '首页',
    iconPath: IconTabIndex,
    selectedIconPath: IconTabIndexActive,
  },
  {
    key: 'purchase',
    pagePath: '/pages/purchase/index/index',
    text: '求购',
    iconPath: IconTabPurchase,
    selectedIconPath: IconTabPurchaseActive,
  },
  {
    key: 'message',
    pagePath: '/pages/message/index/index',
    text: '消息',
    iconPath: IconTabMessage,
    selectedIconPath: IconTabMessageActive,
  },
  {
    key: 'my',
    pagePath: '/pages/user/index/index',
    text: '我的',
    iconPath: IconTabMy,
    selectedIconPath: IconTabMyActive,
  },
];

const PREFIX_CLS = 'm-custom-tab-bar';

const CustomTabBar = () => {
  const { tabBarActiveKey } = useGlobalStore();

  return (
    <View className={PREFIX_CLS}>
      {options.map((item) => {
        const { key, pagePath, text, iconPath, selectedIconPath } = item;
        const active = key === tabBarActiveKey;
        return (
          <View
            key={key}
            className={classnames(`${PREFIX_CLS}-item`, {
              [`${PREFIX_CLS}-item-active`]: active,
            })}
            onClick={() => {
              RouterUtil.switchTab(pagePath);
            }}
          >
            <Image
              className={`${PREFIX_CLS}-item-icon`}
              src={active ? selectedIconPath : iconPath}
              width={24}
              height={24}
            />
            <View className={`${PREFIX_CLS}-item-text`}>{text}</View>
          </View>
        );
      })}
      <ActionSheet
        options={[
          { name: '从服装管理中选择', key: ProductSource['服装管理'] },
          { name: '从相册中选择', key: ProductSource['相册'] },
        ]}
        withTabBar
        onSelect={(option) => {
          RouterUtil.navigateTo('/pages/market/action/index', {
            source: option.key,
          });
        }}
      >
        <View className={`${PREFIX_CLS}-btn-wrapper`}>
          <View className={`${PREFIX_CLS}-btn`}>
            <Image
              className={`${PREFIX_CLS}-btn-icon`}
              src={IconTabBtn}
              width={28}
              height={28}
            />
            <View className={`${PREFIX_CLS}-btn-text`}>卖闲置</View>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

export default CustomTabBar;
