import { Button, Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

import type { Prize } from '../interfaces';
import type { FC } from 'react';

import { getLotteryCount, postLottery } from '@/api';
import { Icon } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';
import { useRequest } from '@/hooks';
import { EventUtil, RouterUtil, Toast } from '@/utils';

interface MarqueeProps {
  prizes: Prize[];
  onFinish?: (id: number) => void;
}

const Marquee: FC<MarqueeProps> = ({ prizes, onFinish }) => {
  // 是否抽奖中
  const [isLottery, setIsLottery] = useState(false);
  // 当前选中项索引
  const [activeIndex, setActiveIndex] = useState<number>();
  // 中奖项id
  const [result, setResult] = useState<number>();

  // 定时器
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (
      result &&
      activeIndex !== undefined &&
      timer.current &&
      prizes?.[activeIndex]?.id === result
    ) {
      stop();
    }
  }, [prizes, activeIndex, result]);

  // 监听抽奖次数刷新事件
  EventUtil.useEvents(EventUtil.EventsKey.REFRESH_LOTTERY_COUNT, () => {
    fetchCount();
  });

  // 获取可抽奖次数
  const { data: count = 0, run: fetchCount } = useRequest(getLotteryCount);
  // 抽奖
  const { run } = useRequest(postLottery, {
    manual: true,
    onSuccess(res) {
      setTimeout(() => {
        setResult(res);
      }, 3000);
    },
    onError() {
      stop();
    },
  });

  // 开始抽奖
  const start = () => {
    if (isLottery) return;
    if (count <= 0) {
      Toast.info('可抽奖次数不足');
      return;
    }
    setIsLottery(true);
    timer.current = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === undefined) return 0;
        return prev >= 8 ? 0 : prev + 1;
      });
    }, 150);
    run();
  };

  // 结束抽奖
  const stop = () => {
    if (result) {
      onFinish?.(result);
    }
    setActiveIndex(undefined);
    setResult(undefined);
    setIsLottery(false);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  };

  return (
    <View
      className={styles.container}
      style={{
        background: `url(${OSS_ASSETS_DIR}/marquee_bg.png)`,
        backgroundSize: '100%',
      }}
    >
      <View className={styles.content}>
        <View className={styles.box1}>
          <View className={styles.box2}>
            <View className={styles.grid}>
              {prizes?.map((item, index) => (
                <View
                  key={item.id}
                  className={classnames(styles.item, {
                    [styles['item-active']]: activeIndex === index,
                  })}
                  style={{
                    backgroundImage:
                      index % 2 === 0
                        ? `url(${OSS_ASSETS_DIR}/marquee_item_bg_yellow.png)`
                        : `url(${OSS_ASSETS_DIR}/marquee_item_bg_pink.png)`,
                    backgroundSize: '100% 100%',
                  }}
                >
                  <Image
                    className={styles['item-image']}
                    src={item.pic}
                    width={40}
                    height={40}
                  />
                  <View className={styles['item-label']}>{item.name}</View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View className={styles.tip}>可抽奖：{count}次</View>
        <Button
          className={styles.btn}
          type="primary"
          color="linear-gradient(0deg, #FFD022 0%, #FFF055 100%)"
          size="large"
          onClick={start}
        >
          立即抽奖
        </Button>
        <View
          className={styles.link}
          onClick={() => {
            RouterUtil.navigateTo(
              '/packagePlatform/pages/activity/lottery/record/index',
            );
          }}
        >
          <View>我的奖品</View>
          <Icon name="RightFilled" size={12} color="#fe4320" />
        </View>
      </View>
    </View>
  );
};

export default Marquee;
