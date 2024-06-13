import { Image, ImagePreview } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import classnames from 'classnames';
import { useState } from 'react';

import styles from './index.module.scss';

import { getProductId } from '@/api';
import { Space, Tag } from '@/components';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';

const Page = () => {
  const { id } = useRouter().params;

  // 选中图片列表的索引值
  const [imageIndex, setImageIndex] = useState<number>(0);
  // 是否显示大图预览
  const [showPreview, setShowPreview] = useState<boolean>(false);

  // 获取服饰详情
  const { data } = useRequest(getProductId, { defaultParams: { id } });

  return (
    <BasicLayout title="详情" back fill>
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
      <View className={styles.info}>
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
    </BasicLayout>
  );
};

export default Page;
