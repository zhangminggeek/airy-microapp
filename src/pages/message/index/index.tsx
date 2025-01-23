import { Badge } from '@nutui/nutui-react-taro';
import { ScrollView, View } from '@tarojs/components';
import Taro, { useDidShow, usePullDownRefresh } from '@tarojs/taro';
import dayjs, { type Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

import { MessageType } from '../contants';

import styles from './index.module.scss';
import Notice from './Notice';

import { Avatar, Empty } from '@/components';
import { DEFAULT_MAX_PAGE_SIZE, DEFAULT_PAGE_NUM } from '@/constants';
import { BasicLayout } from '@/layouts';
import { useChatStore, useGlobalStore, useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { setTabBarActiveKey } = useGlobalStore((state) => state);
  const { info } = useUserStore((state) => state);
  const { list, total, fetchChatList } = useChatStore((state) => state);

  // 页码
  const [currentPageNum, setCurrentPageNum] = useState(DEFAULT_PAGE_NUM);
  // 下拉刷新中
  const [refresherTriggered, setRefresherTriggered] = useState<boolean>(false);

  useDidShow(() => {
    setTabBarActiveKey('message');
  });

  usePullDownRefresh(async () => {
    await refresh();
  });

  useEffect(() => {
    // 获取对话列表
    fetchChatList({
      pageNum: `${DEFAULT_PAGE_NUM}`,
      pageSize: `${DEFAULT_MAX_PAGE_SIZE}`,
    });
  }, []);

  // 刷新数据
  const refresh = async () => {
    if (refresherTriggered) return;
    setRefresherTriggered(true);
    try {
      await fetchChatList({
        pageNum: `${DEFAULT_PAGE_NUM}`,
        pageSize: `${DEFAULT_MAX_PAGE_SIZE}`,
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
    if (list?.length >= total) return;
    const pageNum = currentPageNum + 1;
    await fetchChatList({
      pageNum: `${pageNum}`,
      pageSize: `${DEFAULT_MAX_PAGE_SIZE}`,
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
    <BasicLayout title="消息" fill safeArea={{ show: true, withTabBar: true }}>
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
              participants,
              message,
              unreadMessageCount,
              updateTime,
            } = item;
            const target = participants?.find(
              (item) => item.id !== info.companyId,
            );
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
                <Badge
                  className={styles['chat-logo']}
                  value={unreadMessageCount}
                >
                  <Avatar
                    className={styles['chat-logo-avatar']}
                    src={target?.logo}
                    name={target?.name}
                    size={40}
                  />
                </Badge>
                <View className={styles['chat-content']}>
                  <View className={styles['chat-content-name']}>
                    {target?.name}
                  </View>
                  <View className={styles['chat-content-msg']}>
                    {message?.type === MessageType['文本']
                      ? message?.content
                      : '[图片]'}
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
  );
};

export default Page;
