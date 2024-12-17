import { ScrollView, View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import { useState } from 'react';

import styles from './index.module.scss';
import Notice from './Notice';

import { getChatWithPage } from '@/api';
import { Empty } from '@/components';
import { DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE } from '@/constants';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useChatStore, useGlobalStore } from '@/models';

const Page = () => {
  const { setTabBarActiveKey } = useGlobalStore((state) => state);
  const { list, addList, setList } = useChatStore((state) => state);

  // 页码
  const [currentPageNum, setCurrentPageNum] = useState(DEFAULT_PAGE_NUM);
  // 总数
  const [chatTotal, setPageNum] = useState(0);
  // 下拉刷新中
  const [refresherTriggered, setRefresherTriggered] = useState<boolean>(false);

  useDidShow(() => {
    setTabBarActiveKey('message');
  });

  // 获取对话列表
  const { run } = useRequest(getChatWithPage, {
    defaultParams: {
      pageNum: `${DEFAULT_PAGE_NUM}`,
      pageSize: `${DEFAULT_PAGE_SIZE}`,
    },
    onSuccess(data) {
      const { list, total } = data;
      setPageNum(total);
      if (currentPageNum === 1) {
        setList(list);
      } else {
        addList(list);
      }
    },
  });

  // 刷新数据
  const refresh = async () => {
    if (refresherTriggered) return;
    setRefresherTriggered(true);
    try {
      await run({
        pageNum: `${DEFAULT_PAGE_NUM}`,
        pageSize: `${DEFAULT_PAGE_SIZE}`,
      });
      setCurrentPageNum(DEFAULT_PAGE_NUM);
    } catch (err) {
      console.log(err);
    } finally {
      setRefresherTriggered(false);
    }
  };

  // 加载更多数据
  const loadMore = async () => {
    if (list?.length >= chatTotal) return;
    const pageNum = currentPageNum + 1;
    await run({
      pageNum: `${pageNum}`,
      pageSize: `${DEFAULT_PAGE_SIZE}`,
    });
    setCurrentPageNum(pageNum);
  };

  return (
    <BasicLayout title="消息" fill>
      <Notice />
      <ScrollView
        className={styles.list}
        scrollY
        enhanced
        refresherEnabled
        refresherTriggered={refresherTriggered}
        onRefresherRefresh={refresh}
        onScrollToLower={loadMore}
      >
        {list?.length ? (
          list?.map((item) => <View key={item.id}>1</View>)
        ) : (
          <Empty title="暂无消息" />
        )}
      </ScrollView>
    </BasicLayout>
  );
};

export default Page;
