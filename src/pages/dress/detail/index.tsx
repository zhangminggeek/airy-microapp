import { Button, SafeArea } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useDidShow, useRouter } from '@tarojs/taro';

import styles from './index.module.scss';

import type { GetProductIdRequest, GetProductIdResponse } from '@/api';

import { deleteProductId, getProductId } from '@/api';
import { ActionSheet, ProductField, ProductPicture, Tag } from '@/components';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

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
      <ProductPicture images={data?.picList?.map((item) => item.url)} />
      <View className={styles.header}>
        <View className={styles.name}>{data?.name}</View>
        <View className={styles.other}>
          <View className={styles['tag-group']}>
            {data?.tagList?.map((item) => (
              <Tag key={item.tagId} type="primary">
                {item.tag.name}
              </Tag>
            ))}
          </View>
          <Text className={styles.lease}>已租{data?.leaseCount}次</Text>
        </View>
        <View className={styles.desc}>{data?.description}</View>
      </View>
      <View className={styles.body}>
        <ProductField
          fieldList={data?.fieldList?.map(({ fieldKeyInfo }) => ({
            label: fieldKeyInfo?.name,
            field: fieldKeyInfo?.key,
          }))}
          data={data}
        />
      </View>
      <View className={styles.footer}>
        <View className={styles['footer-content']}>
          <ActionSheet
            options={[
              { key: 'sell', name: '转二手' },
              { key: 'delete', name: '删除', danger: true },
            ]}
            onSelect={(item) => {
              if (item.key === 'sell') {
                // TODO: 跳转创建二手页
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
              RouterUtil.navigateTo('/pages/dress/action/index', { id });
            }}
          >
            编辑
          </Button>
        </View>
        <SafeArea position="bottom" />
      </View>
      {renderDialog()}
    </BasicLayout>
  );
};

export default Page;
