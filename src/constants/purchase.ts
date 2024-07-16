// 求购方式
export enum PurchaseMethod {
  '购买' = 1,
  '借调' = 2,
}

export const purchaseMethodMap = new Map([
  [PurchaseMethod['购买'], { text: '购买', value: PurchaseMethod['购买'] }],
  [PurchaseMethod['借调'], { text: '借调', value: PurchaseMethod['借调'] }],
]);

// 求购状态
export enum PurchaseStatus {
  '审核中' = 1,
  '求购中' = 2,
  '已完成' = 3,
  '审核不通过' = 4,
}

export const purchaseStatusMap = new Map([
  [
    PurchaseStatus['审核中'],
    { text: '审核中', value: PurchaseStatus['审核中'] },
  ],
  [
    PurchaseStatus['求购中'],
    { text: '求购中', value: PurchaseStatus['求购中'] },
  ],
  [
    PurchaseStatus['已完成'],
    { text: '已完成', value: PurchaseStatus['已完成'] },
  ],
  [
    PurchaseStatus['审核不通过'],
    { text: '审核不通过', value: PurchaseStatus['审核不通过'] },
  ],
]);
