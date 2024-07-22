export enum ProductType {
  '婚纱' = '1',
  '礼服' = '2',
  '秀禾' = '3',
  '西服' = '4',
  '伴娘服' = '5',
  '鞋子' = '6',
  '首饰' = '7',
  '其他' = '100',
}

export const productTypeMap = new Map([
  [ProductType['婚纱'], { text: '婚纱', value: ProductType['婚纱'] }],
  [ProductType['礼服'], { text: '礼服', value: ProductType['礼服'] }],
  [ProductType['秀禾'], { text: '秀禾', value: ProductType['秀禾'] }],
  [ProductType['西服'], { text: '西服', value: ProductType['西服'] }],
  [ProductType['伴娘服'], { text: '伴娘服', value: ProductType['伴娘服'] }],
  [ProductType['鞋子'], { text: '鞋子', value: ProductType['鞋子'] }],
  [ProductType['首饰'], { text: '首饰', value: ProductType['首饰'] }],
  [ProductType['其他'], { text: '其他', value: ProductType['其他'] }],
]);

export enum ProductFiledKey {
  '婚纱-材质' = `${ProductType['婚纱']}_material`,
  '婚纱-形状' = `${ProductType['婚纱']}_geometria`,
  '婚纱-领口' = `${ProductType['婚纱']}_neckband`,
  '婚纱-袖子' = `${ProductType['婚纱']}_sleeve`,
  '婚纱-颜色' = `${ProductType['婚纱']}_color`,
  '婚纱-拖尾' = `${ProductType['婚纱']}_petticoat`,
  '礼服-材质' = `${ProductType['礼服']}_material`,
  '礼服-领口' = `${ProductType['礼服']}_neckband`,
  '礼服-袖子' = `${ProductType['礼服']}_sleeve`,
  '礼服-颜色' = `${ProductType['礼服']}_color`,
  '秀禾-材质' = `${ProductType['秀禾']}_material`,
  '秀禾-类别' = `${ProductType['秀禾']}_category`,
  '秀禾-裙摆' = `${ProductType['秀禾']}_hem`,
  '秀禾-颜色' = `${ProductType['秀禾']}_color`,
  '西服-材质' = `${ProductType['西服']}_material`,
  '西服-颜色' = `${ProductType['西服']}_color`,
  '伴娘服-材质' = `${ProductType['伴娘服']}_material`,
  '伴娘服-袖子' = `${ProductType['伴娘服']}_sleeve`,
  '伴娘服-颜色' = `${ProductType['伴娘服']}_color`,
}

