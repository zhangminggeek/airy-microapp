import { Input } from '@nutui/nutui-react-taro';
import { Image, ScrollView, View } from '@tarojs/components';
import {
  chooseImage,
  previewImage,
  setNavigationBarTitle,
  useRouter,
} from '@tarojs/taro';
import classnames from 'classnames';
import { useEffect, useState } from 'react';

import { MessageType } from '../contants';

import styles from './index.module.scss';

import type { GetChatMessageWithPageResponse } from '@/api';

import { getChatId, getChatMessageWithPage } from '@/api';
import { Avatar, Icon } from '@/components';
import { useRequest, useUpload } from '@/hooks';
import { useChatStore, useUserStore, useWebSocketStore } from '@/models';
import { WebSocketEvent } from '@/models/websocket';

const Page = () => {
  const { id } = useRouter().params;
  const chatId = Number(id);

  const { info } = useUserStore((state) => state);
  const { messages, readMessages, sendMessage, mergeMessages, setMessages } =
    useChatStore((state) => state);
  const { addListener } = useWebSocketStore((state) => state);
  const { upload } = useUpload();

  // 对话消息总数
  const [total, setTotal] = useState<number>(0);
  // 滚动内容高度
  const [scrollTop, setScrollTop] = useState<number>(9999);
  // 输入内容
  const [inputValue, setInputValue] = useState<string>('');
  // 刷新状态
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // 获取初始聊天内容
    getChatMessageWithPage({ chatId: `${chatId}` }).then((res) => {
      setMessages(res.data?.list);
      setTotal(res.data?.total);
      // 获取到聊天内容后，滚动条到最底部
      setScrollTop((prev) => prev + 1);
    });
    // 将所有消息更新为已读
    readMessages(chatId);
    // 增加监听事件
    const listener = addListener(
      WebSocketEvent.CHAT_BROADCAST,
      handleChatBroadcase,
    );

    return () => {
      // 将所有消息更新为已读
      readMessages(chatId);
      // 移除监听事件
      listener.remove();
    };
  }, []);

  // 获取对话详情
  const { data } = useRequest(getChatId, {
    defaultParams: { id: `${chatId}` },
    onSuccess(res) {
      const { participants } = res ?? {};
      const target = participants?.find((item) => item.id !== info.companyId);
      // 设置页面标题
      setNavigationBarTitle({ title: target?.name ?? '' });
    },
  });

  // 获取更多对话内容
  const loadMore = async () => {
    if (messages.length >= total) return;
    if (loading) return;
    try {
      setLoading(true);
      const res = await getChatMessageWithPage({
        chatId: `${chatId}`,
        latestMessageId: `${messages?.[0]?.id}`,
      });
      mergeMessages(res.data?.list ?? []);
      setTotal(res.data?.total);
    } catch (err) {
      console.log('err', err);
    } finally {
      setLoading(false);
    }
  };

  // 处理消息广播事件
  const handleChatBroadcase = (data: {
    message: GetChatMessageWithPageResponse['list'][number];
    count: number;
  }) => {
    // 接受消息广播
    const { count } = data;
    setTotal(count);
    // 保证滚动条始终在最底部
    setScrollTop((prev) => prev + 1);
  };

  // 发送图片
  const sendImage = () => {
    chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      async success(result) {
        const tempUrl = result.tempFilePaths[0];
        const url = await upload(tempUrl);
        sendMessage({
          chatId,
          type: MessageType['图片'],
          content: url,
          sender: info?.companyId,
        });
      },
    });
  };

  return (
    <View className={styles.container}>
      <ScrollView
        className={styles.body}
        scrollTop={scrollTop}
        scrollY
        scrollWithAnimation
        enhanced
        showScrollbar={false}
        onScrollToUpper={() => {
          loadMore();
        }}
      >
        {messages.map((item) => {
          const { id, sender, content, type } = item;
          const isSelf = sender === info?.companyId;
          // 消息内容
          const val =
            type === MessageType['文本'] ? (
              <View className={styles['bubble-content-text']}>{content}</View>
            ) : (
              <Image
                className={styles['bubble-content-image']}
                src={content}
                mode="widthFix"
                onClick={() => {
                  previewImage({ urls: [content] });
                }}
              />
            );
          // 发送消息的公司信息
          const company = data?.participants?.find(
            (item) => item.id === sender,
          );

          return (
            <View
              key={id}
              className={classnames(
                styles.bubble,
                isSelf ? styles['bubble-right'] : styles['bubble-left'],
              )}
            >
              <Avatar
                className={styles['bubble-avatar']}
                src={company?.logo}
                name={company?.name}
                size={36}
              />
              <View className={styles['bubble-content']}>{val}</View>
            </View>
          );
        })}
      </ScrollView>
      <View className={styles.footer}>
        <View className={styles.content}>
          <Input
            className={styles.input}
            cursorSpacing={20}
            confirmType="send"
            value={inputValue}
            onChange={(v) => {
              setInputValue(v);
            }}
            onConfirm={async (e) => {
              const val = e.detail.value;
              sendMessage({
                chatId,
                type: MessageType['文本'],
                content: val,
                sender: info?.companyId,
              });
              // 清空输入框内容
              setInputValue('');
            }}
          />
          <Icon
            className={styles.upload}
            name="ImageOutLined"
            size={18}
            onClick={sendImage}
          />
        </View>
      </View>
    </View>
  );
};

export default Page;
