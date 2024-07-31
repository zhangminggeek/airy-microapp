import { Button, Tabs } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useShareAppMessage } from '@tarojs/taro';
import { useRef, useState } from 'react';

import styles from './index.module.scss';

import type { GetMarketResponse } from '@/api';
import type { ActionType } from '@/components/List';
import type { ReactNode } from 'react';

import {
  deleteMarketAuditId,
  deleteMarketId,
  getMarketMyPublished,
  putMarketShelvesOff,
  putMarketShelvesOn,
} from '@/api';
import ImageLogo from '@/assets/logo.svg';
import { ActionSheet, Affix, List, Product, Space, Tag } from '@/components';
import { MarketProductStatus } from '@/constants/market';
import { ProductSource } from '@/constants/product';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

interface TabOption {
  title: string;
  value: MarketProductStatus;
  extra?: (item: GetMarketResponse['list'][0]) => ReactNode;
  actions: (item: GetMarketResponse['list'][0]) => ReactNode[];
}

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useShareAppMessage(({ from, target }) => {
    if (from === 'button') {
      // @ts-expect-error: dataset is in target
      const info = target?.dataset;
      // 来自页面转发分享
      return {
        title: info?.title,
        path: `/pages/market/detail/index?id=${info.id}`,
        imageUrl: info.image,
      };
    }
    return {
      title: 'AIRYBLUE',
      path: `/pages/security/index`,
      imageUrl: ImageLogo,
    };
  });

  // 上架
  const { run: onShelves } = useRequest(putMarketShelvesOn, {
    manual: true,
    onSuccess() {
      Toast.success('上架成功');
      actionRef.current?.refresh();
    },
  });

  // 下架
  const { run: offShelves } = useRequest(putMarketShelvesOff, {
    manual: true,
    onSuccess() {
      Toast.success('下架成功');
      actionRef.current?.refresh();
    },
  });

  // 删除服饰
  const { run: deleteMarket } = useRequest(deleteMarketId, {
    manual: true,
    onSuccess() {
      Toast.success('删除成功');
      actionRef.current?.refresh();
    },
  });

  // 取消审核
  const { run: cancelAudit } = useRequest(deleteMarketAuditId, {
    manual: true,
    onSuccess() {
      Toast.success('取消审核成功');
      actionRef.current?.refresh();
    },
  });

  // 下架二次确认
  const { renderDialog: renderDialogTakeDown, open: openDialogTakeDown } =
    useDialog({
      id: 'dialog-take-down',
      content: '确定下架该服饰吗？',
      onConfirm: (_, params) => {
        offShelves({ id: params.id });
      },
    });

  // 删除二次确认
  const { renderDialog: renderDialogDelete, open: openDialogDelete } =
    useDialog({
      id: 'dialog-delete',
      content: '确定删除该服饰吗？',
      onConfirm: (_, params) => {
        deleteMarket({ id: params.id });
      },
    });

  const { renderDialog: renderDialogRemrk, open: openDialogRemark } = useDialog(
    {
      id: 'dialog-remark',
      hideCancelButton: true,
    },
  );

  const tabs: TabOption[] = [
    {
      title: '在售',
      value: MarketProductStatus['在售'],
      extra: (item) => (
        <View className={styles.favorite}>
          <Text className={styles['favorite-count']}>
            {item.favorities ?? 0}
          </Text>
          <Text className={styles['favorite-text']}>人收藏</Text>
        </View>
      ),
      actions: (item) => [
        <Button
          key="share"
          size="small"
          openType="share"
          data-id={item.id}
          data-title={item.title}
          data-image={item.product?.picList?.[0]?.url}
        >
          分享
        </Button>,
        <Button
          key="take-down"
          size="small"
          onClick={() => {
            openDialogTakeDown({ params: { id: item.id } });
          }}
        >
          下架
        </Button>,
        <Button
          key="edit"
          type="primary"
          size="small"
          onClick={() => {
            RouterUtil.navigateTo('/pages/market/action/index', {
              id: item.id,
            });
          }}
        >
          编辑
        </Button>,
      ],
    },
    {
      title: '已下架',
      value: MarketProductStatus['已下架'],
      actions: (item) => [
        <Button
          key="del"
          size="small"
          onClick={() => {
            openDialogDelete({ params: { id: item.id } });
          }}
        >
          删除
        </Button>,
        <Button
          key="re-listing"
          size="small"
          onClick={() => {
            onShelves({ id: item.id });
          }}
        >
          重新上架
        </Button>,
        <Button
          key="edit"
          type="primary"
          size="small"
          onClick={() => {
            RouterUtil.navigateTo('/pages/market/action/index', {
              id: item.id,
            });
          }}
        >
          编辑
        </Button>,
      ],
    },
    {
      title: '审核中',
      value: MarketProductStatus['审核中'],
      actions: (item) => [
        <Button
          key="cancel-audit"
          size="small"
          onClick={() => {
            cancelAudit({ id: `${item.id}` });
          }}
        >
          取消审核
        </Button>,
      ],
    },
    {
      title: '未通过',
      value: MarketProductStatus['未通过'],
      extra: (item) => (
        <Tag
          className={styles.remark}
          type="warning"
          border={false}
          onClick={() => {
            openDialogRemark({ content: item.remark });
          }}
        >
          {item.remark}
        </Tag>
      ),
      actions: (item) => [
        <Button
          key="del"
          size="small"
          onClick={() => {
            openDialogDelete({ params: { id: item.id } });
          }}
        >
          删除
        </Button>,
        <Button
          key="edit"
          type="primary"
          size="small"
          onClick={() => {
            RouterUtil.navigateTo('/pages/market/action/index', {
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
    <BasicLayout title="我发布的" back fill share={false}>
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
            request={getMarketMyPublished}
            params={{ status: tabs[currentIndex].value }}
            column={1}
            renderItem={(item) => (
              <Product.Brief
                key={item.id}
                image={item.product?.picList?.[0]?.url}
                title={item.title}
                desc={item.description}
                leasePrice={item.leasePrice}
                sellingPrice={item.sellingPrice}
                footer={
                  <View className={styles['brief-footer']}>
                    <View className={styles['brief-footer-extra']}>
                      {tabs[currentIndex].extra?.(item)}
                    </View>
                    <Space className={styles['brief-footer-actions']} size={12}>
                      {tabs[currentIndex].actions?.(item)}
                    </Space>
                  </View>
                }
                onClick={() => {
                  RouterUtil.navigateTo('/pages/market/detail/index', {
                    id: item.id,
                  });
                }}
              />
            )}
          />
        </View>
      </View>
      <ActionSheet
        options={[
          { name: '从服装管理中选择', key: ProductSource['服装管理'] },
          { name: '从相册中选择', key: ProductSource['相册'] },
        ]}
        onSelect={(option) => {
          RouterUtil.navigateTo('/pages/market/action/index', {
            source: option.key,
          });
        }}
      >
        <Affix />
      </ActionSheet>
      {renderDialogTakeDown()}
      {renderDialogDelete()}
      {renderDialogRemrk()}
    </BasicLayout>
  );
};

export default Page;