export enum ProductFiledOption {
  '婚纱-材质-缎面' = 16,
  '婚纱-材质-蕾丝' = 17,
  '婚纱-材质-纱面' = 18,
  '婚纱-材质-纱缎结合' = 19,
  '婚纱-材质-其他' = 20,
  '婚纱-形状-A字裙' = 29,
  '婚纱-形状-鱼尾' = 30,
  '婚纱-形状-公主裙' = 31,
  '婚纱-形状-直筒型' = 32,
  '婚纱-形状-修身型' = 33,
  '婚纱-领口-V领' = 34,
  '婚纱-领口-心型' = 35,
  '婚纱-领口-包肩式' = 36,
  '婚纱-领口-抹胸' = 37,
  '婚纱-领口-一字肩' = 38,
  '婚纱-领口-挂脖式' = 39,
  '婚纱-领口-圆领' = 40,
  '婚纱-袖子-长袖' = 41,
  '婚纱-袖子-短袖' = 42,
  '婚纱-袖子-无袖' = 43,
  '婚纱-颜色-白色' = 44,
  '婚纱-颜色-粉色' = 45,
  '婚纱-颜色-其他' = 46,
  '婚纱-拖尾-长拖尾' = 47,
  '婚纱-拖尾-短拖尾' = 48,
  '婚纱-拖尾-齐地' = 49,
  '礼服-材质-缎面' = 50,
  '礼服-材质-纺面' = 51,
  '礼服-材质-蕾丝' = 52,
  '礼服-材质-纱面' = 53,
  '礼服-材质-真丝' = 54,
  '礼服-领口-V领' = 58,
  '礼服-领口-心型' = 59,
  '礼服-领口-包肩式' = 60,
  '礼服-领口-抹胸' = 61,
  '礼服-领口-一字肩' = 62,
  '礼服-领口-挂脖式' = 63,
  '礼服-领口-圆领' = 64,
  '礼服-袖子-长袖' = 65,
  '礼服-袖子-短袖' = 66,
  '礼服-袖子-无袖' = 67,
  '礼服-颜色-红色' = 68,
  '礼服-颜色-粉色' = 69,
  '礼服-颜色-白色' = 70,
  '礼服-颜色-黄色' = 71,
  '礼服-颜色-橙色' = 72,
  '礼服-颜色-绿色' = 73,
  '礼服-颜色-蓝色' = 74,
  '礼服-颜色-紫色' = 75,
  '礼服-颜色-黑色' = 76,
  '礼服-颜色-灰色' = 77,
  '礼服-颜色-彩虹' = 78,
  '礼服-颜色-其他' = 80,
  '秀禾-材质-丝绸' = 81,
  '秀禾-材质-缎面' = 82,
  '秀禾-材质-网纱' = 83,
  '秀禾-类别-龙凤褂' = 84,
  '秀禾-类别-秀禾' = 85,
  '秀禾-类别-汉服' = 86,
  '秀禾-类别-明制汉服' = 87,
  '秀禾-类别-改良汉服' = 88,
  '秀禾-裙摆-秀禾' = 89,
  '秀禾-裙摆-鱼尾' = 90,
  '秀禾-裙摆-包臀' = 91,
  '秀禾-裙摆-A摆' = 92,
  '秀禾-裙摆-太阳摆' = 93,
  '秀禾-颜色-红色' = 94,
  '秀禾-颜色-金色' = 95,
  '秀禾-颜色-粉色' = 96,
  '秀禾-颜色-蓝色' = 97,
  '秀禾-颜色-其他' = 98,
  '西服-材质-羊毛' = 119,
  '西服-材质-亚麻' = 120,
  '西服-材质-纯棉' = 121,
  '西服-颜色-黑色系' = 122,
  '西服-颜色-灰色系' = 123,
  '西服-颜色-红色系' = 124,
  '西服-颜色-橙色系' = 125,
  '西服-颜色-蓝色系' = 126,
  '西服-颜色-黄色系' = 127,
  '西服-颜色-绿色系' = 128,
  '西服-颜色-紫色系' = 129,
  '西服-颜色-其他' = 130,
  '伴娘服-材质-缎面' = 99,
  '伴娘服-材质-纺面' = 100,
  '伴娘服-材质-蕾丝' = 101,
  '伴娘服-材质-纱面' = 102,
  '伴娘服-材质-真丝' = 103,
  '伴娘服-袖子-长袖' = 104,
  '伴娘服-袖子-短袖' = 105,
  '伴娘服-袖子-无袖' = 106,
  '伴娘服-颜色-红色' = 107,
  '伴娘服-颜色-粉色' = 108,
  '伴娘服-颜色-黄色' = 109,
  '伴娘服-颜色-橙色' = 110,
  '伴娘服-颜色-绿色' = 111,
  '伴娘服-颜色-蓝色' = 112,
  '伴娘服-颜色-紫色' = 113,
  '伴娘服-颜色-黑色' = 114,
  '伴娘服-颜色-灰色' = 115,
  '伴娘服-颜色-白色' = 116,
  '伴娘服-颜色-彩虹' = 117,
  '伴娘服-颜色-其他' = 118,
}

