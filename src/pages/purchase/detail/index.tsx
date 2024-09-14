import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro, { useDidShow, useRouter, useShareAppMessage } from '@tarojs/taro';
import classnames from 'classnames';
import dayjs from 'dayjs';

import styles from './index.module.scss';
import PriceItem from './PriceItem';

import type { ProductBizData } from '@/interfaces/product';

import { getPurchaseId } from '@/api';
import { Company, Empty, Icon, Media, Product, Tag } from '@/components';
import { DATE_TIME_FORMAT } from '@/constants';
import {
  ProductFiledKey,
  productInfoFieldMap,
  ProductSize,
  productSizeMap,
  ProductType,
  productTypeMap,
} from '@/constants/product';
import { useRequest } from '@/hooks';
import { ShareType } from '@/hooks/useShareEvent';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { formatPriceRange, isNil, parseJson, RouterUtil } from '@/utils';

const windowWidth = Taro.getSystemInfoSync().windowWidth;

const Page = () => {
  const { id } = useRouter().params;
  const { info } = useUserStore((state) => state);

  useShareAppMessage(() => {
    const { title, minPrice, maxPrice, minLeasePrice, maxLeasePrice } = data;
    const price =
      minPrice || maxPrice
        ? formatPriceRange([minPrice, maxPrice])
        : formatPriceRange([minLeasePrice, maxLeasePrice]);
    // 来自页面转发分享
    return {
      title: `我想要：¥${price}，${title}`,
      path: `/pages/market/index/index?shareType=${ShareType.PURCHASE}&shareParams=${JSON.stringify({ id })}`,
      imageUrl: data?.picList?.[0].url,
    };
  });

  useDidShow(() => {
    if (id) {
      run({ id });
    }
  });

  // 获取详情
  const { data, run } = useRequest(getPurchaseId, { manual: true });

  return (
    <BasicLayout
      title="详情"
      back
      fill
      footer={
        info?.companyId !== data?.companyId
          ? {
              btnText: '发送商品',
              onConfirm: () => {
                RouterUtil.navigateTo('/pages/purchase/select/index', { id });
              },
            }
          : undefined
      }
    >
      <View className={styles.content}>
        <View className={styles.price}>
          {data?.minPrice || data?.maxPrice ? (
            <PriceItem label="购买" value={[data?.minPrice, data?.maxPrice]} />
          ) : null}
          {data?.minLeasePrice || data?.maxLeasePrice ? (
            <PriceItem
              label="借调"
              value={[data?.minLeasePrice, data?.maxLeasePrice]}
            />
          ) : null}
          <Button
            className={styles['btn-share']}
            icon={<Icon name="ShareOneOutlined" size={14} />}
            openType="share"
            fill="none"
            size="small"
          >
            分享
          </Button>
        </View>
        <View className={styles.field}>
          {data?.typeCode ? (
            <View className={styles['field-item']}>
              <View className={styles['field-item-label']}>类型</View>
              <View className={styles['field-item-content']}>
                {productTypeMap.get(data?.typeCode as ProductType)?.text}
              </View>
            </View>
          ) : null}
          {!isNil(data?.size) ? (
            <View className={styles['field-item']}>
              <View className={styles['field-item-label']}>尺码</View>
              <View className={styles['field-item-content']}>
                {productSizeMap.get(data?.size as ProductSize)?.text}
              </View>
            </View>
          ) : null}
          {parseJson<ProductBizData>(data?.bizData, [])?.map((item) => {
            const field = productInfoFieldMap
              .get(data?.typeCode as ProductType)
              ?.get(item.fieldKey as ProductFiledKey);
            const val = field?.options?.find(
              (i) => i.value === item.fieldValue,
            )?.text;
            return (
              <View className={styles['field-item']} key={item.fieldKey}>
                <View className={styles['field-item-label']}>
                  {field?.name}
                </View>
                <View className={styles['field-item-content']}>{val}</View>
              </View>
            );
          })}
          {data?.brand ? (
            <View
              className={classnames(
                styles['field-item'],
                styles['field-item-row'],
              )}
            >
              <View className={styles['field-item-label']}>品牌</View>
              <View className={styles['field-item-content']}>
                {data?.brand}
              </View>
            </View>
          ) : null}
        </View>
        {data?.tagList?.length ? (
          <View className={styles.tag}>
            {data?.tagList?.map((item) => (
              <Tag key={item.id} className={styles['tag-item']} type="primary">
                {item.name}
              </Tag>
            ))}
          </View>
        ) : null}
        <View className={styles.title}>{data?.title}</View>
        {data?.picList?.length ? (
          <View className={styles.pic}>
            {data?.picList?.map((item) => (
              <Media
                key={item.id}
                className={styles['pic-item']}
                src={item.url}
                width={windowWidth - 32}
                height={windowWidth - 32}
                mode="aspectFill"
                preview
              />
            ))}
          </View>
        ) : null}
      </View>
      <View className={styles.list}>
        <View className={styles['list-title']}>
          全部商品 · {data?.quotationList?.length ?? 0}
        </View>
        {data?.quotationList?.length ? (
          <View className={styles['list-content']}>
            {data?.quotationList?.map((item) => (
              <Product.Brief
                key={item.id}
                image={item.picList?.[0]?.url}
                title={item.title}
                desc={item.description}
                leasePrice={item.leasePrice}
                sellingPrice={item.sellingPrice}
                header={
                  <View className={styles['brief-header']}>
                    <Company logo={item.companyLogo} name={item.companyName} />
                    <Text className={styles['brief-header-time']}>
                      {dayjs(item.createTime).format(DATE_TIME_FORMAT)}
                    </Text>
                  </View>
                }
                footer={
                  <View className={styles['brief-footer']}>
                    <Button
                      size="small"
                      onClick={() => {
                        RouterUtil.navigateTo('/pages/market/detail/index', {
                          id: item.marketId,
                        });
                      }}
                    >
                      查看详情
                    </Button>
                  </View>
                }
                onClick={() => {
                  RouterUtil.navigateTo('/pages/market/detail/index', {
                    id: item.marketId,
                  });
                }}
              />
            ))}
          </View>
        ) : (
          <Empty
            className={styles['list-empty']}
            title="还没有商家发送商品呦～"
          />
        )}
      </View>
    </BasicLayout>
  );
};

export default Page;
