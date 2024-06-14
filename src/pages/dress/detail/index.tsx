import { ArrowRight } from '@nutui/icons-react-taro';
import { Button, Image, ImagePreview, SafeArea } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import classnames from 'classnames';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';

import type { GetProductIdRequest, GetProductIdResponse } from '@/api';
import type { Option } from '@/components/Descriptions';

import { deleteProductId, getProductId } from '@/api';
import { ActionSheet, Descriptions, Section, Space, Tag } from '@/components';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;

  // 选中图片列表的索引值
  const [imageIndex, setImageIndex] = useState<number>(0);
  // 是否显示大图预览
  const [showPreview, setShowPreview] = useState<boolean>(false);

  // 获取服饰详情
  const { data } = useRequest<
    GetProductIdResponse,
    GetProductIdRequest,
    GetProductIdResponse,
    any
  >(getProductId, {
    defaultParams: { id: `${id}` },
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

  // 尺码详情弹框
  const { renderDialog: renderSizeInfoDialog, open: openSizeInfoDialog } =
    useDialog({
      id: 'size-info',
      title: '尺码',
      hideCancelButton: true,
    });

  // 删除服饰二次确认弹框
  const {
    renderDialog: renderDeleteConfirmDialog,
    open: openDeleteConfirmDialog,
  } = useDialog({
    id: 'delete-confirm',
    title: '删除服饰',
    content: '是否确认删除服饰',
    onConfirm() {
      deleteProduct({ id: `${id}` });
    },
  });

  // 产品信息字段信息
  const options: Option[] = useMemo(() => {
    const otherField =
      data?.fieldList?.map(({ fieldKeyInfo }) => ({
        field: fieldKeyInfo.key,
        label: fieldKeyInfo.name,
      })) ?? [];
    return [
      { field: 'no', label: '编号', col: 2 },
      { field: 'productTypeName', label: '类型' },
      {
        field: 'inventory',
        label: '尺码',
        render: (v: GetProductIdResponse['inventory']) => {
          return (
            <View
              className={styles.size}
              onClick={() => {
                openSizeInfoDialog({
                  content: v
                    ?.map((item) => `${item.size.name}/${item.count}件`)
                    ?.join('、'),
                });
              }}
            >
              <View className={styles['size-name']}>
                {v?.map((item) => item.size.name)?.join('/')}
              </View>
              <ArrowRight size={12} color="#7c7c7c" />
            </View>
          );
        },
      },
      ...otherField,
    ];
  }, [data]);

  return (
    <BasicLayout title="详情" back fill safeArea={false}>
      <Image
        className={styles.poster}
        mode="aspectFill"
        src={data?.picList?.[imageIndex]?.url}
        width="100vw"
        height="100vw"
        onClick={() => {
          setShowPreview(true);
        }}
      />
      <ImagePreview
        visible={showPreview}
        images={data?.picList?.map((item) => ({ src: item.url }))}
        defaultValue={imageIndex}
        closeOnContentClick
        onClose={() => {
          setShowPreview(false);
        }}
      />
      <View className={styles.header}>
        <Space className={styles['image-group']} block>
          {data?.picList?.map((item, index) => (
            <View
              className={classnames(styles['image-item'], {
                [styles['image-item-selected']]: index === imageIndex,
              })}
              key={item.id}
              onClick={() => {
                setImageIndex(index);
              }}
            >
              <Image
                className={styles.image}
                src={item.url}
                mode="aspectFill"
                width={48}
                height={48}
              />
            </View>
          ))}
        </Space>
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
        <View className={styles.desc}>{data?.desc}</View>
      </View>
      <View className={styles.body}>
        <Section className={styles.product} title="产品信息">
          <Descriptions options={options} data={data} />
        </Section>
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
                openDeleteConfirmDialog();
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
      {renderSizeInfoDialog()}
      {renderDeleteConfirmDialog()}
    </BasicLayout>
  );
};

export default Page;
