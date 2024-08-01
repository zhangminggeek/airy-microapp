import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow, useRouter } from '@tarojs/taro';

import styles from './index.module.scss';

import type { ProductBizData } from '@/interfaces/product';

import { deleteProductId, getProductId } from '@/api';
import { ActionSheet, Product } from '@/components';
import {
  ProductFiledKey,
  productInfoFieldMap,
  productSizeMap,
  ProductSource,
  ProductStatus,
  productStatusMap,
  ProductType,
  productTypeMap,
} from '@/constants/product';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { parseJson, RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;

  useDidShow(() => {
    fetchDetail({ id: `${id}` });
  });

  // 获取服饰详情
  const { data, run: fetchDetail } = useRequest(getProductId, {
    manual: true,
    onSuccess(d) {
      const a = parseJson<ProductBizData>(d?.bizData ?? '', []);
      console.log(a);
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
        typeCode={data?.typeCode}
        images={data?.picList?.map((item) => item.url)}
        tagList={data?.tagList?.map((item) => item.tag.name)}
        title={data?.name}
        desc={data?.description}
        fieldData={parseJson<ProductBizData>(data?.bizData ?? '', [])?.reduce(
          (prev, cur) => {
            const val = productInfoFieldMap
              .get(data?.typeCode as ProductType)
              ?.get(cur.fieldKey as ProductFiledKey)
              ?.options?.find((item) => item.value === cur.fieldValue)?.text;
            prev[cur.fieldKey] = val;
            return prev;
          },
          {
            no: data?.no,
            productTypeName: productTypeMap.get(data?.typeCode as ProductType)
              ?.text,
            size: productSizeMap.get(data?.size)?.text,
          },
        )}
        footer={
          <View className={styles.footer}>
            <ActionSheet
              options={[
                { key: 'sell', name: '转二手' },
                { key: 'delete', name: '删除', danger: true },
              ]}
              onSelect={(item) => {
                if (data?.status !== ProductStatus['正常']) {
                  Toast.info(
                    `当前服装${productStatusMap.get(data?.status)?.text}，不可操作`,
                  );
                  return;
                }
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
        }
      />
      {renderDialog()}
    </BasicLayout>
  );
};

export default Page;
