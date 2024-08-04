import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { cloneElement } from 'react';

import type { CSSProperties, FC } from 'react';

import { Icon } from '@/components';

interface AffixProps {
  className?: string;
  style?: CSSProperties;
  children?: JSX.Element;
  onClick?: () => void;
}

import './index.scss';

const PREFIX_CLS = 'm-affix';

const Affix: FC<AffixProps> = ({ className, style, children, onClick }) => {
  const renderContent = () => {
    const content = children ?? (
      <Button
        className={`${PREFIX_CLS}-btn`}
        type="primary"
        size="large"
        shape="round"
        icon={<Icon name="PlusOutlined" size={24} />}
      />
    );
    return cloneElement(content, { onClick });
  };

  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      {renderContent()}
    </View>
  );
};

export default Affix;
