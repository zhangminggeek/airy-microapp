import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow, useRouter } from '@tarojs/taro';

import styles from './index.module.scss';

import type { GetProductIdRequest, GetProductIdResponse } from '@/api';

import { deleteProductId, getProductId } from '@/api';
import { ActionSheet, Product } from '@/components';
import { ProductSource, ProductStatus } from '@/constants/product';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

// TODO: 补充历史信息
const Page = () => {
  const { id } = useRouter().params;

  useDidShow(() => {
    fetchDetail({ id: `${id}` });
  });

  // 获取服饰详情
  const { data, run: fetchDetail } = useRequest<
    GetProductIdResponse,
    GetProductIdRequest,
    GetProductIdResponse,
    any
  >(getProductId, {
    manual: true,
    formatResult(res) {
      const { data } = res;
      const ret = { ...data, productTypeName: data?.productType?.name };
      ret.fieldList?.forEach((item) => {
        ret[item.fieldKey] = item.fieldValueInfo.name;
      });
      return ret;
    },
  });

  // 删除服饰
  const { run: deleteProduct } = useRequest(deleteProductId, {
    manual: true,
    onSuccess() {
      Toast.info('删除成功');
      RouterUtil.navigateBack();
    },
  });

  // 删除服饰二次确认弹框
  const { renderDialog, open } = useDialog({
    id: 'delete-confirm',
    title: '删除服饰',
    content: '是否确认删除服饰',
    onConfirm() {
      deleteProduct({ id: `${id}` });
    },
  });

  return (
    <BasicLayout title="详情" back fill safeArea={false}>
      <Product.Detail
        images={data?.picList?.map((item) => item.url)}
        tagList={data?.tagList?.map((item) => item.tag.name)}
        title={data?.name}
        desc={data?.description}
        extra={`已租${data?.leaseCount ?? 0}次`}
        fieldList={data?.fieldList?.map(({ fieldKeyInfo }) => ({
          label: fieldKeyInfo?.name,
          field: fieldKeyInfo?.key,
        }))}
        fieldData={data?.fieldList?.reduce(
          (prev, cur) => {
            prev[cur.fieldKey] = cur.fieldValueInfo.name;
            return prev;
          },
          {
            no: data?.no,
            productTypeName: data?.productType?.name,
            size: data?.size,
          },
        )}
        footer={
          data?.status === ProductStatus['正常'] ? (
            <View className={styles.footer}>
              <ActionSheet
                options={[
                  { key: 'sell', name: '转二手' },
                  { key: 'delete', name: '删除', danger: true },
                ]}
                onSelect={(item) => {
                  if (item.key === 'sell') {
                    RouterUtil.navigateTo('/pages/market/action/index', {
                      productId: id,
                      source: ProductSource['服装管理'],
                    });
                  } else if (item.key === 'delete') {
                    open();
                  }
                }}
              >
                <Text className={styles.more}>更多</Text>
              </ActionSheet>
              <Button
                type="primary"
                onClick={() => {
                  RouterUtil.navigateTo('/packageDress/pages/action/index', {
                    id,
                  });
                }}
              >
                编辑
              </Button>
            </View>
          ) : null
        }
      />
      {renderDialog()}
    </BasicLayout>
  );
};

export default Page;
