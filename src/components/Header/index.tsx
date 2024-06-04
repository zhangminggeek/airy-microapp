import { TriangleDown } from '@nutui/icons-react-taro';
import { Text, View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC, ReactNode } from 'react';

import { OrganizationPicker, Space } from '@/components';
import { useOrganizationStore, useUserStore } from '@/models';

import './index.scss';

interface HeaderProps {
  className?: string;
  style?: CSSProperties;
  extra?: ReactNode;
  onOrganizationChange?: (orgId: number) => void;
}

const Header: FC<HeaderProps> = ({ className, style, extra }) => {
  const { orgId } = useUserStore((state) => state);
  // 获取组织列表
  const { list = [] } = useOrganizationStore((state) => state);

  return (
    <View className={classnames('m-header', className)} style={style}>
      <OrganizationPicker>
        <Space>
          <Text>{list?.find((o) => o.id === orgId)?.name}</Text>
          <TriangleDown size={14} />
        </Space>
      </OrganizationPicker>
      {extra ? <View className="m-header-extra">{extra}</View> : null}
    </View>
  );
};

export default Header;
