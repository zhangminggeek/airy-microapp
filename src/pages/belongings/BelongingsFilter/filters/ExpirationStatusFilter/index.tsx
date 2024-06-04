import FilterGroup from '../FilterGroup';

import type { FC } from 'react';

interface ExpirationStatusFilterProps {
  value?: number;
  onChange?: (value?: number) => void;
}

const ExpirationStatusFilter: FC<ExpirationStatusFilterProps> = ({
  value,
  onChange,
}) => {
  return (
    <FilterGroup
      options={[
        { label: '未过期', value: 0 },
        { label: '即将过期', value: 1 },
        { label: '已过期', value: 2 },
      ]}
      value={value}
      onChange={onChange}
    />
  );
};

export default ExpirationStatusFilter;
