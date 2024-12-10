import { Button, Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import dayjs from 'dayjs';
import { useMemo } from 'react';

import styles from './index.module.scss';

import { getSign, postSign } from '@/api';
import { OSS_ASSETS_DIR } from '@/constants';
import { useRequest } from '@/hooks';
import { EventUtil, Toast } from '@/utils';

const options = [
  { label: '第1天', value: 1 },
  { label: '第2天', value: 2 },
  { label: '第3天', value: 3 },
  { label: '第4天', value: 4 },
  { label: '第5天', value: 5 },
  { label: '第6天', value: 6 },
  { label: '第7天', value: 7 },
];

const Sign = () => {
  // 获取签到数据
  const { data, run: fetchSign } = useRequest(getSign);

  // 签到
  const { run: sign } = useRequest(postSign, {
    manual: true,
    onSuccess() {
      Toast.success('签到成功');
      fetchSign();
      EventUtil.emit(EventUtil.EventsKey.REFRESH_LOTTERY_COUNT);
    },
  });

  // 判断时间是否在今日
  const isInToday = (d?: string) => {
    if (!d) return false;
    if (!dayjs(d).isValid()) return false;
    return (
      dayjs(d).isBefore(dayjs().endOf('day')) &&
      dayjs(d).isAfter(dayjs().startOf('day'))
    );
  };

  // 今日签到状态
  const hasSigned = useMemo(() => {
    const record = data?.find((item) => isInToday(item.createTime));
    return !!record;
  }, [data]);

  return (
    <View className={styles.container}>
      <View className={styles.group}>
        {options.map((item, index) => {
          const day = index + 1;
          // 轮次
          const round = Math.ceil(data?.length / 7);
          // 本轮签到数据（如果刚好签满一轮，且当前轮次最后一次签到时间不在今日，则不显示当前轮次；如果本轮最后一次签到时间在今日，则显示当前轮次全部数据）
          const signDataCurrentRound =
            data?.length % 7 === 0 && !isInToday(data?.[0]?.createTime)
              ? []
              : data?.slice((round - 1) * 7, round * 7) ?? [];
          // 是否已签到
          const isSigned = signDataCurrentRound?.length >= day;

          const renderText = () => {
            let text = '';
            if (day % 7 === 4 || day % 7 === 0) {
              text = '抽奖+1';
            } else if (isSigned) {
              text = '已签到';
            } else {
              text = '签到';
            }
            return <View className={styles['item-pic-text']}>{text}</View>;
          };

          return (
            <View
              key={item.value}
              className={classnames(styles.item, {
                [styles['item-signed']]: isSigned,
              })}
            >
              <View className={styles['item-pic']}>
                <Image
                  className={styles['item-pic-icon']}
                  src={
                    isSigned
                      ? `${OSS_ASSETS_DIR}/signed_icon.png`
                      : `${OSS_ASSETS_DIR}/sign_icon.png`
                  }
                  width={24}
                  height={24}
                />
                {renderText()}
              </View>
              <View className={styles['item-label']}>{item.label}</View>
            </View>
          );
        })}
      </View>
      <View className={styles['btn-wrapper']}>
        <Button
          className={styles.btn}
          type="primary"
          color="#FE4320"
          size="large"
          block
          disabled={hasSigned}
          onClick={() => {
            Toast.info('活动将于1月1日开放');
            return;
            sign();
          }}
        >
          {hasSigned ? '已签到' : '立即签到'}
        </Button>
      </View>
    </View>
  );
};

export default Sign;
