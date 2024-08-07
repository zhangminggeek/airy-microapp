import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow, useRouter, useShareAppMessage } from '@tarojs/taro';
import { useMemo } from 'react';

import styles from './index.module.scss';

import type { ProductBizData } from '@/interfaces/product';

import { getMarketId, postMarketFavorite } from '@/api';
import { Icon, Product, Space } from '@/components';
import { HIDE_PRICE } from '@/constants';
import {
  MarketProductStatus,
  marketProductStatusMap,
  qualityStateMap,
} from '@/constants/market';
import { OrderType } from '@/constants/order';
import {
  ProductFiledKey,
  productInfoFieldMap,
  productSizeMap,
  ProductType,
  productTypeMap,
} from '@/constants/product';
import { COLOR_PRIMARY, TEXT_COLOR_BASE } from '@/constants/theme';
import { useRequest } from '@/hooks';
import { ShareType } from '@/hooks/useShare';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { parseJson, RouterUtil } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;
  const { info } = useUserStore((state) => state);

  useShareAppMessage(() => {
    // 来自页面转发分享
    return {
      title: data?.title,
      path: `/pages/market/index/index?shareType=${ShareType.MARKET}&shareParams=${JSON.stringify({ id })}`,
      imageUrl: data?.product?.picList?.[0].url,
    };
  });

  useDidShow(() => {
    if (id) {
      run({ id });
    }
  });

  // 获取详情
  const { data, run } = useRequest(getMarketId, { manual: true });

  // 切换收藏状态
  const { run: toggleFavorite } = useRequest(postMarketFavorite, {
    manual: true,
    onSuccess() {
      run({ id: `${id}` });
    },
  });

  const actions = useMemo(() => {
    if (!data) return null;
    const { status, allowLease, allowSell } = data ?? {};
    if (
      [
        MarketProductStatus['已售出'],
        MarketProductStatus['借调中'],
        MarketProductStatus['已下架'],
      ].includes(status)
    ) {
      return (
        <Button style={{ width: 200 }} fill="solid" size="large" disabled>
          {marketProductStatusMap.get(status)?.text}
        </Button>
      );
    }
    if (status === MarketProductStatus['在售']) {
      return (
        <Space size={16}>
          {allowLease ? (
            <Button
              size="large"
              onClick={() => {
                RouterUtil.navigateTo('/packageOrder/pages/create/index', {
                  id,
                  type: OrderType['借调'],
                });
              }}
            >
              借调
            </Button>
          ) : null}
          {allowSell ? (
            <Button
              type="primary"
              size="large"
              onClick={() => {
                RouterUtil.navigateTo('/packageOrder/pages/create/index', {
                  id,
                  type: OrderType['出售'],
                });
              }}
            >
              购买
            </Button>
          ) : null}
        </Space>
      );
    }
    return null;
  }, [data]);

  return (
    <BasicLayout title="详情" back fill>
      <Product.Detail
        typeCode={data?.product?.typeCode}
        images={data?.product?.picList?.map((item) => item.url)}
        allowSell={data?.allowSell}
        allowLease={data?.allowLease}
        sellingPrice={info?.account ? data?.sellingPrice : HIDE_PRICE}
        leasePrice={info?.account ? data?.leasePrice : HIDE_PRICE}
        extra={
          <View className={styles.extra}>
            {data?.quality ? (
              <Text className={styles.quality}>
                {qualityStateMap.get(data?.quality)?.text}
              </Text>
            ) : null}
            <View
              className={styles.favorities}
            >{`${data?.favorities ?? 0}人收藏`}</View>
          </View>
        }
        expressMethod={data?.expressMethod}
        tagList={data?.product?.tagList?.map((item) => item.tag.name)}
        title={data?.title}
        desc={data?.description}
        fieldData={parseJson<ProductBizData>(
          data?.product?.bizData ?? '[]',
          [],
        )?.reduce(
          (prev, cur) => {
            const val = productInfoFieldMap
              .get(data?.product?.typeCode as ProductType)
              ?.get(cur.fieldKey as ProductFiledKey)
              ?.options?.find((item) => cur.fieldValue === item.value)?.text;
            prev[cur.fieldKey] = val;
            return prev;
          },
          {
            no: data?.product?.no,
            productTypeName: productTypeMap.get(
              data?.product?.typeCode as ProductType,
            )?.text,
            size: productSizeMap.get(data?.product?.size)?.text,
          },
        )}
        share
        footer={
          info?.companyId !== data?.companyId ? (
            <View className={styles.footer}>
              <Space size={20}>
                <Button
                  className={styles['icon-btn']}
                  fill="none"
                  shape="square"
                  onClick={() => {
                    RouterUtil.navigateTo('/packageCompany/pages/index/index', {
                      id: data?.companyId,
                    });
                  }}
                >
                  <Icon name="ShopOutlined" title="店铺" />
                </Button>
                <Button
                  className={styles['icon-btn']}
                  fill="none"
                  shape="square"
                  onClick={() => {
                    toggleFavorite({
                      id: Number(id),
                      isFavorited: !data?.isFavorited,
                    });
                  }}
                >
                  <Icon
                    name={data?.isFavorited ? 'LoveFilled' : 'LoveOutlined'}
                    color={data?.isFavorited ? COLOR_PRIMARY : TEXT_COLOR_BASE}
                    title="收藏"
                  />
                </Button>
                <Button
                  className={styles['icon-btn']}
                  openType="contact"
                  fill="none"
                  shape="square"
                >
                  <Icon name="PhoneOutlined" title="联系商家" />
                </Button>
              </Space>
              {actions}
            </View>
          ) : null
        }
      />
    </BasicLayout>
  );
};

export default Page;
