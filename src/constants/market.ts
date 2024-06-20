export enum MarkrtMethod {
  '出售' = 1,
  '借调' = 2,
}

export enum MarketProductStatus {
  '审核中' = 1,
  '在售' = 2,
  '未通过' = 3,
  '借调中' = 4,
  '已售出' = 5,
  '已下架' = 6,
}

export const productStatusMap = new Map([
  [
    MarketProductStatus['审核中'],
    { text: '审核中', value: MarketProductStatus['审核中'] },
  ],
  [
    MarketProductStatus['在售'],
    { text: '在售', value: MarketProductStatus['在售'] },
  ],
  [
    MarketProductStatus['未通过'],
    { text: '未通过', value: MarketProductStatus['未通过'] },
  ],
  [
    MarketProductStatus['借调中'],
    { text: '借调中', value: MarketProductStatus['借调中'] },
  ],
  [
    MarketProductStatus['已售出'],
    { text: '已售出', value: MarketProductStatus['已售出'] },
  ],
  [
    MarketProductStatus['已下架'],
    { text: '已下架', value: MarketProductStatus['已下架'] },
  ],
]);
