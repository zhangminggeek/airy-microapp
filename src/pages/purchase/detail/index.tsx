import { Button, Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow, useRouter } from '@tarojs/taro';
import dayjs from 'dayjs';

import styles from './index.module.scss';
import PriceItem from './PriceItem';

import { getPurchaseId } from '@/api';
import { Company, Footer, Product, Tag } from '@/components';
import { DATE_TIME_FORMAT } from '@/constants';
import {
  ProductSize,
  productSizeMap,
  ProductType,
  productTypeMap,
} from '@/constants/product';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { isNil, RouterUtil } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;

  useDidShow(() => {
    if (id) {
      run({ id });
    }
  });

  // 获取详情
  const { data, run } = useRequest(getPurchaseId, { manual: true });

  return (
    <BasicLayout title="详情" back fill>
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
          {data?.fieldList?.map((item) => (
            <View className={styles['field-item']} key={item.id}>
              <View className={styles['field-item-label']}>
                {item.fieldKeyName}
              </View>
              <View className={styles['field-item-content']}>
                {item.fieldValueName}
              </View>
            </View>
          ))}
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
              <Image
                key={item.id}
                className={styles['pic-item']}
                src={item.url}
                width={343}
                height={343}
                mode="aspectFill"
              />
            ))}
          </View>
        ) : null}
      </View>
      <View className={styles.list}>
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
      <Footer
        btnText="发送商品"
        onConfirm={() => {
          RouterUtil.navigateTo('/pages/purchase/select/index', { id });
        }}
      />
    </BasicLayout>
  );
};

export default Page;
