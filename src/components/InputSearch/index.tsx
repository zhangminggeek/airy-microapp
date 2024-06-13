import { Search } from '@nutui/icons-react-taro';
import { Input } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useMemo, useState } from 'react';

import type { CSSProperties, FC } from 'react';

import './index.scss';

interface InputSearchProps {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  onChange?: (value?: string) => void;
  onSearch?: (value?: string) => void;
}

const PREFIX_CLS = 'm-input-search';

const InputSearch: FC<InputSearchProps> = ({
  className,
  style,
  placeholder = '请输入搜索',
  value,
  onChange,
  onSearch,
}) => {
  const [innerValue, setInnerValue] = useState<string>();

  const _value = useMemo(() => {
    return value === undefined ? innerValue : value;
  }, [value, innerValue]);

  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <Search className={`${PREFIX_CLS}-icon`} size={14} color="#4a4a4a" />
      <Input
        className={`${PREFIX_CLS}-input`}
        placeholder={placeholder}
        clearable
        maxLength={200}
        value={_value}
        onChange={(v) => {
          setInnerValue(v);
          onChange?.(v);
        }}
        onConfirm={(e) => {
          const v = e.detail.value;
          onSearch?.(v);
        }}
      />
    </View>
  );
};

export default InputSearch;