export const productInfoFieldMap = new Map([
  [
    ProductType['婚纱'],
    new Map([
      [
        ProductFiledKey['婚纱-材质'],
        {
          name: '材质',
          options: [
            { text: '缎面', value: ProductFiledOption['婚纱-材质-缎面'] },
            { text: '蕾丝', value: ProductFiledOption['婚纱-材质-蕾丝'] },
            { text: '纱面', value: ProductFiledOption['婚纱-材质-纱面'] },
            {
              text: '纱缎结合',
              value: ProductFiledOption['婚纱-材质-纱缎结合'],
            },
            { text: '其他', value: ProductFiledOption['婚纱-材质-其他'] },
          ],
        },
      ],
      [
        ProductFiledKey['婚纱-形状'],
        {
          name: '形状',
          options: [
            { text: 'A字裙', value: ProductFiledOption['婚纱-形状-A字裙'] },
            { text: '鱼尾', value: ProductFiledOption['婚纱-形状-鱼尾'] },
            { text: '公主裙', value: ProductFiledOption['婚纱-形状-公主裙'] },
            { text: '直筒型', value: ProductFiledOption['婚纱-形状-直筒型'] },
            { text: '修身型', value: ProductFiledOption['婚纱-形状-修身型'] },
          ],
        },
      ],
      [
        ProductFiledKey['婚纱-领口'],
        {
          name: '领口',
          options: [
            { text: 'V领', value: ProductFiledOption['婚纱-领口-V领'] },
            { text: '心型', value: ProductFiledOption['婚纱-领口-心型'] },
            { text: '包肩式', value: ProductFiledOption['婚纱-领口-包肩式'] },
            { text: '抹胸', value: ProductFiledOption['婚纱-领口-抹胸'] },
            { text: '一字肩', value: ProductFiledOption['婚纱-领口-一字肩'] },
            { text: '挂脖式', value: ProductFiledOption['婚纱-领口-挂脖式'] },
            { text: '圆领', value: ProductFiledOption['婚纱-领口-圆领'] },
          ],
        },
      ],
      [
        ProductFiledKey['婚纱-袖子'],
        {
          name: '袖子',
          options: [
            { text: '长袖', value: ProductFiledOption['婚纱-袖子-长袖'] },
            { text: '短袖', value: ProductFiledOption['婚纱-袖子-短袖'] },
            { text: '无袖', value: ProductFiledOption['婚纱-袖子-无袖'] },
          ],
        },
      ],
      [
        ProductFiledKey['婚纱-颜色'],
        {
          name: '颜色',
          options: [
            { text: '白色', value: ProductFiledOption['婚纱-颜色-白色'] },
            { text: '粉色', value: ProductFiledOption['婚纱-颜色-粉色'] },
            { text: '其他', value: ProductFiledOption['婚纱-颜色-其他'] },
          ],
        },
      ],
      [
        ProductFiledKey['婚纱-拖尾'],
        {
          name: '拖尾',
          options: [
            { text: '长拖尾', value: ProductFiledOption['婚纱-拖尾-长拖尾'] },
            { text: '短拖尾', value: ProductFiledOption['婚纱-拖尾-短拖尾'] },
            { text: '齐地', value: ProductFiledOption['婚纱-拖尾-齐地'] },
          ],
        },
      ],
    ]),
  ],
  [
    ProductType['礼服'],
    new Map([
      [
        ProductFiledKey['礼服-材质'],
        {
          name: '材质',
          options: [
            { text: '缎面', value: ProductFiledOption['礼服-材质-缎面'] },
            { text: '纺面', value: ProductFiledOption['礼服-材质-纺面'] },
            { text: '蕾丝', value: ProductFiledOption['礼服-材质-蕾丝'] },
            { text: '纱面', value: ProductFiledOption['礼服-材质-纱面'] },
            { text: '真丝', value: ProductFiledOption['礼服-材质-真丝'] },
          ],
        },
      ],
      [
        ProductFiledKey['礼服-领口'],
        {
          name: '领口',
          options: [
            { text: 'V领', value: ProductFiledOption['礼服-领口-V领'] },
            { text: '心型', value: ProductFiledOption['礼服-领口-心型'] },
            { text: '包肩式', value: ProductFiledOption['礼服-领口-包肩式'] },
            { text: '抹胸', value: ProductFiledOption['礼服-领口-抹胸'] },
            { text: '一字肩', value: ProductFiledOption['礼服-领口-一字肩'] },
            { text: '挂脖式', value: ProductFiledOption['礼服-领口-挂脖式'] },
            { text: '圆领', value: ProductFiledOption['礼服-领口-圆领'] },
          ],
        },
      ],
      [
        ProductFiledKey['礼服-袖子'],
        {
          name: '袖子',
          options: [
            { text: '长袖', value: ProductFiledOption['礼服-袖子-长袖'] },
            { text: '短袖', value: ProductFiledOption['礼服-袖子-短袖'] },
            { text: '无袖', value: ProductFiledOption['礼服-袖子-无袖'] },
          ],
        },
      ],
      [
        ProductFiledKey['礼服-颜色'],
        {
          name: '颜色',
          options: [
            { text: '红色', value: ProductFiledOption['礼服-颜色-红色'] },
            { text: '粉色', value: ProductFiledOption['礼服-颜色-粉色'] },
            { text: '白色', value: ProductFiledOption['礼服-颜色-白色'] },
            { text: '黄色', value: ProductFiledOption['礼服-颜色-黄色'] },
            { text: '橙色', value: ProductFiledOption['礼服-颜色-橙色'] },
            { text: '绿色', value: ProductFiledOption['礼服-颜色-绿色'] },
            { text: '蓝色', value: ProductFiledOption['礼服-颜色-蓝色'] },
            { text: '紫色', value: ProductFiledOption['礼服-颜色-紫色'] },
            { text: '黑色', value: ProductFiledOption['礼服-颜色-黑色'] },
            { text: '灰色', value: ProductFiledOption['礼服-颜色-灰色'] },
            { text: '彩虹', value: ProductFiledOption['礼服-颜色-彩虹'] },
            { text: '其他', value: ProductFiledOption['礼服-颜色-其他'] },
          ],
        },
      ],
    ]),
  ],
  [
    ProductType['秀禾'],
    new Map([
      [
        ProductFiledKey['秀禾-材质'],
        {
          name: '材质',
          options: [
            { text: '丝绸', value: ProductFiledOption['秀禾-材质-丝绸'] },
            { text: '缎面', value: ProductFiledOption['秀禾-材质-缎面'] },
            { text: '网纱', value: ProductFiledOption['秀禾-材质-网纱'] },
          ],
        },
      ],
      [
        ProductFiledKey['秀禾-类别'],
        {
          name: '类别',
          options: [
            { text: '龙凤褂', value: ProductFiledOption['秀禾-类别-龙凤褂'] },
            { text: '秀禾', value: ProductFiledOption['秀禾-类别-秀禾'] },
            { text: '汉服', value: ProductFiledOption['秀禾-类别-汉服'] },
            {
              text: '明制汉服',
              value: ProductFiledOption['秀禾-类别-明制汉服'],
            },
            {
              text: '改良汉服',
              value: ProductFiledOption['秀禾-类别-改良汉服'],
            },
          ],
        },
      ],
      [
        ProductFiledKey['秀禾-颜色'],
        {
          name: '颜色',
          options: [
            { text: '红色', value: ProductFiledOption['秀禾-颜色-红色'] },
            { text: '金色', value: ProductFiledOption['秀禾-颜色-金色'] },
            { text: '粉色', value: ProductFiledOption['秀禾-颜色-粉色'] },
            { text: '蓝色', value: ProductFiledOption['秀禾-颜色-蓝色'] },
            { text: '其他', value: ProductFiledOption['秀禾-颜色-其他'] },
          ],
        },
      ],
    ]),
  ],
  [
    ProductType['西服'],
    new Map([
      [
        ProductFiledKey['西服-材质'],
        {
          name: '材质',
          options: [
            { text: '羊毛', value: ProductFiledOption['西服-材质-羊毛'] },
            { text: '亚麻', value: ProductFiledOption['西服-材质-亚麻'] },
            { text: '纯棉', value: ProductFiledOption['西服-材质-纯棉'] },
          ],
        },
      ],
      [
        ProductFiledKey['西服-颜色'],
        {
          name: '颜色',
          options: [
            { text: '黑色系', value: ProductFiledOption['西服-颜色-黑色系'] },
            { text: '灰色系', value: ProductFiledOption['西服-颜色-灰色系'] },
            { text: '红色系', value: ProductFiledOption['西服-颜色-红色系'] },
            { text: '橙色系', value: ProductFiledOption['西服-颜色-橙色系'] },
            { text: '蓝色系', value: ProductFiledOption['西服-颜色-蓝色系'] },
            { text: '黄色系', value: ProductFiledOption['西服-颜色-黄色系'] },
            { text: '绿色系', value: ProductFiledOption['西服-颜色-绿色系'] },
            { text: '紫色系', value: ProductFiledOption['西服-颜色-紫色系'] },
            { text: '其他', value: ProductFiledOption['西服-颜色-其他'] },
          ],
        },
      ],
    ]),
  ],
  [
    ProductType['伴娘服'],
    new Map([
      [
        ProductFiledKey['伴娘服-材质'],
        {
          name: '材质',
          options: [
            { text: '缎面', value: ProductFiledOption['伴娘服-材质-缎面'] },
            { text: '纺面', value: ProductFiledOption['伴娘服-材质-纺面'] },
            { text: '蕾丝', value: ProductFiledOption['伴娘服-材质-蕾丝'] },
            { text: '纱面', value: ProductFiledOption['伴娘服-材质-纱面'] },
            { text: '真丝', value: ProductFiledOption['伴娘服-材质-真丝'] },
          ],
        },
      ],
      [
        ProductFiledKey['伴娘服-袖子'],
        {
          name: '袖子',
          options: [
            { text: '长袖', value: ProductFiledOption['伴娘服-袖子-长袖'] },
            { text: '短袖', value: ProductFiledOption['伴娘服-袖子-短袖'] },
            { text: '无袖', value: ProductFiledOption['伴娘服-袖子-无袖'] },
          ],
        },
      ],
      [
        ProductFiledKey['伴娘服-颜色'],
        {
          name: '颜色',
          options: [
            { text: '红色', value: ProductFiledOption['伴娘服-颜色-红色'] },
            { text: '粉色', value: ProductFiledOption['伴娘服-颜色-粉色'] },
            { text: '黄色', value: ProductFiledOption['伴娘服-颜色-黄色'] },
            { text: '橙色', value: ProductFiledOption['伴娘服-颜色-橙色'] },
            { text: '绿色', value: ProductFiledOption['伴娘服-颜色-绿色'] },
            { text: '蓝色', value: ProductFiledOption['伴娘服-颜色-蓝色'] },
            { text: '紫色', value: ProductFiledOption['伴娘服-颜色-紫色'] },
            { text: '黑色', value: ProductFiledOption['伴娘服-颜色-黑色'] },
            { text: '灰色', value: ProductFiledOption['伴娘服-颜色-灰色'] },
            { text: '白色', value: ProductFiledOption['伴娘服-颜色-白色'] },
            { text: '彩虹', value: ProductFiledOption['伴娘服-颜色-彩虹'] },
            { text: '其他', value: ProductFiledOption['伴娘服-颜色-其他'] },
          ],
        },
      ],
    ]),
  ],
]);

