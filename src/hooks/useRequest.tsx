import { useEffect, useState } from 'react';

import type { BaseResponse } from '@/interfaces/base';

type FunctionType<P, R> = (params?: P) => Promise<BaseResponse<R>>;

interface BaseOpions<P, R> {
  manual?: boolean;
  defaultParams?: P;
  onSuccess?: (data: R, params?: P) => void;
  onError?: (error: Error) => void;
}

type BaseOpionsWithFormat<P, R, U, UU extends U> = {
  formatResult: (data: BaseResponse<R>) => U;
} & BaseOpions<P, UU>;

interface RequestResponse<P, R> {
  loading: boolean;
  data: R;
  run: (params?: P) => Promise<BaseResponse<R>>;
}

export function useRequest<R, P = Record<string, any>>(
  fn: FunctionType<P, R>,
  options?: BaseOpions<P, R>,
): RequestResponse<P, R>;
export function useRequest<
  R,
  P = Record<string, any>,
  U = any,
  UU extends U = any,
>(
  fn: FunctionType<P, R>,
  options: BaseOpionsWithFormat<P, R, U, UU>,
): RequestResponse<P, U>;

export function useRequest(
  fn: any,
  {
    manual = false,
    defaultParams = {},
    formatResult,
    onSuccess,
    onError,
  }: any = {},
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (!manual) {
      run(defaultParams);
    }
  }, []);

  const run = async (params: { [key in string]: any }) => {
    try {
      setLoading(true);
      const res = await fn(params);
      const result = formatResult ? formatResult(res) : res.data;
      setData(result);
      onSuccess?.(result, params);
      return Promise.resolve(res);
    } catch (err) {
      onError?.(err);
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    run,
  };
}
