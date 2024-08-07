import { Button, Tabs } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow, useRouter, useShareAppMessage } from '@tarojs/taro';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';

import { getCompanyId, getMarket, postCompanyFollowToggle } from '@/api';
import ImageLogo from '@/assets/logo.svg';
import { Avatar, Icon, List, Product, Space } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';
import { MarketProductStatus } from '@/constants/market';
import { productTypeMap } from '@/constants/product';
import { useDialog, useRequest } from '@/hooks';
import { ShareType } from '@/hooks/useShare';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;
  const { info } = useUserStore((state) => state);

  const [tabIndex, setTabIndex] = useState<number>(0);

  useDidShow(() => {
    if (!id) return;
    fetchCompany({ id });
  });

  useShareAppMessage(() => {
    // 来自页面转发分享
    return {
      title: data?.name,
      path: `/pages/market/index/index?shareType=${ShareType.COMPANY}&shareParams=${JSON.stringify({ id })}`,
      imageUrl: data?.logo ?? ImageLogo,
    };
  });

  const { renderDialog, open } = useDialog({
    id: 'confirm',
    title: '是否确认取消关注',
    onConfirm(_, params) {
      toggleFollow({ id: params.id, isFollow: false });
    },
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
        style={{ background: '#fff', color: '#c7c7c7' }}
        size="small"
        onClick={() => {
          open({ params: { id: companyId } });
        }}
      >
        已关注
      </Button>
    ) : (
      <Button
        style={{ background: '#fff' }}
        type="primary"
        fill="none"
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
    <BasicLayout
      className={styles.container}
      style={{
        background: `url(${OSS_ASSETS_DIR}/company_bg.jpg)`,
        backgroundSize: '100% 100%',
      }}
      back
      fill
      transparent
      safeArea={false}
    >
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
      </View>
      <View className={styles.body}>
        <View className={styles.top}>
          <View className={styles.intro}>{data?.intro ?? '暂无介绍～'}</View>
          <Button
            className={styles['btn-share']}
            icon={<Icon name="ShareOneOutlined" size={14} />}
            size="mini"
            fill="none"
            openType="share"
          >
            分享
          </Button>
        </View>
        <Tabs
          className={styles.tabs}
          align="left"
          value={tabIndex}
          onChange={(value: number) => {
            setTabIndex(value);
          }}
        >
          <Tabs.TabPane title="全部" />
          {Array.from(productTypeMap.values()).map((item) => (
            <Tabs.TabPane title={item.text} key={item.value} />
          ))}
        </Tabs>
        <View className={styles.list}>
          <List
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
                extra={{ icon: 'LoveOutlined', text: item.favorities }}
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
      {renderDialog()}
    </BasicLayout>
  );
};

export default Page;
