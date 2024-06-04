import FilterGroup from '../FilterGroup';

import type { FC } from 'react';

import { getRoom } from '@/api';
import { useRequest } from '@/hooks';
import { useUserStore } from '@/models';

interface RoomFilterProps {
  value?: number;
  onChange?: (value?: number) => void;
}

const RoomFilter: FC<RoomFilterProps> = ({ value, onChange }) => {
  const { orgId } = useUserStore((state) => state);

  // 获取房间列表
  const { data } = useRequest(getRoom, {
    defaultParams: { orgId: `${orgId}` },
  });

  return (
    <FilterGroup
      options={data?.map((item) => ({ label: item.name, value: item.id }))}
      value={value}
      onChange={onChange}
    />
  );
};

export default RoomFilter;
