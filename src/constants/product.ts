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
  '已售出' = 2,
  '借调中' = 3,
}

export const productStatusMap = new Map([
  [ProductStatus['正常'], { text: '正常', value: ProductStatus['正常'] }],
  [ProductStatus['已售出'], { text: '已售出', value: ProductStatus['已售出'] }],
  [ProductStatus['借调中'], { text: '借调中', value: ProductStatus['S'] }],
]);

export enum ProductSource {
  '服装管理' = '1',
  '相册' = '2',
}
