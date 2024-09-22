import { View } from '@tarojs/components';
import dayjs from 'dayjs';

import styles from './index.module.scss';

import { getCompanyWithdraw } from '@/api';
import { InfiniteList } from '@/components';
import { DATE_TIME_FORMAT } from '@/constants';
import {
  CompanyPaymentStatus,
  companyPaymentStatusMap,
  companyPaymentTypeMap,
} from '@/constants/company';
import { BasicLayout } from '@/layouts';

const Page = () => {
  return (
    <BasicLayout title="提现记录" fill back>
      <InfiniteList
        request={getCompanyWithdraw}
        padding
        combine
        renderItem={(item) => (
          <View className={styles.item}>
            <View className={styles['item-content']}>
              <View className={styles['item-info']}>
                <View
                  className={styles['item-info-title']}
                >{`${companyPaymentTypeMap.get(item.type)?.text ?? ''}提现`}</View>
                <View className={styles['item-info-time']}>
                  申请时间:{dayjs(item.createTime).format(DATE_TIME_FORMAT)}
                </View>
                <View className={styles['item-info-remark']}>
                  {item.status === CompanyPaymentStatus['已拒绝']
                    ? `拒绝原因: ${item.remark ?? ''}`
                    : companyPaymentStatusMap.get(item.status)?.text}
                </View>
              </View>
              <View
                className={styles['item-amount']}
              >{`-${item.amount ?? 0}`}</View>
            </View>
          </View>
        )}
      />
    </BasicLayout>
  );
};

export default Page;
