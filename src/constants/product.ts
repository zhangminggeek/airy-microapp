export enum ProductType {
  '婚纱' = 1,
  '礼服' = 2,
  '秀禾' = 3,
  '西服' = 4,
  '伴娘服' = 5,
  '鞋子' = 6,
  '首饰' = 7,
  '其他' = 8,
}

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

// 快递方式
export enum DeliveryMethod {
  '包邮' = 1,
  '到付' = 2,
  '自提' = 3,
}

// 新旧程度
export enum ProductQuality {
  '全新' = 1,
  '几乎全新' = 2,
  '轻微使用痕迹' = 3,
  '明显使用痕迹' = 4,
}
