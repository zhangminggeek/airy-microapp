import { Image } from '@tarojs/components';

import type { FC, ReactNode } from 'react';

import { OSS_ASSETS_DIR } from '@/constants';
import { BasicLayout } from '@/layouts';
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

  return platformAbility?.includes(name) ? (
    children
  ) : (
    <BasicLayout back fill safeArea={false}>
      <Image
        style={{ width: '100%' }}
        src={`${OSS_ASSETS_DIR}/reservation.jpg`}
        mode="widthFix"
      />
    </BasicLayout>
  );
};

export default PlatformAbilityWrapper;
