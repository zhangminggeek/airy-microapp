import { NumberKeyboard } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import clasnames from 'classnames';
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';

import type { CSSProperties } from 'react';

import { isNil } from '@/utils';

import './index.scss';

export type ActionType = {
  setValue: (value: string) => void;
};

interface CodeInputProps {
  className?: string;
  style?: CSSProperties;
  length?: number;
  onComplete?: (value: string) => void;
}

const PREFIX_CLS = 'm-code-input';
const SLOT = ' ';

const CodeInput = forwardRef<ActionType, CodeInputProps>(
  ({ className, style, length = 4, onComplete }, ref) => {
    useImperativeHandle(ref, () => ({
      setValue: (v) => {
        handleSetValue(v);
      },
    }));

    // 是否显示键盘
    const [visible, setVisible] = useState<boolean>(true);
    // 聚焦的输入框索引
    const [focusIndex, setFocusIndex] = useState<number>(0);
    // 输入值
    const [value, setValue] = useState<string>();

    const _value = useMemo(() => {
      return Array.from({ length })
        .fill('')
        .map((_, index) => value?.at(index) ?? SLOT);
    }, [value]);

    const handleSetValue = (v: string) => {
      setValue(v);
      setFocusIndex(v.length - 1);
    };

    return (
      <View className={clasnames(PREFIX_CLS, className)} style={style}>
        {_value.map((item, index) => (
          <View
            key={index}
            className={`${PREFIX_CLS}-item`}
            onClick={() => {
              setFocusIndex(index);
              setVisible(true);
            }}
          >
            {item}
            {focusIndex === index ? (
              <View className={`${PREFIX_CLS}-cursor`} />
            ) : null}
          </View>
        ))}
        <NumberKeyboard
          visible={visible}
          onChange={(v) => {
            const arr = [..._value];
            arr[focusIndex] = v;
            const ret = arr.join('');
            setValue(ret);
            if (focusIndex < length - 1) {
              setFocusIndex(focusIndex + 1);
            } else if (focusIndex === length - 1) {
              if (arr.every((v) => !isNil(v, false))) {
                onComplete?.(ret);
              }
            }
          }}
          onDelete={() => {
            setValue('');
            setFocusIndex(0);
          }}
          onClose={() => setVisible(false)}
        />
      </View>
    );
  },
);

export default CodeInput;
