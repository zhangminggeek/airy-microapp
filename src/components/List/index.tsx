import { InfiniteLoading } from '@nutui/nutui-react-taro';
import { useDidShow } from '@tarojs/taro';
import classnames from 'classnames';
import { useImperativeHandle, useRef, useState } from 'react';

import type { FunctionType } from '@/hooks/useRequest';
import type { PaginationParams, PaginationResponse } from '@/interfaces/base';
import type { InfiniteLoadingProps } from '@nutui/nutui-react-taro';
import type { ReactNode, Ref } from 'react';

import { DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE } from '@/constants';
import { useDeepCompareEffect, useRequest } from '@/hooks';

import './index.scss';

type ParamWithoutPaginationParams<T> = Omit<T, 'pageNum' | 'pageSize'>;

export interface ActionType<P = any> {
  refresh: (p?: ParamWithoutPaginationParams<P>) => Promise<void>;
}

interface ListProps<R = any, P = any, U extends PaginationParams<P> = any>
  extends Partial<InfiniteLoadingProps> {
  fill?: boolean;
  column?: 1 | 2;
  requestOnInit?: boolean;
  actionRef?: Ref<ActionType<P>>;
  params?: ParamWithoutPaginationParams<P>;
  request: FunctionType<U, PaginationResponse<R>>;
  renderItem: (data: R) => ReactNode;
}

const PREFIX_CLS = 'm-list';

const List = <R, P extends Record<string, any>, U extends PaginationParams<P>>({
  className,
  fill = false,
  column = 2,
  requestOnInit = true,
  actionRef,
  params,
  request,
  renderItem,
  ...rest
}: ListProps<R, P, U>) => {
  useImperativeHandle(actionRef, () => ({
    refresh: async (p) => {
      await fetchData({ ...p, pageNum: `${DEFAULT_PAGE_NUM}` } as unknown as U);
    },
  }));

  const loading = useRef<boolean>(false);

  // 请求参数
  const [innerParams, setInnerParams] =
    useState<ParamWithoutPaginationParams<P>>();
  // 用于渲染列表的数据
  const [list, setList] = useState<R[]>([]);
  // 当前页码
  const [currentPageNum, setCurrentPageNum] =
    useState<number>(DEFAULT_PAGE_NUM);
  // 数据总量
  const [total, setTotal] = useState<number>(0);

  useDidShow(() => {
    if (requestOnInit) {
      fetchData({ ...params, pageNum: `${DEFAULT_PAGE_NUM}` } as any);
    }
  });

  useDeepCompareEffect(() => {
    setInnerParams(params);
    fetchData({ ...params, pageNum: `${DEFAULT_PAGE_NUM}` } as any);
  }, [params]);

  // 获取列表数据
  const { run } = useRequest(request, {
    manual: true,
    onSuccess(data, p: U) {
      const { pageNum } = p;
      if (pageNum === '1') {
        setList(data.list);
      } else {
        setList([...list, ...data.list]);
      }
      setCurrentPageNum(Number(pageNum));
      setTotal(data.total);
    },
  });
  const fetchData = async (p?: Partial<U>) => {
    if (loading.current) return;
    loading.current = true;
    const params = {
      pageNum: `${currentPageNum}`,
      pageSize: `${DEFAULT_PAGE_SIZE}`,
      ...innerParams,
      ...p,
    } as unknown as U;
    try {
      await run(params);
    } catch (err) {
      console.log(err);
    } finally {
      loading.current = false;
    }
  };

  return (
    <InfiniteLoading
      className={classnames(
        PREFIX_CLS,
        {
          [`${PREFIX_CLS}-multicolumn`]: column === 2,
          [`${PREFIX_CLS}-fill`]: fill,
        },
        className,
      )}
      hasMore={total > list?.length}
      onLoadMore={async () => {
        await fetchData({ pageNum: `${currentPageNum + 1}` } as any);
      }}
      {...rest}
    >
      {list?.map((item) => renderItem(item))}
    </InfiniteLoading>
  );
};

export default List;
