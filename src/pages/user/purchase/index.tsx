import { Button, Tabs } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { stopPullDownRefresh, usePullDownRefresh } from '@tarojs/taro';
import { useRef, useState } from 'react';

import styles from './index.module.scss';

import type { GetPurchaseSelfResponse } from '@/api';
import type { ActionType } from '@/components/List';
import type { ReactNode } from 'react';

import {
  deletePurchaseId,
  getPurchaseSelf,
  putPurchaseAccomplishId,
  putPurchaseAuditCancelId,
} from '@/api';
import { Affix, List, Product, Space, Tag } from '@/components';
import { PurchaseStatus } from '@/constants/purchase';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

interface TabOption {
  title: string;
  value: PurchaseStatus;
  extra?: (item: GetPurchaseSelfResponse['list'][0]) => ReactNode;
  actions?: (item: GetPurchaseSelfResponse['list'][0]) => ReactNode[];
}

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 下拉刷新
  usePullDownRefresh(async () => {
    await actionRef.current?.refresh({ status: tabs[currentIndex].value });
    stopPullDownRefresh();
  });

  // 取消审核
  const { run: cancelAudit } = useRequest(putPurchaseAuditCancelId, {
    manual: true,
    onSuccess() {
      Toast.success('取消成功');
      actionRef.current?.refresh({ status: tabs[currentIndex].value });
    },
  });

  // 求购成功
  const { run: accomplishPurchase } = useRequest(putPurchaseAccomplishId, {
    manual: true,
    onSuccess() {
      Toast.success('操作成功');
      actionRef.current?.refresh({ status: tabs[currentIndex].value });
    },
  });

  // 删除求购
  const { run: deletePurchase } = useRequest(deletePurchaseId, {
    manual: true,
    onSuccess() {
      Toast.success('删除成功');
      actionRef.current?.refresh({ status: tabs[currentIndex].value });
    },
  });

  const {
    renderDialog: renderCancelAuditConfirmDialog,
    open: openCancelAuditConfirmDialog,
  } = useDialog({
    id: 'cancel-audit-confirm',
    title: '确定取消吗，取消后将会删除此次求购',
    onConfirm(_, params) {
      cancelAudit(params);
    },
  });

  const {
    renderDialog: renderAccomplishConfirmDialog,
    open: openAccomplishConfirmDialog,
  } = useDialog({
    id: 'accomplish-confirm',
    title: '确定完成此次求购吗',
    onConfirm(_, params) {
      accomplishPurchase(params);
    },
  });

  const { renderDialog: renderDialogRemrk, open: openDialogRemark } = useDialog(
    {
      id: 'dialog-remark',
      hideCancelButton: true,
    },
  );

  const {
    renderDialog: renderDeleteConfirmDialog,
    open: openDeleteConfirmDialog,
  } = useDialog({
    id: 'delete-confirm',
    title: '确定删除此次求购吗',
    onConfirm(_, params) {
      deletePurchase(params);
    },
  });

  const tabs: TabOption[] = [
    {
      title: '求购中',
      value: PurchaseStatus['求购中'],
      extra(item) {
        return (
          <View className={styles['brief-footer-extra-feedback']}>
            <Text className={styles['brief-footer-extra-feedback-num']}>
              {item.quotations ?? 0}
            </Text>
            <Text className={styles['brief-footer-extra-feedback-text']}>
              人反馈
            </Text>
          </View>
        );
      },
      actions(item) {
        return [
          <Button
            key="del"
            size="small"
            onClick={() => {
              openDeleteConfirmDialog({ params: { id: item.id } });
            }}
          >
            删除
          </Button>,
          <Button
            key="finish"
            size="small"
            onClick={() => {
              openAccomplishConfirmDialog({ params: { id: item.id } });
            }}
          >
            求购成功
          </Button>,
          <Button
            key="edit"
            type="primary"
            size="small"
            onClick={() => {
              RouterUtil.navigateTo('/pages/purchase/action/index', {
                id: item.id,
              });
            }}
          >
            编辑
          </Button>,
        ];
      },
    },
    { title: '已完成', value: PurchaseStatus['已完成'] },
    {
      title: '审核中',
      value: PurchaseStatus['审核中'],
      actions: (item) => [
        <Button
          key="cancel"
          size="small"
          onClick={() => {
            openCancelAuditConfirmDialog({ params: { id: item.id } });
          }}
        >
          取消审核
        </Button>,
      ],
    },
    {
      title: '审核不通过',
      value: PurchaseStatus['审核不通过'],
      extra(item) {
        return (
          <Tag
            className={styles['brief-footer-extra-remark']}
            type="warning"
            border={false}
            onClick={() => {
              openDialogRemark({ content: item.remark });
            }}
          >
            {item.remark}
          </Tag>
        );
      },
      actions: (item) => [
        <Button
          key="del"
          size="small"
          onClick={() => {
            openDeleteConfirmDialog({ params: { id: item.id } });
          }}
        >
          删除
        </Button>,
        <Button
          key="edit"
          type="primary"
          size="small"
          onClick={() => {
            RouterUtil.navigateTo('/pages/purchase/action/index', {
              id: item.id,
            });
          }}
        >
          编辑
        </Button>,
      ],
    },
  ];

  return (
    <BasicLayout title="我求购的" back fill>
      <View className={styles.content}>
        <Tabs
          value={currentIndex}
          onChange={(index: number) => {
            setCurrentIndex(index);
          }}
        >
          {tabs.map((item) => (
            <Tabs.TabPane key={item.value} title={item.title} />
          ))}
        </Tabs>
        <View className={styles.body}>
          <List
            actionRef={actionRef}
            request={getPurchaseSelf}
            params={{ status: tabs[currentIndex].value }}
            column={1}
            renderItem={(item) => (
              <Product.Brief
                key={item.id}
                image={item?.picList?.[0]?.url}
                title={item?.title}
                leasePrice={
                  item.minLeasePrice || item.maxLeasePrice
                    ? [item.minLeasePrice, item.maxLeasePrice]
                    : undefined
                }
                sellingPrice={
                  item.minPrice || item.maxPrice
                    ? [item.minPrice, item.maxPrice]
                    : undefined
                }
                footer={
                  tabs[currentIndex].extra || tabs[currentIndex].actions ? (
                    <View className={styles['brief-footer']}>
                      <View>{tabs[currentIndex].extra?.(item)}</View>
                      <Space>{tabs[currentIndex].actions?.(item)}</Space>
                    </View>
                  ) : null
                }
                onClick={() => {
                  RouterUtil.navigateTo('/pages/purchase/detail/index', {
                    id: item.id,
                  });
                }}
              />
            )}
          />
        </View>
      </View>
      <Affix
        onClick={() => {
          RouterUtil.navigateTo('/pages/purchase/action/index');
        }}
      />
      {renderCancelAuditConfirmDialog()}
      {renderAccomplishConfirmDialog()}
      {renderDialogRemrk()}
      {renderDeleteConfirmDialog()}
    </BasicLayout>
  );
};

export default Page;
