import { View } from '@tarojs/components';
import { useMemo, useState } from 'react';

import styles from './index.module.scss';

import type { FC } from 'react';

import { Filter, TagChecker } from '@/components';
import { productInfoFieldMap, ProductType } from '@/constants/product';

type ValueType = Record<string, any>;

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
      .filter(([k]) => !excludes.includes(k))
      ?.map(([k, v]) => ({ ...v, field: k }));
  }, [typeCode, excludes]);

  return (
    <Filter.CustomWrappwer
      className={styles.wrapper}
      onOk={() => {
        const ret: ValueType = {};
        for (const k in innerValue) {
          if (innerValue[k]?.length) {
            ret[k] = innerValue[k][0];
          }
        }
        onOk?.(ret);
      }}
      onReset={() => {
        setInnerValue(undefined);
        onReset?.();
      }}
    >
      <View className={styles.body}>
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
      </View>
    </Filter.CustomWrappwer>
  );
};

export default CustomFilter;
