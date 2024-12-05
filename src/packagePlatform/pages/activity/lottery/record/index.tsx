import { Button, Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useRef, useState } from 'react';

import styles from './index.module.scss';

import type { ActionType } from '@/components/InfiniteList';

import { getLotteryWithPage, putLotteryAddress } from '@/api';
import { InfiniteList } from '@/components';
import useAddressPopup from '@/components/Picker/AddressPicker/useAddressPopup';
import { LotteryPrizeType, LotteryRecordStatus } from '@/constants/activity';
import { useAddress, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  // 是否展示地址选择弹出层
  const [showAddressPopup, setShowAddressPopup] = useState<boolean>(false);
  // 当前操作的记录id
  const [recordId, setRecordId] = useState<number>();

  // 修改地址
  const { run: putLotteryAddressRun } = useRequest(putLotteryAddress, {
    manual: true,
    onSuccess() {
      actionRef.current?.refresh();
    },
  });

  const { combine } = useAddress({});

  // 地址选择弹出层
  const { popup } = useAddressPopup({
    visible: showAddressPopup,
    onChange: (addressId) => {
      if (recordId) {
        putLotteryAddressRun({ id: recordId, addressId });
      }
    },
    onClose: () => {
      setShowAddressPopup(false);
      setRecordId(undefined);
    },
  });

  return (
    <BasicLayout
      className={styles.container}
      title="我的奖品"
      back
      safeArea={false}
    >
      <InfiniteList
        actionRef={actionRef}
        request={getLotteryWithPage}
        renderItem={(item) => {
          const { id, prize, address: addr, status } = item;
          const renderDesc = () => {
            if (prize.type === LotteryPrizeType['现金']) {
              return '已发放';
            } else if (prize.type === LotteryPrizeType['实物']) {
              const { recipient, phone, province, city, area, address } =
                addr ?? ({} as any);
              return addr
                ? `${recipient ?? ''} ${phone ?? ''} ${combine({ province, city, area, address })}`
                : '邮费到付';
            }
            return '';
          };
          return (
            <View className={styles.record} key={id}>
              <Image
                className={styles['record-image']}
                src={prize.pic}
                width={48}
                height={48}
              />
              <View className={styles['record-content']}>
                <View className={styles['record-content-title']}>
                  {prize.name}
                </View>
                <View className={styles['record-content-desc']}>
                  {renderDesc()}
                </View>
              </View>
              {status === LotteryRecordStatus['未发放'] && !addr ? (
                <Button
                  className={styles['record-button']}
                  type="primary"
                  onClick={() => {
                    setRecordId(id);
                    setShowAddressPopup(true);
                  }}
                >
                  收货地址
                </Button>
              ) : null}
            </View>
          );
        }}
      />
      {popup}
    </BasicLayout>
  );
};

export default Page;
