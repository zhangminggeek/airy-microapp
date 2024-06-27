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
