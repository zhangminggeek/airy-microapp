import { useEffect, useMemo } from 'react';

import { useGlobalStore } from '@/models';

interface UseAddressProps {
  province?: string;
  city?: string;
  area?: string;
  address?: string;
}

export const useAddress = ({
  province,
  city,
  area,
  address,
}: UseAddressProps) => {
  const { administrativeCodeTree, fetchAdministrativeCode } = useGlobalStore(
    (state) => state,
  );

  useEffect(() => {
    fetchAdministrativeCode();
  }, []);

  const _address = useMemo(() => {
    const p = administrativeCodeTree?.find((item) => item.code === province);
    const c = p?.children?.find((item) => item.code === city);
    const a = c?.children?.find((item) => item.code === area);
    return `${p?.name ?? ''}${c?.name ?? ''}${a?.name ?? ''}${address ?? ''}`;
  }, [province, city, area, administrativeCodeTree]);

  return { address: _address };
};
