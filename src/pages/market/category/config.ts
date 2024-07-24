import { OSS_ASSETS_DIR } from '@/constants';
import {
  ProductFiledKey,
  ProductFiledOption,
  productInfoFieldMap,
  ProductType,
} from '@/constants/product';

export const filterConfig = new Map([
  [
    ProductType['婚纱'],
    {
      main: {
        filed: 'material',
        options: [
          {
            label: 'A字裙',
            value: ProductFiledOption['婚纱-形状-A字裙'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-A字裙']}.png`,
          },
          {
            label: '鱼尾',
            value: ProductFiledOption['婚纱-形状-鱼尾'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-鱼尾']}.png`,
          },
          {
            label: '公主裙',
            value: ProductFiledOption['婚纱-形状-公主裙'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-公主裙']}.png`,
          },
          {
            label: '直筒型',
            value: ProductFiledOption['婚纱-形状-直筒型'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-直筒型']}.png`,
          },
          {
            label: '修身型',
            value: ProductFiledOption['婚纱-形状-修身型'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['婚纱-形状-修身型']}.png`,
          },
        ],
      },
      tab: [
        {
          title: '材质',
          name: ProductFiledKey['婚纱-材质'],
          options: productInfoFieldMap
            .get(ProductType['婚纱'])
            ?.get(ProductFiledKey['婚纱-材质'])?.options,
        },
        {
          title: '颜色',
          name: ProductFiledKey['婚纱-颜色'],
          options: productInfoFieldMap
            .get(ProductType['婚纱'])
            ?.get(ProductFiledKey['婚纱-颜色'])?.options,
        },
      ],
    },
  ],
  [
    ProductType['礼服'],
    {
      main: {
        filed: 'color',
        options: [
          {
            label: '红色',
            value: ProductFiledOption['礼服-颜色-红色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-红色']}.png`,
          },
          {
            label: '粉色',
            value: ProductFiledOption['礼服-颜色-粉色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-粉色']}.png`,
          },
          {
            label: '白色',
            value: ProductFiledOption['礼服-颜色-白色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-白色']}.png`,
          },
          {
            label: '黄色',
            value: ProductFiledOption['礼服-颜色-黄色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-黄色']}.png`,
          },
          {
            label: '橙色',
            value: ProductFiledOption['礼服-颜色-橙色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-橙色']}.png`,
          },
          {
            label: '绿色',
            value: ProductFiledOption['礼服-颜色-绿色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-绿色']}.png`,
          },

          {
            label: '蓝色',
            value: ProductFiledOption['礼服-颜色-蓝色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-蓝色']}.png`,
          },
          {
            label: '紫色',
            value: ProductFiledOption['礼服-颜色-紫色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-紫色']}.png`,
          },
          {
            label: '黑色',
            value: ProductFiledOption['礼服-颜色-黑色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-黑色']}.png`,
          },
          {
            label: '灰色',
            value: ProductFiledOption['礼服-颜色-灰色'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-灰色']}.png`,
          },
          {
            label: '彩虹',
            value: ProductFiledOption['礼服-颜色-彩虹'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-彩虹']}.png`,
          },
          {
            label: '其他',
            value: ProductFiledOption['礼服-颜色-其他'],
            pic: `${OSS_ASSETS_DIR}/${ProductFiledOption['礼服-颜色-其他']}.png`,
          },
        ],
      },
    },
  ],
]);
