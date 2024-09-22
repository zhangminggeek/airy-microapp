import { ScrollView, Text, View } from '@tarojs/components';
import classnames from 'classnames';
import { useImperativeHandle, useMemo, useRef, useState } from 'react';

import type { FunctionType } from '@/hooks/useRequest';
import type { PaginationParams, PaginationResponse } from '@/interfaces/base';
import type { CSSProperties, ReactNode, Ref } from 'react';

import { DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE } from '@/constants';
import { useDeepCompareEffect, useRequest } from '@/hooks';

import './index.scss';

export interface ActionType<P = any> {
  refresh: (p?: P) => Promise<void>;
}

type ParamWithoutPaginationParams<T> = Omit<T, 'pageNum' | 'pageSize'>;

interface InfiniteListProps<R = any, P = Record<string, any>> {
  className?: string;
  style?: CSSProperties;
  padding?: boolean;
  combine?: boolean;
  column?: 'single' | 'multiple';
  params?: ParamWithoutPaginationParams<P>;
  request: FunctionType<P, PaginationResponse<R>>;
  renderItem: (data: R) => ReactNode;
  header?: ReactNode;
  headerFixed?: boolean;
  footer?: ReactNode;
  actionRef?: Ref<ActionType<P>>;
}

const PREFIX_CLS = 'm-infinite-list';

const InfiniteList = <
  R,
  P extends Record<string, any>,
  U extends PaginationParams<P>,
>({
  className,
  style,
  padding,
  combine,
  column = 'single',
  params,
  request,
  renderItem,
  header,
  headerFixed = false,
  footer,
  actionRef,
}: InfiniteListProps<R, P>) => {
  useImperativeHandle(actionRef, () => ({
    refresh,
  }));

  const containerRef = useRef(null);

  // 请求状态
  const [loading, setLoading] = useState<boolean>(false);
  // 下拉刷行中
  const [refresherTriggered, setRefresherTriggered] = useState<boolean>(false);
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

  useDeepCompareEffect(() => {
    setInnerParams(params);
    loadData({ ...params, pageNum: `${DEFAULT_PAGE_NUM}` } as U);
  }, [params]);

  // 获取列表数据
  const { run } = useRequest(request, {
    manual: true,
    onSuccess(data, p: U) {
      const { pageNum } = p;
      if (Number(pageNum) === 1) {
        setList(data.list);
      } else {
        setList([...list, ...data.list]);
      }
      setCurrentPageNum(Number(pageNum));
      setTotal(data.total);
    },
  });
  const loadData = async (p?: Partial<U>) => {
    if (loading) return;
    setLoading(true);
    const params = {
      pageNum: `${currentPageNum}`,
      pageSize: `${DEFAULT_PAGE_SIZE}`,
      ...innerParams,
      ...p,
    } as U;
    try {
      await run(params);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 刷新数据
  const refresh = async (p?: P) => {
    if (refresherTriggered) return;
    setRefresherTriggered(true);
    try {
      await loadData({ pageNum: `${DEFAULT_PAGE_NUM}`, ...p } as U);
    } catch (err) {
      console.log(err);
    } finally {
      setRefresherTriggered(false);
    }
  };

  // 加载更多数据
  const loadMore = async () => {
    if (!hasMore) return;
    await loadData({ pageNum: `${currentPageNum + 1}` } as U);
  };

  // 是否还存在未加载的数据
  const hasMore = useMemo(() => total > list?.length, [list, total]);

  return (
    <ScrollView
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-padding`]: padding },
        { [`${PREFIX_CLS}-combine`]: combine },
        { [`${PREFIX_CLS}-header-fixed`]: headerFixed },
        { [`${PREFIX_CLS}-multicolumn`]: column === 'multiple' },
        className,
      )}
      style={style}
      ref={containerRef}
      scrollY
      enhanced
      refresherEnabled
      refresherTriggered={refresherTriggered}
      onRefresherRefresh={() => {
        refresh();
      }}
      onScrollToLower={loadMore}
    >
      <View className={`${PREFIX_CLS}-content`}>
        {header ? (
          <View className={`${PREFIX_CLS}-header`}>{header}</View>
        ) : null}
        <View className={`${PREFIX_CLS}-body`}>
          <View className={`${PREFIX_CLS}-body-main`}>
            {list?.map((item) => renderItem(item))}
          </View>
          {hasMore ? null : (
            <View className={`${PREFIX_CLS}-body-tip`}>
              <Text className={`${PREFIX_CLS}-body-tip-text`}>没有更多了</Text>
            </View>
          )}
        </View>
        {footer ? (
          <View className={`${PREFIX_CLS}-footer`}>{footer}</View>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default InfiniteList;
