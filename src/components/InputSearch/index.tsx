import { Search } from '@nutui/icons-react-taro';
import { Input } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { forwardRef, useMemo, useState } from 'react';

import type { ITouchEvent } from '@tarojs/components';
import type { CSSProperties } from 'react';

import './index.scss';

interface ActionType {
  focus: () => void;
}

interface InputSearchProps {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onClick?: (e: ITouchEvent) => void;
  onChange?: (value?: string) => void;
  onSearch?: (value?: string) => void;
}

const PREFIX_CLS = 'm-input-search';

const InputSearch = forwardRef<ActionType, InputSearchProps>(
  (
    {
      className,
      style,
      placeholder = '请输入搜索',
      disabled,
      value,
      onClick,
      onChange,
      onSearch,
    },
    ref,
  ) => {
    const [innerValue, setInnerValue] = useState<string>();

    const _value = useMemo(() => {
      return value === undefined ? innerValue : value;
    }, [value, innerValue]);

    return (
      <View
        className={classnames(PREFIX_CLS, className)}
        style={style}
        onClick={onClick}
      >
        <Search className={`${PREFIX_CLS}-icon`} size={14} color="#4a4a4a" />
        <Input
          ref={ref}
          className={`${PREFIX_CLS}-input`}
          placeholder={placeholder}
          disabled={disabled}
          clearable
          maxLength={200}
          value={_value}
          onClear={() => {
            setInnerValue('');
            onSearch?.('');
          }}
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
  },
);

export default InputSearch;
