import type { GetSpaceIdsResponse } from '@/api';
import type { FC } from 'react';

import { Title } from '@/components';

type SpaceType = GetSpaceIdsResponse[0];

interface SpaceBreadcrumbsProps {
  path: SpaceType[];
}

const SpaceBreadcrumbs: FC<SpaceBreadcrumbsProps> = ({ path = [] }) => {
  return <Title>{path.map((item) => item.name).join(' / ')}</Title>;
};

export default SpaceBreadcrumbs;
