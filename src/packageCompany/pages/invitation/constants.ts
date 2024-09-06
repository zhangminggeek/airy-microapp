export enum InvitationTask {
  '完成注册' = '10000',
  '关注公众号' = '01000',
  '上架服装' = '00100',
  '完成首笔交易' = '00010',
  '上传营业执照' = '00001',
}

// 邀请任务奖励
export const AWARD = new Map([
  [InvitationTask['关注公众号'], 3],
  [InvitationTask['上传营业执照'], 3],
  [InvitationTask['完成首笔交易'], 4],
]);