export enum ProductSize {
  '均码' = 0,
  'XS' = 1,
  'S' = 2,
  'M' = 3,
  'L' = 4,
  'XL' = 5,
  'XXL' = 6,
  'XXXL' = 7,
  '4XL' = 8,
  '5XL' = 9,
  '6XL' = 10,
  '7XL' = 11,
  '8XL' = 12,
  '9XL' = 13,
  '10XL' = 14,
}
export const productSizeMap = new Map([
  [ProductSize['均码'], { text: '均码', value: ProductSize['均码'] }],
  [ProductSize['XS'], { text: 'XS', value: ProductSize['XS'] }],
  [ProductSize['S'], { text: 'S', value: ProductSize['S'] }],
  [ProductSize['M'], { text: 'M', value: ProductSize['M'] }],
  [ProductSize['L'], { text: 'L', value: ProductSize['L'] }],
  [ProductSize['XL'], { text: 'XL', value: ProductSize['XL'] }],
  [ProductSize['XXL'], { text: 'XXL', value: ProductSize['XXL'] }],
  [ProductSize['XXXL'], { text: 'XXXL', value: ProductSize['XXXL'] }],
  [ProductSize['4XL'], { text: '4XL', value: ProductSize['4XL'] }],
  [ProductSize['5XL'], { text: '5XL', value: ProductSize['5XL'] }],
  [ProductSize['6XL'], { text: '6XL', value: ProductSize['6XL'] }],
  [ProductSize['7XL'], { text: '7XL', value: ProductSize['7XL'] }],
  [ProductSize['8XL'], { text: '8XL', value: ProductSize['8XL'] }],
  [ProductSize['9XL'], { text: '9XL', value: ProductSize['9XL'] }],
  [ProductSize['10XL'], { text: '10XL', value: ProductSize['10XL'] }],
]);

