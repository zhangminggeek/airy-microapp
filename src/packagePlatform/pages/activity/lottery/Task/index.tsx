import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useShareAppMessage } from '@tarojs/taro';
import classnames from 'classnames';

import styles from './index.module.scss';
import Item from './Item';

import type { CSSProperties, FC } from 'react';

import { getLotteryTaskStatus } from '@/api';
import { OSS_ASSETS_DIR } from '@/constants';
import { InvitationTask } from '@/constants/company';
import { useRequest } from '@/hooks';
import { ShareType } from '@/hooks/useShareEvent';
import { useUserStore } from '@/models';
import { verifyBin } from '@/utils';

interface TaskProps {
  className?: string;
  style?: CSSProperties;
}

const Task: FC<TaskProps> = ({ className, style }) => {
  const { info } = useUserStore((state) => state);

  useShareAppMessage(() => {
    // 来自页面转发分享
    return {
      title: '超值好物高质量二手婚纱尽在易纱集',
      path: `/pages/market/index/index?shareType=${ShareType.INVITATION}&shareParams=${JSON.stringify({ invitationCode: info?.company?.invitationCode })}`,
      imageUrl: `${OSS_ASSETS_DIR}/invitation_share.jpg`,
    };
  });

  // 获取任务状态
  const { data } = useRequest(getLotteryTaskStatus);

  return (
    <View className={classnames(styles.container, className)} style={style}>
      <View className={styles.title}>做任务获得抽奖机会</View>
      <View className={styles.list}>
        <Item
          title="首次上架服装"
          desc="获得1次抽奖机会"
          completed={verifyBin(data, InvitationTask['上架服装'])}
        />
        <Item
          title="完成首笔交易"
          desc="获得1次抽奖机会"
          completed={verifyBin(data, InvitationTask['完成首笔交易'])}
        />
        <Item
          title="上传营业执照"
          desc="获得1次抽奖机会"
          completed={verifyBin(data, InvitationTask['上传营业执照'])}
        />
        <Item
          title="每邀请新用户注册"
          desc="获得1次抽奖机会"
          extra={
            <Button
              type="primary"
              size="small"
              color="#FE4320"
              openType="share"
            >
              去邀请
            </Button>
          }
        />
      </View>
    </View>
  );
};

export default Task;
