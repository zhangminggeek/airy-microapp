import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useDidShow, useRouter, useShareAppMessage } from '@tarojs/taro';

import styles from './index.module.scss';

import { getMarketId, postMarketFavorite } from '@/api';
import { Icon, Product, Space } from '@/components';
import { OrderType } from '@/constants/order';
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

  return (
    <BasicLayout title="详情" back fill>
      <Product.Detail
        images={data?.product?.picList?.map((item) => item.url)}
        sellingPrice={data?.sellingPrice}
        leasePrice={data?.leasePrice}
        extra={`${data?.favorities ?? 0}人收藏`}
        tagList={data?.product?.tagList?.map((item) => item.tag.name)}
        title={data?.title}
        desc={data?.description}
        fieldList={data?.product?.fieldList?.map(({ fieldKeyInfo }) => ({
          label: fieldKeyInfo?.name,
          field: fieldKeyInfo?.key,
        }))}
        fieldData={data?.product?.fieldList?.reduce(
          (prev, cur) => {
            prev[cur.fieldKey] = cur.fieldValueInfo.name;
            return prev;
          },
          {
            no: data?.product?.no,
            productTypeName: data?.product?.productType?.name,
            size: data?.product?.size,
          },
        )}
        footer={
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
            {info?.companyId !== data?.companyId && (
              <Space size={16}>
                {data?.allowLease ? (
                  <Button
                    size="large"
                    onClick={() => {
                      RouterUtil.navigateTo(
                        '/packageOrder/pages/create/index',
                        { id, type: OrderType['借调'] },
                      );
                    }}
                  >
                    借调
                  </Button>
                ) : null}
                {data?.allowSell ? (
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                      RouterUtil.navigateTo(
                        '/packageOrder/pages/create/index',
                        { id, type: OrderType['出售'] },
                      );
                    }}
                  >
                    购买
                  </Button>
                ) : null}
              </Space>
            )}
          </View>
        }
      />
    </BasicLayout>
  );
};

export default Page;