// 新旧程度
export enum ProductQuality {
  '全新' = 1,
  '几乎全新' = 2,
  '轻微使用痕迹' = 3,
  '明显使用痕迹' = 4,
}

export const productQualityMap = new Map([
  [ProductQuality['全新'], { text: '全新', value: ProductQuality['全新'] }],
  [
    ProductQuality['几乎全新'],
    { text: '几乎全新', value: ProductQuality['几乎全新'] },
  ],
  [
    ProductQuality['轻微使用痕迹'],
    { text: '轻微使用痕迹', value: ProductQuality['轻微使用痕迹'] },
  ],
  [
    ProductQuality['明显使用痕迹'],
    { text: '明显使用痕迹', value: ProductQuality['明显使用痕迹'] },
  ],
]);

// 产品状态
export enum ProductStatus {
  '正常' = 1,
  '上架中' = 2,
  '已售出' = 3,
  '借调中' = 4,
}

export const productStatusMap = new Map([
  [ProductStatus['正常'], { text: '正常', value: ProductStatus['正常'] }],
  [ProductStatus['上架中'], { text: '上架中', value: ProductStatus['上架中'] }],
  [ProductStatus['已售出'], { text: '已售出', value: ProductStatus['已售出'] }],
  [ProductStatus['借调中'], { text: '借调中', value: ProductStatus['借调中'] }],
]);

export enum ProductSource {
  '服装管理' = '1',
  '相册' = '2',
}
