export type PaginationParams<T> = {
  pageNum: string;
  pageSize: string;
} & T;

export interface PaginationResponse<T> {
  list: T[];
  total: number;
}

export interface BaseResponse<T = any> {
  code: string;
  message: string;
  data: T;
  success: boolean;
}
