import { ProductType } from '@/constants/product';

export const productTypeOptions = [
  {
    label: '婚纱',
    value: ProductType['婚纱'],
    imageName: 'product_type_1.png',
  },
  {
    label: '礼服',
    value: ProductType['礼服'],
    imageName: 'product_type_2.png',
  },
  {
    label: '秀禾',
    value: ProductType['秀禾'],
    imageName: 'product_type_3.png',
  },
  {
    label: '西服',
    value: ProductType['西服'],
    imageName: 'product_type_4.png',
  },
  {
    label: '伴娘服',
    value: ProductType['伴娘服'],
    imageName: 'product_type_5.png',
  },
  {
    label: '鞋子',
    value: ProductType['鞋子'],
    imageName: 'product_type_6.png',
  },
  {
    label: '首饰',
    value: ProductType['首饰'],
    imageName: 'product_type_7.png',
  },
  {
    label: '其他',
    value: ProductType['其他'],
    imageName: 'product_type_8.png',
  },
];

export enum TabsEnum {
  '最新发布' = 1,
  '最多收藏' = 2,
}

export const tabsMap = new Map([
  [TabsEnum['最新发布'], { label: '最新发布', value: TabsEnum['最新发布'] }],
  [TabsEnum['最多收藏'], { label: '最多收藏', value: TabsEnum['最多收藏'] }],
]);
