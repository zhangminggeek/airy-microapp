export enum OrderType {
  '出售' = 1,
  '借调' = 2,
}

export const orderTypeMap = new Map([
  [
    OrderType['出售'],
    { value: OrderType['出售'], sellerText: '出售', buyerText: '购买' },
  ],
  [
    OrderType['借调'],
    { value: OrderType['借调'], sellerText: '借调', buyerText: '借调' },
  ],
]);

export enum OrderStatus {
  '待付款' = 1,
  '待发货' = 2,
  '待收货' = 3,
  '返还退押' = 4,
  '已完成' = 5,
  '已取消' = 6,
}

export const orderStatusMap = new Map([
  [OrderStatus['待付款'], { value: OrderStatus['待付款'], text: '待付款' }],
  [OrderStatus['待发货'], { value: OrderStatus['待发货'], text: '待发货' }],
  [OrderStatus['待收货'], { value: OrderStatus['待收货'], text: '待收货' }],
  [
    OrderStatus['返还退押'],
    { value: OrderStatus['返还退押'], text: '返还退押' },
  ],
  [OrderStatus['已完成'], { value: OrderStatus['已完成'], text: '已完成' }],
  [OrderStatus['已取消'], { value: OrderStatus['已取消'], text: '已取消' }],
]);
