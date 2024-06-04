import { Plus } from '@nutui/icons-react-taro';
import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { cloneElement } from 'react';

import type { CSSProperties, FC } from 'react';

interface AffixProps {
  className?: string;
  style?: CSSProperties;
  children?: JSX.Element;
  onClick?: () => void;
}

import './index.scss';

const Affix: FC<AffixProps> = ({ className, style, children, onClick }) => {
  const renderContent = () => {
    const content = children ?? (
      <Button
        style={{ width: '40px' }}
        type="primary"
        size="large"
        shape="round"
        icon={<Plus width="28px" height="28px" />}
      />
    );
    return cloneElement(content, { onClick });
  };

  return (
    <View className={classnames('m-affix', className)} style={style}>
      {renderContent()}
    </View>
  );
};

export default Affix;
