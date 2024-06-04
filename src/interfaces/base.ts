export interface Pagination {
  total: number;
  index: number;
  length: number;
}

export interface BaseResponse<T = any> {
  code: string;
  message: string;
  data: T;
  success: boolean;
}
