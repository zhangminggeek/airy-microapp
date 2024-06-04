export enum RoleEnum {
  CREATOR = 0,
  ADMIN = 1,
  USER = 2,
}

export const roleEnumMap = new Map([
  [RoleEnum.CREATOR, '创建人'],
  [RoleEnum.ADMIN, '管理员'],
  [RoleEnum.USER, '成员'],
]);
