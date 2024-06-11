import { Close } from '@nutui/icons-react-taro';
import {
  Button,
  InputNumber,
  Picker,
  Popup,
  SafeArea,
  Table,
} from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { Fragment, useState } from 'react';

import styles from './index.module.scss';

import type { FC } from 'react';

import { getProductSizeOption } from '@/api';
import { Link, PickerView, Section } from '@/components';
import { useRequest } from '@/hooks';

interface ItemType {
  sizeId: number;
  count: number;
}

type ValueType = ItemType[];

interface ProductInventoryPickerProps {
  value?: ValueType;
  onConfirm?: (value?: ValueType) => void;
}

const ProductInventoryPicker: FC<ProductInventoryPickerProps> = ({
  value = [],
  onConfirm,
}) => {
  // 是否显示弹框
  const [visible, setVisible] = useState<boolean>(false);
  // 是否显示尺码选择器
  const [visibleSizePicker, setVisibleSizePicker] = useState<boolean>(false);
  // 组件内部值
  const [internalValue, setInternalValue] = useState<ValueType>([]);

  // 尺码选项
  const { data = [] } = useRequest(getProductSizeOption);

  const handleChange = (val: number, index: number) => {
    const ret = [...internalValue];
    ret[index].count = val;
    setInternalValue(ret);
  };

  return (
    <Fragment>
      <PickerView
        text={
          value?.length ? (
            <View>
              {value.map((item) => {
                const sizeName = data?.find(
                  (size) => size.id === item.sizeId,
                )?.name;
                return (
                  <View
                    key={item.sizeId}
                  >{`${sizeName}: ${item.count}件`}</View>
                );
              })}
            </View>
          ) : null
        }
        onClick={() => {
          setVisible(true);
        }}
      >
        <Popup
          visible={visible}
          position="bottom"
          onOpen={() => {
            setInternalValue(value);
          }}
          onClose={() => {
            setVisible(false);
          }}
        >
          <View>
            <Section
              className={styles.header}
              title="尺码"
              extra={
                <Link
                  onClick={() => {
                    onConfirm?.(internalValue);
                    setVisible(false);
                  }}
                >
                  确定
                </Link>
              }
            >
              <View className={styles['tag-group']}>
                {internalValue?.map((item, index) => (
                  <View key={item.sizeId} className={styles.tag}>
                    {data?.find((size) => size.id === item.sizeId)?.name}
                    <Close
                      className={styles['tag-icon']}
                      size={10}
                      onClick={() => {
                        const _value = [...internalValue];
                        _value.splice(index, 1);
                        setInternalValue(_value);
                      }}
                    />
                  </View>
                ))}
              </View>
              <Button
                className={styles.btn}
                type="primary"
                block
                size="small"
                onClick={() => {
                  setVisibleSizePicker(true);
                }}
              >
                添加尺码
              </Button>
            </Section>
            <View className={styles.body}>
              <Table
                columns={[
                  { title: '尺码', key: 'sizeName' },
                  { title: '数量', key: 'count' },
                ]}
                data={internalValue?.map((item, index) => ({
                  sizeName: data?.find((size) => size.id === item.sizeId)?.name,
                  count: (
                    <InputNumber
                      type="number"
                      min={0}
                      value={item.count}
                      onChange={(v: number) => {
                        handleChange(v, index);
                      }}
                    />
                  ),
                }))}
              />
            </View>
          </View>
          <SafeArea position="bottom" />
        </Popup>
      </PickerView>
      <Picker
        options={data
          ?.filter((item) => {
            // 过滤掉已被选的选项
            const checkedSizeIdList = internalValue?.map(
              (field) => field.sizeId,
            );
            return !checkedSizeIdList.includes(item.id);
          })
          ?.map((item) => ({ text: item.name, value: item.id }))}
        visible={visibleSizePicker}
        onConfirm={(_, selectedValue: number[]) => {
          setInternalValue([
            ...internalValue,
            { sizeId: selectedValue[0], count: 0 },
          ]);
          setVisibleSizePicker(false);
        }}
        onClose={() => {
          setVisibleSizePicker(false);
        }}
      />
    </Fragment>
  );
};
export default ProductInventoryPicker;
