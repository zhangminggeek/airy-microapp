import { Text, View } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { Fragment, useMemo } from 'react';

import Card from './Card';
import styles from './index.module.scss';

import type { GetProductResponse } from '@/api';
import type { FC } from 'react';

import { getProduct } from '@/api';
import { Icon } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { parseJson, RouterUtil } from '@/utils';

interface ProductPickerProps {
  editable?: boolean;
  value?: number;
  onChange?: (value?: number) => void;
}

const ProductPicker: FC<ProductPickerProps> = ({
  editable = false,
  value,
  onChange,
}) => {
  useDidShow(() => {
    // 更新服装列表数据
    run();
    // 回显选中的服装
    const product = Taro.getStorageSync(StorageKey.PRODUCT_SELECTED);
    if (product) {
      const json = parseJson<GetProductResponse[0]>(product);
      onChange?.(json.id);
    } else {
      onChange?.();
    }
  });

  // 产品列表
  const { data, run } = useRequest(getProduct, { manual: true });

  const product = useMemo(() => {
    return data?.find((item) => item.id === value);
  }, [data, value]);

  return (
    <Fragment>
      <View className={styles.container}>
        {value ? (
          <Card
            pic={product?.picList?.[0]?.url}
            name={product?.name}
            desc={product?.description}
            no={product?.no}
            editable={editable}
            closeable
            onEdit={() => {
              if (!editable) return;
              RouterUtil.navigateTo('/packageDress/pages/action/index', {
                id: product?.id,
              });
            }}
            onClose={() => {
              onChange?.();
            }}
          />
        ) : (
          <View
            className={styles.btn}
            onClick={() => {
              RouterUtil.navigateTo('/packageDress/pages/select/index');
            }}
          >
            <Icon
              className={styles['btn-icon']}
              name="PlusOutlined"
              size={24}
            />
            <Text className={styles['btn-text']}>添加宝贝</Text>
          </View>
        )}
      </View>
    </Fragment>
  );
};

export default ProductPicker;
