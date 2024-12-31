import { ScrollView, View } from '@tarojs/components';
import Taro, { useDidShow, usePullDownRefresh } from '@tarojs/taro';
import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';

import styles from './index.module.scss';
import Notice from './Notice';

import { getChatWithPage } from '@/api';
import { Avatar, Empty } from '@/components';
import { DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE } from '@/constants';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useChatStore, useGlobalStore, useUserStore } from '@/models';
import { RouterUtil } from '@/utils';
import { WebSocketWrapper } from '@/wrappers';

const Page = () => {
  const { setTabBarActiveKey } = useGlobalStore((state) => state);
  const { info } = useUserStore((state) => state);
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

  usePullDownRefresh(async () => {
    await refresh();
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
      Taro.stopPullDownRefresh();
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

  // 计算时间
  const calculateTime = (t: Dayjs) => {
    const now = dayjs();
    if (now.isSame(t, 'day')) {
      // 如果t和当前时间是同一天，返回"hh:mm"格式的时间
      return t.format('HH:mm');
    } else {
      // 如果t和当前时间相差大于等于1天，返回"mm-dd"格式的时间
      return t.format('MM-DD');
    }
  };

  return (
    <WebSocketWrapper>
      <BasicLayout
        title="消息"
        fill
        safeArea={{ show: true, withTabBar: true }}
      >
        <Notice />
        <ScrollView
          className={styles.list}
          scrollY
          enhanced
          onScrollToLower={loadMore}
        >
          {list?.length ? (
            list?.map((item) => {
              const {
                id,
                initiatorCompany,
                receiverCompany,
                message,
                updateTime,
              } = item;
              const target =
                initiatorCompany.id === info?.companyId
                  ? receiverCompany
                  : initiatorCompany;
              return (
                <View
                  key={id}
                  className={styles.chat}
                  onClick={() => {
                    RouterUtil.navigateTo('/pages/message/detail/index', {
                      id,
                    });
                  }}
                >
                  <Avatar
                    className={styles['chat-logo']}
                    src={target.logo}
                    name={target.name}
                    size={40}
                  />
                  <View className={styles['chat-content']}>
                    <View className={styles['chat-content-name']}>
                      {target.name}
                    </View>
                    <View className={styles['chat-content-msg']}>
                      {message?.content}
                    </View>
                  </View>
                  <View className={styles['chat-time']}>
                    {calculateTime(dayjs(updateTime))}
                  </View>
                </View>
              );
            })
          ) : (
            <Empty title="暂无消息" />
          )}
        </ScrollView>
      </BasicLayout>
    </WebSocketWrapper>
  );
};

export default Page;
