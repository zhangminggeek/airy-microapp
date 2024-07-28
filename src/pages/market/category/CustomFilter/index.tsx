import { View } from '@tarojs/components';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';
import PriceRangeInput from './PriceRangeInput';

import type { FC } from 'react';

import { Filter, TagChecker } from '@/components';
import { expressMethodMap, MarkrtMethod } from '@/constants/market';
import {
  productInfoFieldMap,
  productQualityMap,
  productSizeMap,
  ProductType,
} from '@/constants/product';

type ValueType = Record<string, any>;
interface FiledType {
  field: string;
  value: string;
}

interface CustomFilterProps {
  typeCode?: ProductType;
  excludes?: string[];
  onOk?: (v?: ValueType) => void;
  onReset?: () => void;
}

const CustomFilter: FC<CustomFilterProps> = ({
  typeCode,
  excludes = [],
  onOk,
  onReset,
}) => {
  const [innerValue, setInnerValue] = useState<ValueType>();

  // 选项组
  const group = useMemo(() => {
    if (!typeCode) return [];
    return Array.from(productInfoFieldMap.get(typeCode)?.entries() ?? [])
      ?.filter(([k]) => !excludes.includes(k))
      ?.map(([k, v]) => ({ ...v, field: k }));
  }, [typeCode, excludes]);

  return (
    <Filter.CustomWrappwer
      className={styles.wrapper}
      onOk={() => {
        const {
          allowSell,
          allowLease,
          minSellingPrice,
          maxSellingPrice,
          minLeasePrice,
          maxLeasePrice,
          size,
          quality,
          expressMethod,
          ...restValue
        } = innerValue ?? {};
        const ret: ValueType = {
          allowSell,
          allowLease,
          minSellingPrice,
          maxSellingPrice,
          minLeasePrice,
          maxLeasePrice,
          size: size?.[0],
          quality: quality?.[0],
          expressMethod: expressMethod?.[0],
        };
        const filter: FiledType[] = [];
        for (const k in restValue) {
          if (restValue[k]?.length) {
            filter.push({ field: k, value: restValue[k] });
          }
        }
        onOk?.({ ...ret, filter });
      }}
      onReset={() => {
        setInnerValue(undefined);
        onReset?.();
      }}
    >
      <View className={styles.body}>
        <View className={styles.field}>
          <View className={styles['field-title']}>借调/购买</View>
          <TagChecker
            className={styles['field-checker']}
            options={[
              { text: '购买', value: MarkrtMethod['出售'] },
              { text: '借调', value: MarkrtMethod['借调'] },
            ]}
            value={([] as MarkrtMethod[])
              .concat(innerValue?.allowSell ? [MarkrtMethod['出售']] : [])
              .concat(innerValue?.allowLease ? [MarkrtMethod['借调']] : [])}
            onChange={(v) => {
              const _allowSell = v?.includes(MarkrtMethod['出售']) ?? false;
              const _allowLease = v?.includes(MarkrtMethod['借调']) ?? false;
              const { allowSell, allowLease, ...restValue } = innerValue ?? {};
              const ret = { ...restValue };
              if (_allowSell) {
                ret.allowSell = 1;
              }
              if (_allowLease) {
                ret.allowLease = 1;
              }
              setInnerValue(ret);
            }}
          />
        </View>
        <View className={styles.field}>
          <View className={styles['field-title']}>出售价格</View>
          <PriceRangeInput
            value={[innerValue?.minSellingPrice, innerValue?.maxSellingPrice]}
            onChange={(v) => {
              setInnerValue({
                ...innerValue,
                minSellingPrice: v?.[0],
                maxSellingPrice: v?.[1],
              });
            }}
          />
        </View>
        <View className={styles.field}>
          <View className={styles['field-title']}>借调价格</View>
          <PriceRangeInput
            value={[innerValue?.minLeasePrice, innerValue?.maxLeasePrice]}
            onChange={(v) => {
              setInnerValue({
                ...innerValue,
                minLeasePrice: v?.[0],
                maxLeasePrice: v?.[1],
              });
            }}
          />
        </View>
        {group?.map((item) => (
          <View key={item.field} className={styles.field}>
            <View className={styles['field-title']}>{item.name}</View>
            <TagChecker
              className={styles['field-checker']}
              options={item.options}
              value={innerValue?.[item.field]}
              onChange={(v) => {
                setInnerValue({
                  ...innerValue,
                  [item.field]: v,
                });
              }}
            />
          </View>
        ))}
        <View className={styles.field}>
          <View className={styles['field-title']}>尺码</View>
          <TagChecker
            className={styles['field-checker']}
            options={Array.from(productSizeMap.values())}
            value={innerValue?.size}
            onChange={(v) => {
              setInnerValue({
                ...innerValue,
                size: v,
              });
            }}
          />
        </View>
        <View className={styles.field}>
          <View className={styles['field-title']}>新旧程度</View>
          <TagChecker
            className={styles['field-checker']}
            options={Array.from(productQualityMap.values())}
            value={innerValue?.quality}
            onChange={(v) => {
              setInnerValue({
                ...innerValue,
                quality: v,
              });
            }}
          />
        </View>
        <View className={styles.field}>
          <View className={styles['field-title']}>快递方式</View>
          <TagChecker
            className={styles['field-checker']}
            options={Array.from(expressMethodMap.values())}
            value={innerValue?.expressMethod}
            onChange={(v) => {
              setInnerValue({
                ...innerValue,
                expressMethod: v,
              });
            }}
          />
        </View>
      </View>
    </Filter.CustomWrappwer>
  );
};

export default CustomFilter;
