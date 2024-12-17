import { Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useShareAppMessage } from '@tarojs/taro';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';

import { getCompanySaleRule, getMarket } from '@/api';
import { InfiniteList, Product } from '@/components';
import { HIDE_PRICE } from '@/constants';
import { MarketProductStatus } from '@/constants/market';
import { productTypeMap } from '@/constants/product';
import { useRequest } from '@/hooks';
import { ShareType } from '@/hooks/useShareEvent';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { info } = useUserStore((state) => state);

  // tabs 选中索引
  const [tabIndex, setTabIndex] = useState<number>(0);

  useShareAppMessage(() => {
    // 来自页面转发分享
    return {
      title: '婚纱礼服清仓特卖专区',
      path: `/pages/market/index/index?shareType=${ShareType.SALE}&shareParams=${JSON.stringify({ invitationCode: info?.company?.invitationCode })}`,
    };
  });

  // 获取特卖规则
  const { data: rule } = useRequest(getCompanySaleRule);

  const notice = useMemo(() => {
    const { count, time } = rule ?? {};
    const [num, unit] = time?.split('') ?? [];
    const unitMap = {
      d: '天',
      w: '周',
      m: '月',
      y: '年',
    };
    return `每人每${(num === '1' ? '' : num) ?? ''}${unitMap[unit] ?? ''}同一店铺限购${count ?? 1}件`;
  }, [rule]);

  return (
    <BasicLayout className={styles.container} title="特卖区" back fill>
      <InfiniteList
        className={styles.list}
        request={getMarket}
        params={{
          status: `${MarketProductStatus['在售']}`,
          onSale: '1',
          productTypeCode:
            tabIndex === 0
              ? undefined
              : Array.from(productTypeMap.values())[tabIndex! - 1]?.value,
        }}
        headerFixed
        header={
          <View>
            <View className={styles.notice}>{notice}</View>
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
          </View>
        }
        column="multiple"
        renderItem={(item) => (
          <Product.Card
            key={item.id}
            image={item.product?.picList?.[0]?.url}
            title={item.title}
            tagList={item.product?.tagList?.map((item) => item.tag.name)}
            allowSell={item.allowSell}
            allowLease={item.allowLease}
            leasePrice={info?.account ? item.leasePrice : HIDE_PRICE}
            sellingPrice={info?.account ? item.sellingPrice : HIDE_PRICE}
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
      />
    </BasicLayout>
  );
};

export default Page;
