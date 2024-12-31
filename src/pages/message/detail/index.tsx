import { Image, Input } from '@nutui/nutui-react-taro';
import { ScrollView, View } from '@tarojs/components';
import { previewImage, setNavigationBarTitle, useRouter } from '@tarojs/taro';
import classnames from 'classnames';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import { MessageType } from '../contants';

import styles from './index.module.scss';

import { getChatId, getChatMessageWithPage } from '@/api';
import { Avatar } from '@/components';
import { DATE_TIME_FORMAT } from '@/constants';
import { useRequest, useWebSocket } from '@/hooks';
import { WebSocketEvent, WebSocketMessage } from '@/hooks/useWebSocket';
import { useChatStore, useUserStore } from '@/models';
import { parseJson, Toast } from '@/utils';
import { WebSocketWrapper } from '@/wrappers';

const Page = () => {
  const { id } = useRouter().params;
  const { info } = useUserStore((state) => state);
  const { messages, updateChat, addMessage, mergeMessages, setMessages } =
    useChatStore((state) => state);
  const chatId = Number(id);

  // 对话消息总数
  const [total, setTotal] = useState<number>(0);
  // 滚动内容高度
  const [scrollTop, setScrollTop] = useState<number>(9999);
  // 输入内容
  const [inputValue, setInputValue] = useState<string>('');
  // 刷新状态
  const [loading, setLoading] = useState<boolean>(false);

  const { ws, send } = useWebSocket();

  useEffect(() => {
    // 获取初始聊天内容
    getChatMessageWithPage({ chatId: `${chatId}` }).then((res) => {
      setMessages(res.data?.list);
      setTotal(res.data?.total);
      // 获取到聊天内容后，滚动条到最底部
      setScrollTop((prev) => prev + 1);
    });
    // 加入聊天通道
    send(WebSocketEvent.JOIN_CHAT, {
      chatId,
      companyId: info?.companyId,
    });
    // 处理接受事件
    ws?.onMessage(async (res) => {
      console.log('onMessage', res);
      const { event, data } = parseJson<WebSocketMessage>(res.data);
      if (event === WebSocketEvent.JOIN_CHAT && data === false) {
        Toast.info('网络异常');
      }
      if (event === WebSocketEvent.CHAT_BROADCAST) {
        // 接受消息广播
        const { message, count } = data;
        addMessage(message);
        setTotal(count);
        // 修改对话的更新时间
        updateChat(chatId, {
          message,
          updateTime: dayjs().format(DATE_TIME_FORMAT),
        });
        // 保证滚动条始终在最底部
        setScrollTop((prev) => prev + 1);
      }
    });

    return () => {
      // 退出聊天通道
      send(WebSocketEvent.LEAVE_CHAT, {
        chatId,
        companyId: info?.companyId,
      });
    };
  }, []);

  // 获取对话详情
  const { data } = useRequest(getChatId, {
    defaultParams: { id: `${chatId}` },
    onSuccess(res) {
      const { initiatorCompany, receiverCompany } = res ?? {};
      const target =
        initiatorCompany?.id === info?.companyId
          ? receiverCompany
          : initiatorCompany;
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

  return (
    <WebSocketWrapper>
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

            const val =
              type === MessageType['文本'] ? (
                <View className={styles['bubble-content-text']}>{content}</View>
              ) : (
                <Image
                  className={styles['bubble-content-image']}
                  src={content}
                  width={120}
                  height={120}
                  mode="aspectFit"
                  onClick={() => {
                    previewImage({ urls: [content] });
                  }}
                />
              );

            const company =
              data?.initiatorCompany?.id === sender
                ? data?.initiatorCompany
                : data?.receiverCompany;

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
                send(WebSocketEvent.CHAT_MESSAGE, {
                  chatId,
                  type: MessageType['文本'],
                  content: val,
                  sender: info?.companyId,
                });
                // 清空输入框内容
                setInputValue('');
              }}
            />
          </View>
        </View>
      </View>
    </WebSocketWrapper>
  );
};

export default Page;
