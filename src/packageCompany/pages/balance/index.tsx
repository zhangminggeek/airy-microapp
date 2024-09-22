import { Text, View } from '@tarojs/components';
import dayjs from 'dayjs';
import { useState } from 'react';

import styles from './index.module.scss';

import { getCompanyBalanceRecord } from '@/api';
import { Filter, InfiniteList } from '@/components';
import { DATE_TIME_FORMAT } from '@/constants';
import { balanceRecordTypeMap, paymentTypeMap } from '@/constants/company';
import { BasicLayout } from '@/layouts';

const Page = () => {
  // 筛选条件
  const [condition, setCondition] = useState<Record<string, any>>();

  return (
    <BasicLayout title="明细" back fill>
      <InfiniteList
        params={condition}
        request={getCompanyBalanceRecord}
        combine
        header={
          <Filter
            fields={[
              {
                name: 'type',
                title: '类型',
                options: Array.from(balanceRecordTypeMap.values()),
              },
              {
                name: 'payment',
                title: '支付方式',
                options: Array.from(paymentTypeMap.values()),
              },
            ]}
            value={condition}
            onChange={(v) => {
              setCondition(v);
            }}
          />
        }
        headerFixed
        renderItem={(item) => (
          <View key={item.id} className={styles.item}>
            <View className={styles.left}>
              <View className={styles.title}>
                {balanceRecordTypeMap.get(item.type)?.text}
              </View>
              <View className={styles.desc}>
                {paymentTypeMap.get(item.payment)?.text}
              </View>
              <View className={styles.desc}>
                {dayjs(item.createTime).format(DATE_TIME_FORMAT)}
              </View>
            </View>
            <View className={styles.right}>
              <View
                className={styles.amount}
              >{`${item.mode === 1 ? '+' : '-'}${item.amount}`}</View>
              {item.serviceCharge && Number(item.serviceCharge) !== 0 ? (
                <View className={styles.charge}>
                  手续费：
                  <Text className={styles['charge-num']}>
                    {item.serviceCharge}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        )}
      />
    </BasicLayout>
  );
};

export default Page;
