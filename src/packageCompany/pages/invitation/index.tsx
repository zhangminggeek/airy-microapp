import { Button, Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useShareAppMessage } from '@tarojs/taro';
import Big from 'big.js';
import { useMemo } from 'react';

import { InvitationTask } from './constants';
import styles from './index.module.scss';

import { getCompanyInvitation } from '@/api';
import { Avatar, Space, Text } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';
import { useRequest } from '@/hooks';
import { ShareType } from '@/hooks/useShareEvent';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { bin2dec, Toast } from '@/utils';

const Page = () => {
  const { info } = useUserStore((state) => state);

  useShareAppMessage(() => {
    // 来自页面转发分享
    return {
      title: '超值好物高质量二手婚纱尽在AIRY',
      path: `/pages/market/index/index?shareType=${ShareType.INVITATION}&shareParams=${JSON.stringify({ invitationCode: info?.company?.invitationCode })}`,
      imageUrl: `${OSS_ASSETS_DIR}/invitation_share.jpg`,
    };
  });

  // 获取邀请的公司列表
  const { data: invitationList } = useRequest(getCompanyInvitation);

  // 验证是否完成任务
  const verifyTask = (n: string, m: string) =>
    (bin2dec(n) & bin2dec(m)) === bin2dec(m);

  // 统计邀请情况
  const statistics = useMemo(() => {
    // 邀请总数
    const total = invitationList?.length ?? 0;
    // 关注公众号
    const followed =
      invitationList?.filter((item) =>
        verifyTask(item.taskStatus, InvitationTask['关注公众号']),
      )?.length ?? 0;
    // 完成首笔交易
    const deal =
      invitationList?.filter((item) =>
        verifyTask(item.taskStatus, InvitationTask['完成首笔交易']),
      )?.length ?? 0;
    return { total, followed, deal };
  }, [invitationList]);

  const steps = [
    { content: '分享链接至聊天群/朋友圈/好友' },
    { content: '好友注册并关注公众号即可获得5元奖励，完成首笔交易再得5元' },
    { content: '累计50元将自动划转至余额，可进行提现' },
  ];

  return (
    <BasicLayout title="邀请有礼" back fill>
      <View
        className={styles.content}
        style={{
          backgroundImage: `url(${OSS_ASSETS_DIR}/invitation_bg.jpg)`,
        }}
      >
        <View className={styles.body}>
          <View className={styles.notice}>
            <Image
              className={styles['notice-title']}
              src={`${OSS_ASSETS_DIR}/invitation_step_title.png`}
              width={145}
              height={36}
            />
            <View className={styles.steps}>
              {steps.map((item, index) => (
                <View key={index} className={styles['steps-item']}>
                  <View className={styles['steps-item-index']}>
                    {index + 1}
                  </View>
                  <View className={styles['steps-item-content']}>
                    {item.content}
                  </View>
                </View>
              ))}
            </View>
            <Button
              className={styles['notice-btn']}
              openType="share"
              size="large"
              block
            >
              立即邀请
            </Button>
            <Text.Copy
              className={styles['invitation-code']}
              text={`我的邀请码：${info?.company?.invitationCode}`}
              value={info?.company?.invitationCode}
              onCopied={() => {
                Toast.info('邀请码复制成功');
              }}
            />
          </View>
          <View className={styles.result}>
            <View className={styles['result-title']}>
              累计奖励：
              <Text className={styles['result-title-num']}>
                ¥
                {Big(statistics.deal)
                  .times(5)
                  .plus(Big(statistics.followed).times(5))
                  .toString()}
              </Text>
            </View>
            <View className={styles['result-statistics']}>
              <View className={styles['result-statistics-item']}>
                <View className={styles['result-statistics-item-content']}>
                  {statistics.total}
                </View>
                <View className={styles['result-statistics-item-label']}>
                  邀请总数
                </View>
              </View>
              <View className={styles['result-statistics-item']}>
                <View className={styles['result-statistics-item-content']}>
                  {statistics.deal}
                </View>
                <View className={styles['result-statistics-item-label']}>
                  完成首笔交易
                </View>
              </View>
            </View>
          </View>
          <View className={styles.list}>
            {invitationList?.map((item) => {
              let award = 0;
              if (verifyTask(item.taskStatus, InvitationTask['关注公众号'])) {
                award += 5;
              }
              if (verifyTask(item.taskStatus, InvitationTask['完成首笔交易'])) {
                award += 5;
              }
              return (
                <View key={item.id} className={styles['list-item']}>
                  <Avatar
                    className={styles['list-item-avatar']}
                    src={item.logo}
                    name={item.name}
                  />
                  <View className={styles['list-item-content']}>
                    <View className={styles['list-item-content-info']}>
                      <View className={styles['list-item-name']}>
                        {item.name}
                      </View>
                      <View className={styles['list-item-status']}>
                        <Space size={12}>
                          <Text>已注册</Text>
                          {verifyTask(
                            item.taskStatus,
                            InvitationTask['关注公众号'],
                          ) ? (
                            <Text>已关注公众号</Text>
                          ) : null}
                          {verifyTask(
                            item.taskStatus,
                            InvitationTask['完成首笔交易'],
                          ) ? (
                            <Text>完成首笔交易</Text>
                          ) : null}
                        </Space>
                      </View>
                    </View>
                    {award ? (
                      <View className={styles['list-item-amount']}>
                        ¥{award}
                      </View>
                    ) : null}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Page;
