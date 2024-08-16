import { View } from '@tarojs/components';
import { stopPullDownRefresh, usePullDownRefresh } from '@tarojs/taro';
import dayjs from 'dayjs';
import { useRef } from 'react';

import styles from './index.module.scss';

import type { ActionType } from '@/components/List';

import { getCompanyWithdraw } from '@/api';
import { List } from '@/components';
import { DATE_TIME_FORMAT } from '@/constants';
import {
  CompanyPaymentStatus,
  companyPaymentStatusMap,
  companyPaymentTypeMap,
} from '@/constants/company';
import { BasicLayout } from '@/layouts';

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh();
    stopPullDownRefresh();
  });

  return (
    <BasicLayout title="提现记录" back>
      <View className={styles.content}>
        <View className={styles.body}>
          <List
            className={styles.list}
            actionRef={actionRef}
            request={getCompanyWithdraw}
            column={1}
            renderItem={(item) => (
              <View className={styles.record}>
                <View className={styles['record-content']}>
                  <View className={styles['record-info']}>
                    <View
                      className={styles['record-info-title']}
                    >{`${companyPaymentTypeMap.get(item.type)?.text ?? ''}提现`}</View>
                    <View className={styles['record-info-time']}>
                      申请时间:{dayjs(item.createTime).format(DATE_TIME_FORMAT)}
                    </View>
                    <View className={styles['record-info-remark']}>
                      {item.status === CompanyPaymentStatus['已拒绝']
                        ? `拒绝原因: ${item.remark ?? ''}`
                        : companyPaymentStatusMap.get(item.status)?.text}
                    </View>
                  </View>
                  <View
                    className={styles['record-amount']}
                  >{`-${item.amount ?? 0}`}</View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </BasicLayout>
  );
};

export default Page;
