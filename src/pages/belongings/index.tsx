import { Cell, Ellipsis, SearchBar } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import {
  stopPullDownRefresh,
  useDidShow,
  usePullDownRefresh,
} from '@tarojs/taro';
import { debounce } from 'lodash';
import { useState } from 'react';

import BelongingsFilter from './BelongingsFilter';
import styles from './index.module.scss';

import type { GetBelongingsRequest } from '@/api';

import { getBelongings } from '@/api';
import { Affix, Avatar, Empty, Header, Title } from '@/components';
import { OSS_PREFIX } from '@/constants';
import { useRequest } from '@/hooks';
import BasicLayout from '@/layouts/BasicLayout';
import { useUserStore } from '@/models';
import { EventUtil, RouterUtil } from '@/utils';

const Page = () => {
  const { orgId } = useUserStore((state) => state);

  // 查询关键字
  const [keyword, setKeyword] = useState<string>('');
  // 筛选条件
  const [filter, setFilter] = useState<{ [key in string]: any }>();

  useDidShow(() => {
    fetchBelongings();
  });

  // 监听组织切换事件
  EventUtil.useEvents(EventUtil.EventsKey.ORGANIZATION_CHANGE, (id: number) => {
    fetchBelongings({ orgId: `${id}` });
  });

  // 下拉刷新
  usePullDownRefresh(async () => {
    await fetchBelongings();
    stopPullDownRefresh();
  });

  // 获取物品列表
  const { data, run } = useRequest(getBelongings, {
    manual: true,
  });
  const fetchBelongings = async (params?: { [key in string]: any }) => {
    const { spacePath, ...rest } = filter ?? {};
    const _params: GetBelongingsRequest = {
      ...rest,
      orgId: `${orgId}`,
    };
    const spaceId = spacePath?.length ? spacePath.at(-1) : undefined;
    if (spaceId) {
      _params.spaceId = spaceId;
    }
    await run({ ..._params, ...params });
  };

  return (
    <BasicLayout>
      <Header className={styles.header} />
      <View className={styles.body}>
        <SearchBar
          className={styles['search-bar']}
          shape="round"
          placeholder="请输入物品名称进行搜索"
          value={keyword}
          onChange={debounce((v) => {
            setKeyword(v);
            fetchBelongings({ name: v });
          }, 300)}
          onClear={() => {
            setKeyword('');
            fetchBelongings();
          }}
        />
        <Title
          extra={
            <BelongingsFilter
              onConfirm={(params) => {
                setFilter(params);
                const { spacePath, ...rest } = params ?? {};
                const spaceId = spacePath?.length
                  ? spacePath.at(-1)
                  : undefined;
                fetchBelongings({ ...rest, spaceId });
              }}
              onClear={() => {
                setFilter(undefined);
              }}
            />
          }
        >
          物品列表
        </Title>
        {data?.length ? (
          <View className={styles.list}>
            {data?.map((b) => (
              <Cell
                key={b.id}
                className={styles.cell}
                onClick={() => {
                  RouterUtil.navigateTo('/pages/belongings/detail/index', {
                    id: b.id,
                  });
                }}
              >
                <View className={styles['cell-content']}>
                  <Avatar
                    className={styles['cell-content-image']}
                    src={b.pic}
                    defaultImage={`${OSS_PREFIX}/assets/default_belongings.png`}
                    size="40"
                    shape="square"
                  />
                  <View className={styles['cell-content-info']}>
                    <Ellipsis
                      className={styles['cell-content-info-name']}
                      content={b.name}
                    />
                    <Ellipsis
                      className={styles['cell-content-info-desc']}
                      content={b.desc}
                    />
                  </View>
                  <View className={styles['cell-content-extra']}>
                    x{b.count}
                  </View>
                </View>
              </Cell>
            ))}
          </View>
        ) : (
          <Empty title="暂无物品" description="请先添加" />
        )}
      </View>
      <Affix
        onClick={() => {
          RouterUtil.navigateTo('/pages/belongings/action/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
