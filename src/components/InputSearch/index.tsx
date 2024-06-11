import { Search } from '@nutui/icons-react-taro';
import { Input, View } from '@tarojs/components';
import classnames from 'classnames';

import type { CSSProperties, FC } from 'react';

import './index.scss';

interface InputSearchProps {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  onChange?: (value?: string) => void;
}

const PREFIX_CLS = 'm-input-search';

const InputSearch: FC<InputSearchProps> = ({
  className,
  style,
  placeholder = '请输入搜索',
  value,
  onChange,
}) => {
  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <Search className={`${PREFIX_CLS}-icon`} size={14} color="#4a4a4a" />
      <Input
        className={`${PREFIX_CLS}-input`}
        placeholder={placeholder}
        value={value}
        onInput={(e) => {
          onChange?.(e.detail.value);
        }}
      />
    </View>
  );
};

export default InputSearch;
