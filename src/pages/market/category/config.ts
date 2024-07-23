import { OSS_ASSETS_DIR } from '@/constants';
import { ProductFiledOption, ProductType } from '@/constants/product';

export const filterConfig = new Map([
  [
    ProductType['婚纱'],
    {
      main: {
        filed: 'material',
        options: [
          {
            text: 'A字裙',
            value: ProductFiledOption['婚纱-形状-A字裙'],
            url: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-A字裙']}.png`,
          },
          {
            text: '鱼尾',
            value: ProductFiledOption['婚纱-形状-鱼尾'],
            url: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-鱼尾']}.png`,
          },
          {
            text: '公主裙',
            value: ProductFiledOption['婚纱-形状-公主裙'],
            url: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-公主裙']}.png`,
          },
          {
            text: '直筒型',
            value: ProductFiledOption['婚纱-形状-直筒型'],
            url: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-直筒型']}.png`,
          },
          {
            text: '修身型',
            value: ProductFiledOption['婚纱-形状-修身型'],
            url: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-修身型']}.png`,
          },
        ],
      },
    },
  ],
]);
