export enum MarkrtMethod {
  '出售' = 1,
  '借调' = 2,
}

export const marketMethodMap = new Map([
  [MarkrtMethod['出售'], { text: '出售', value: MarkrtMethod['出售'] }],
  [MarkrtMethod['借调'], { text: '借调', value: MarkrtMethod['借调'] }],
]);

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

// 快递方式
export enum ExpressMethod {
  '包邮' = 1,
  '到付' = 2,
  '自提' = 3,
}

export const expressMethodMap = new Map([
  [ExpressMethod['包邮'], { text: '包邮', value: ExpressMethod['包邮'] }],
  [ExpressMethod['到付'], { text: '到付', value: ExpressMethod['到付'] }],
  [ExpressMethod['自提'], { text: '自提', value: ExpressMethod['自提'] }],
]);
