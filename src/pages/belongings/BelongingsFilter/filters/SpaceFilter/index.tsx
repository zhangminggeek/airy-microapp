import { Text, View } from '@tarojs/components';
import { useEffect, useMemo } from 'react';

import FilterGroup from '../FilterGroup';

import styles from './index.module.scss';

import type { FC } from 'react';

import { getSpace } from '@/api';
import { Empty } from '@/components';
import { useRequest } from '@/hooks';
import { RouterUtil } from '@/utils';

type PathType = [number | undefined, number | undefined, number | undefined];

interface SpaceFilter {
  roomId?: number;
  value?: PathType;
  onChange?: (value?: PathType) => void;
  onCreateSpace?: () => void;
}

const SpaceFilter: FC<SpaceFilter> = ({
  roomId,
  value,
  onChange,
  onCreateSpace,
}) => {
  useEffect(() => {
    if (roomId) {
      run({ roomId: `${roomId}` });
    }
  }, [roomId]);

  // 获取存储空间列表
  const { data, run } = useRequest(getSpace, {
    manual: true,
    onSuccess(res) {
      const first = res?.filter((item) => item.parentId === 0);
      const second = res?.filter((item) => item.parentId === first?.[0]?.id);
      const third = res?.filter((item) => item.parentId === second?.[0]?.id);
      onChange?.([first?.[0]?.id, second?.[0]?.id, third?.[0]?.id]);
    },
  });

  const options = useMemo(() => {
    if (!roomId || !data) return [];
    const [firstSpaceId, secondSpaceId] = value ?? [];
    // 第一级选项
    const first = data?.filter((item) => item.parentId === 0);
    // 第二级选项
    const seond = data?.filter(
      (item) => item.parentId === (firstSpaceId ?? first?.[0]?.id),
    );
    // 第三级选项
    const third = data?.filter(
      (item) => item.parentId === (secondSpaceId ?? seond?.[0]?.id),
    );
    return [first, seond, third];
  }, [data, value]);

  if (!roomId) return <Empty title="请先选择房间" />;

  if (!data?.length)
    return (
      <Empty
        className={styles.empty}
        title="暂无储物空间"
        description={
          <Text
            className={styles['empty-desc']}
            onClick={() => {
              RouterUtil.navigateTo('/pages/room/space/index', { roomId });
              onCreateSpace?.();
            }}
          >
            点击前往添加储物空间
          </Text>
        }
      />
    );

  return (
    <View className={styles.container}>
      {options[0]?.length ? (
        <View className={styles.title}>一级空间</View>
      ) : null}
      <FilterGroup
        className={styles.picker}
        options={options[0]?.map((item) => ({
          ...item,
          label: item.name,
          value: item.id,
        }))}
        value={value?.[0]}
        onChange={(v, option) => {
          if (v === undefined) {
            onChange?.(undefined);
          } else {
            const first = option;
            const second = data?.filter(
              (item) => item.parentId === first?.id,
            )?.[0];
            const third = data?.filter(
              (item) => item.parentId === second?.id,
            )?.[0];
            onChange?.([first?.id, second?.id, third?.id]);
          }
        }}
      />
      {options[1]?.length ? (
        <View className={styles.title}>二级空间</View>
      ) : null}
      <FilterGroup
        className={styles.picker}
        options={options[1]?.map((item) => ({
          ...item,
          label: item.name,
          value: item.id,
        }))}
        value={value?.[1]}
        onChange={(v, option) => {
          if (v === undefined) {
            onChange?.(undefined);
          } else {
            const second = option;
            const first = data?.find((item) => item.id === second?.parentId);
            const third = data?.filter(
              (item) => item.parentId === second?.id,
            )?.[0];
            onChange?.([first?.id, second?.id, third?.id]);
          }
        }}
      />
      {options[2]?.length ? (
        <View className={styles.title}>三级空间</View>
      ) : null}
      <FilterGroup
        className={styles.picker}
        options={options[2]?.map((item) => ({
          ...item,
          label: item.name,
          value: item.id,
        }))}
        value={value?.[2]}
        onChange={(v, option) => {
          if (v === undefined) {
            onChange?.(undefined);
          } else {
            const third = option;
            const second = data?.find((item) => item.id === third?.parentId);
            const first = data?.find((item) => item.id === second?.parentId);
            onChange?.([first?.id, second?.id, third?.id]);
          }
        }}
      />
    </View>
  );
};

export default SpaceFilter;
