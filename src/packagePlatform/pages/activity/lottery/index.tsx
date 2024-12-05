import { View } from '@tarojs/components';
import { useState } from 'react';

import styles from './index.module.scss';
import Marquee from './Marquee';
import ModalPrize from './ModalPrize';
import Sign from './Sign';
import Task from './Task';

import type { Prize } from './interfaces';

import { getLotteryPrize } from '@/api';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';

const Page = () => {
  // 是否显示中奖弹窗
  const [showModalPrize, setShowModalPrize] = useState(false);
  // 奖品
  const [prize, setPrize] = useState<Prize>();

  // 获取奖品设置
  const { data: prizes } = useRequest(getLotteryPrize);

  return (
    <BasicLayout
      className={styles.container}
      transparent
      fill
      back
      safeArea={false}
    >
      <Marquee
        prizes={prizes}
        onFinish={(id) => {
          setShowModalPrize(true);
          setPrize(prizes?.find((item) => item.id === id));
        }}
      />
      <View className={styles.main}>
        <Sign />
        <Task style={{ marginTop: 12 }} />
      </View>
      <ModalPrize
        visible={showModalPrize}
        prize={prize}
        onOk={() => {
          setShowModalPrize(false);
        }}
        onClose={() => {
          setShowModalPrize(false);
        }}
      />
    </BasicLayout>
  );
};

export default Page;
