import { Button, Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { setClipboardData, useShareAppMessage } from '@tarojs/taro';
import Big from 'big.js';
import { useMemo } from 'react';

import { InvitationStatus } from './constants';
import styles from './index.module.scss';

import { getCompanyInvitation, getCompanySelf } from '@/api';
import { Avatar, Icon, Space } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';
import { useRequest } from '@/hooks';
import { ShareType } from '@/hooks/useShare';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { Toast } from '@/utils';

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

  // 获取当前企业信息
  const { data } = useRequest(getCompanySelf);

  // 获取邀请的公司列表
  const { data: invitationList } = useRequest(getCompanyInvitation);

  const statistics = useMemo(() => {
    const total = invitationList?.length ?? 0;
    const deal =
      invitationList?.filter(
        (item) => item.status === InvitationStatus['完成首笔交易'],
      )?.length ?? 0;
    return { total, deal };
  }, [invitationList]);

  const steps = [
    { content: '分享链接至聊天群/朋友圈/好友' },
    {
      content: (
        <View>
          好友注册并<Text style={{ color: '#E01A06' }}>完成首笔</Text>
          任意金额交易
        </View>
      ),
    },
    { content: '收到10元奖励，累计100元将自动划转至余额，可进行提现' },
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
            <View className={styles['invitation-code']}>
              我的邀请码：{data?.invitationCode}
              <Icon
                className={styles['invitation-code-icon']}
                name="CopyOutlined"
                size={14}
                onClick={async () => {
                  await setClipboardData({ data: data?.invitationCode });
                  Toast.info('邀请码复制成功');
                }}
              />
            </View>
          </View>
          <View className={styles.result}>
            <View className={styles['result-title']}>
              累计奖励：
              <Text className={styles['result-title-num']}>
                ¥{Big(statistics.deal).times(10).toString()}
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
            {invitationList?.map((item) => (
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
                        {item.status === InvitationStatus['完成首笔交易'] ? (
                          <Text>完成首笔交易</Text>
                        ) : null}
                      </Space>
                    </View>
                  </View>
                  {item.status === InvitationStatus['完成首笔交易'] ? (
                    <View className={styles['list-item-amount']}>¥10</View>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Page;
