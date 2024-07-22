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

export const productInfoFieldMap = new Map([
  [
    ProductType['婚纱'],
    [
      {
        key: 'material',
        name: '材质',
        options: [
          { text: '缎面', value: 16 },
          { text: '蕾丝', value: 17 },
          { text: '纱面', value: 18 },
          { text: '纱缎结合', value: 19 },
          { text: '其他', value: 20 },
        ],
      },
      {
        key: 'geometria',
        name: '形状',
        options: [
          { text: 'A字裙', value: 29 },
          { text: '鱼尾', value: 30 },
          { text: '公主裙', value: 31 },
          { text: '直筒型', value: 32 },
          { text: '修身型', value: 33 },
        ],
      },
      {
        key: 'neckband',
        name: '领口',
        options: [
          { text: 'V领', value: 34 },
          { text: '心型', value: 35 },
          { text: '包肩式', value: 36 },
          { text: '抹胸', value: 37 },
          { text: '一字肩', value: 38 },
          { text: '挂脖式', value: 39 },
          { text: '圆领', value: 40 },
        ],
      },
      {
        key: 'sleeve',
        name: '袖子',
        options: [
          { text: '长袖', value: 41 },
          { text: '短袖', value: 42 },
          { text: '无袖', value: 43 },
        ],
      },
      {
        key: 'color',
        name: '颜色',
        options: [
          { text: '白色', value: 44 },
          { text: '粉色', value: 45 },
          { text: '其他', value: 46 },
        ],
      },
      {
        key: 'petticoat',
        name: '拖尾',
        options: [
          { text: '长拖尾', value: 47 },
          { text: '短拖尾', value: 48 },
          { text: '齐地', value: 49 },
        ],
      },
    ],
  ],
  [
    ProductType['礼服'],
    [
      {
        key: 'material',
        name: '材质',
        options: [
          { text: '缎面', value: 50 },
          { text: '纺面', value: 51 },
          { text: '蕾丝', value: 52 },
          { text: '纱面', value: 53 },
          { text: '真丝', value: 54 },
        ],
      },
      {
        key: 'geometria',
        name: '形状',
        options: [
          { text: '长拖尾', value: 47 },
          { text: '短拖尾', value: 48 },
          { text: '齐地', value: 49 },
        ],
      },
      {
        key: 'neckband',
        name: '领口',
        options: [
          { text: 'V领', value: 58 },
          { text: '心型', value: 59 },
          { text: '包肩式', value: 60 },
          { text: '抹胸', value: 61 },
          { text: '一字肩', value: 62 },
          { text: '挂脖式', value: 63 },
          { text: '圆领', value: 64 },
        ],
      },
      {
        key: 'sleeve',
        name: '袖子',
        options: [
          { text: '长袖', value: 65 },
          { text: '短袖', value: 66 },
          { text: '无袖', value: 67 },
        ],
      },
      {
        key: 'color',
        name: '颜色',
        options: [
          { text: '红色', value: 68 },
          { text: '粉色', value: 69 },
          { text: '白色', value: 70 },
          { text: '黄色', value: 71 },
          { text: '橙色', value: 72 },
          { text: '绿色', value: 73 },
          { text: '蓝色', value: 74 },
          { text: '紫色', value: 75 },
          { text: '黑色', value: 76 },
          { text: '灰色', value: 77 },
          { text: '彩虹', value: 78 },
          { text: '白色', value: 79 },
          { text: '其他', value: 80 },
        ],
      },
    ],
  ],
  [
    ProductType['秀禾'],
    [
      {
        key: 'material',
        name: '材质',
        options: [
          { text: '丝绸', value: 81 },
          { text: '缎面', value: 82 },
          { text: '网纱', value: 83 },
        ],
      },
      {
        key: 'category',
        name: '类别',
        options: [
          { text: '龙凤褂', value: 84 },
          { text: '秀禾', value: 85 },
          { text: '汉服', value: 86 },
          { text: '明制汉服', value: 87 },
          { text: '改良汉服', value: 88 },
        ],
      },
      {
        key: 'hem',
        name: '裙摆',
        options: [
          { text: '秀禾', value: 89 },
          { text: '鱼尾', value: 90 },
          { text: '包臀', value: 91 },
          { text: 'A摆', value: 92 },
          { text: '太阳摆', value: 93 },
        ],
      },
      {
        key: 'color',
        name: '颜色',
        options: [
          { text: '红色', value: 94 },
          { text: '金色', value: 95 },
          { text: '粉色', value: 96 },
          { text: '蓝色', value: 97 },
          { text: '其他', value: 98 },
        ],
      },
    ],
  ],
  [
    ProductType['西服'],
    [
      {
        key: 'material',
        name: '材质',
        options: [
          { text: '羊毛', value: 119 },
          { text: '亚麻', value: 120 },
          { text: '纯棉', value: 121 },
        ],
      },
      {
        key: 'color',
        name: '颜色',
        options: [
          { text: '黑色系', value: 122 },
          { text: '灰色系', value: 123 },
          { text: '红色系', value: 124 },
          { text: '橙色系', value: 125 },
          { text: '蓝色系', value: 126 },
          { text: '黄色系', value: 127 },
          { text: '绿色系', value: 128 },
          { text: '紫色系', value: 129 },
          { text: '其他', value: 130 },
        ],
      },
    ],
  ],
  [
    ProductType['伴娘服'],
    [
      {
        key: 'material',
        name: '材质',
        options: [
          { text: '缎面', value: 99 },
          { text: '纺面', value: 100 },
          { text: '蕾丝', value: 101 },
          { text: '纱面', value: 102 },
          { text: '真丝', value: 103 },
        ],
      },
      {
        key: 'sleeve',
        name: '袖子',
        options: [
          { text: '长袖', value: 104 },
          { text: '短袖', value: 105 },
          { text: '无袖', value: 106 },
        ],
      },
      {
        key: 'color',
        name: '颜色',
        options: [
          { text: '红色', value: 107 },
          { text: '粉色', value: 108 },
          { text: '黄色', value: 109 },
          { text: '橙色', value: 110 },
          { text: '绿色', value: 111 },
          { text: '蓝色', value: 112 },
          { text: '紫色', value: 113 },
          { text: '黑色', value: 114 },
          { text: '灰色', value: 115 },
          { text: '白色', value: 116 },
          { text: '彩虹', value: 117 },
          { text: '其他', value: 118 },
        ],
      },
    ],
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
