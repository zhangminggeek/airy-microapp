import type { FC, ReactNode } from 'react';

import { Empty } from '@/components';
import { useGlobalStore } from '@/models';

interface PlatformAbilityWrapperProps {
  name: string;
  children: ReactNode;
}

const PlatformAbilityWrapper: FC<PlatformAbilityWrapperProps> = ({
  name,
  children,
}) => {
  const { platformAbility } = useGlobalStore((state) => state);

  console.log('platformAbility', platformAbility);

  return platformAbility?.includes(name) ? (
    children
  ) : (
    <Empty title="功能开发中" description="敬请期待～" />
  );
};

export default PlatformAbilityWrapper;
