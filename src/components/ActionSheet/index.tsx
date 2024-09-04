import { ActionSheet as NutActionSheet } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { forwardRef, Fragment, useImperativeHandle, useState } from 'react';

import type { ActionSheetProps as NutActionSheetProps } from '@nutui/nutui-react-taro';
import type { ActionSheetOption } from '@nutui/nutui-react-taro/dist/types/packages/actionsheet';
import type { ReactNode } from 'react';

import './index.scss';

interface Option {
  key: string;
  name: string;
  description?: string;
  danger?: boolean;
  disabled?: boolean;
  show?: boolean;
}

export interface ActionType {
  setOpen: (open: boolean) => void;
}

interface ActionSheetProps
  extends Partial<Omit<NutActionSheetProps, 'visible' | 'options'>> {
  options: Option[];
  children?: ReactNode;
}

const PREFIX_CLS = 'm-action-sheet';

const ActionSheet = forwardRef<ActionType, ActionSheetProps>(
  (
    {
      className,
      children,
      options,
      cancelText = '取消',
      onSelect,
      onCancel,
      onClose,
      ...rest
    },
    ref,
  ) => {
    useImperativeHandle(ref, () => {
      return {
        setOpen: (open) => {
          setShowActionSheet(open);
        },
      };
    });

    // 是否显示
    const [showActionSheet, setShowActionSheet] = useState<boolean>(false);

    const rootDom = document.getElementById('g-basic-layout');

    return (
      <Fragment>
        <View
          className={`${PREFIX_CLS}-view`}
          onClick={() => {
            setShowActionSheet(true);
          }}
        >
          {children}
        </View>
        <NutActionSheet
          className={classnames(PREFIX_CLS, className)}
          visible={showActionSheet}
          portal={rootDom}
          round={false}
          options={
            options.filter(
              ({ show = true }) => show,
            ) as unknown as ActionSheetOption<string>[]
          }
          cancelText={cancelText}
          onSelect={(item, index) => {
            setShowActionSheet(false);
            onSelect?.(item, index);
          }}
          onCancel={() => {
            setShowActionSheet(false);
            onCancel?.();
          }}
          onClose={() => {
            setShowActionSheet(false);
            onClose?.();
          }}
          {...rest}
        />
      </Fragment>
    );
  },
);

export default ActionSheet;
