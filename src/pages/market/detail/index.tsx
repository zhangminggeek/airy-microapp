import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow, useRouter, useShareAppMessage } from '@tarojs/taro';
import { useMemo } from 'react';

import styles from './index.module.scss';

import { getMarketId, postMarketFavorite } from '@/api';
import { Icon, Product, Space } from '@/components';
import {
  MarketProductStatus,
  marketProductStatusMap,
  qualityStateMap,
} from '@/constants/market';
import { OrderType } from '@/constants/order';
import {
  ProductFiledKey,
  productInfoFieldMap,
  ProductType,
  productTypeMap,
} from '@/constants/product';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;
  const { info } = useUserStore((state) => state);

  useShareAppMessage(() => {
    // 来自页面转发分享
    return {
      title: data?.title,
      path: `/pages/market/detail/index?id=${id}`,
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
        sellingPrice={data?.sellingPrice}
        leasePrice={data?.leasePrice}
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
        fieldData={data?.product?.fieldList?.reduce(
          (prev, cur) => {
            const val = productInfoFieldMap
              .get(data?.product?.typeCode as ProductType)
              ?.get(cur.fieldKey as ProductFiledKey)
              ?.options?.find((item) => item.value)?.text;
            prev[cur.fieldKey] = val;
            return prev;
          },
          {
            no: data?.product?.no,
            productTypeName: productTypeMap.get(
              data?.product?.typeCode as ProductType,
            )?.text,
            size: data?.product?.size,
          },
        )}
        footer={
          info?.companyId !== data?.companyId ? (
            <View className={styles.footer}>
              <Space size={20}>
                <Icon
                  name={data?.isFavorited ? 'LoveFilled' : 'LoveOutlined'}
                  type={data?.isFavorited ? 'primary' : 'default'}
                  title="收藏"
                  onClick={() => {
                    toggleFavorite({
                      id: Number(id),
                      isFavorited: !data?.isFavorited,
                    });
                  }}
                />
                <Button
                  className={styles['icon-btn']}
                  openType="share"
                  fill="none"
                  shape="square"
                >
                  <Icon name="ShareOneOutlined" title="分享" />
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
