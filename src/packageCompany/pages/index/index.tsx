import { Button, Tabs } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow, useRouter, useShareAppMessage } from '@tarojs/taro';
import { useMemo, useRef, useState } from 'react';

import styles from './index.module.scss';

import type { ActionType } from '@/components/List';

import { getCompanyId, getMarket, postCompanyFollowToggle } from '@/api';
import { Avatar, Icon, List, Product, Space } from '@/components';
import { MarketProductStatus } from '@/constants/market';
import { productTypeMap } from '@/constants/product';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;
  const { info } = useUserStore((state) => state);
  const actionRef = useRef<ActionType>(null);

  const [tabIndex, setTabIndex] = useState<number>(0);

  useDidShow(() => {
    if (!id) return;
    fetchCompany({ id });
  });

  useShareAppMessage(() => {
    // 来自页面转发分享
    return {
      title: data?.name,
      path: `/packageCompany/pages/index/index?id=${id}`,
      imageUrl: '',
    };
  });

  // 获取公司详情
  const { data, run: fetchCompany } = useRequest(getCompanyId, {
    manual: true,
  });

  // 切换关注
  const { run: toggleFollow } = useRequest(postCompanyFollowToggle, {
    manual: true,
    onSuccess: () => {
      fetchCompany({ id: `${id}` });
    },
  });

  const followBtn = useMemo(() => {
    const companyId = Number(id);
    if (companyId === info?.companyId) return null;
    return data?.follewed ? (
      <Button
        size="small"
        onClick={() => {
          toggleFollow({ id: Number(id), isFollow: false });
        }}
      >
        已关注
      </Button>
    ) : (
      <Button
        type="primary"
        fill="outline"
        size="small"
        onClick={() => {
          toggleFollow({ id: Number(id), isFollow: true });
        }}
      >
        关注
      </Button>
    );
  }, [id, info, data]);

  return (
    <BasicLayout back fill>
      <View className={styles['header-wrapper']}>
        <View className={styles.header}>
          <View className={styles.top}>
            <Avatar
              className={styles.logo}
              src={data?.logo}
              name={data?.name}
              size="64"
            />
            <View className={styles.content}>
              <View className={styles.name}>{data?.name}</View>
              <Space className={styles.info} split>
                <Text className={styles['info-item']}>
                  已卖出{data?.sold ?? 0}件
                </Text>
                <Text className={styles['info-item']}>
                  {data?.fansCount ?? 0}粉丝
                </Text>
              </Space>
            </View>
            {followBtn}
          </View>
          <View className={styles.bottom}>
            <View className={styles.intro}>{data?.intro ?? '暂无介绍～'}</View>
            <Button
              icon={<Icon name="ShareOneOutlined" size={14} />}
              size="small"
              fill="none"
              openType="share"
            >
              分享
            </Button>
          </View>
        </View>
      </View>
      <View className={styles.body}>
        <Tabs
          className={styles.tabs}
          activeType="button"
          align="left"
          value={tabIndex}
          onChange={(value: number) => {
            setTabIndex(value);
          }}
        >
          <Tabs.TabPane title="全部"></Tabs.TabPane>
          {Array.from(productTypeMap.values()).map((item) => (
            <Tabs.TabPane title={item.text}></Tabs.TabPane>
          ))}
        </Tabs>
        <View className={styles.list}>
          <List
            actionRef={actionRef}
            request={getMarket}
            params={{
              status: MarketProductStatus['在售'],
              companyId: id,
              productTypeCode:
                tabIndex === 0
                  ? undefined
                  : Array.from(productTypeMap.values())[tabIndex! - 1]?.value,
            }}
            renderItem={(item) => (
              <Product.Card
                key={item.id}
                image={item.product?.picList?.[0]?.url}
                title={item.title}
                tagList={item.product?.tagList?.map((item) => item.tag.name)}
                leasePrice={item.leasePrice}
                sellingPrice={item.sellingPrice}
                companyLogo={item.companyLogo}
                companyName={item.companyName}
                favorites={item.favorities}
                onClick={() => {
                  RouterUtil.navigateTo('/pages/market/detail/index', {
                    id: item.id,
                  });
                }}
              />
            )}
            fill
          />
        </View>
      </View>
    </BasicLayout>
  );
};

export default Page;
