import { More } from '@nutui/icons-react-taro';
import { ActionSheet as NutActionSheet } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import classnames from 'classnames';
import { Fragment, useState } from 'react';

import type { ActionSheetProps as NutActionSheetProps } from '@nutui/nutui-react-taro';
import type { ActionSheetOption } from '@nutui/nutui-react-taro/dist/types/packages/actionsheet';
import type { FC, ReactNode } from 'react';

import './index.scss';

interface Option {
  key: string;
  name: string;
  description?: string;
  danger?: boolean;
  disabled?: boolean;
  show?: boolean;
}

interface ActionSheetProps
  extends Partial<Omit<NutActionSheetProps, 'visible' | 'options'>> {
  options: Option[];
  children?: ReactNode;
}

const PREFIX_CLS = 'm-action-sheet';

const ActionSheet: FC<ActionSheetProps> = ({
  className,
  children,
  options,
  cancelText = '取消',
  onSelect,
  onCancel,
  onClose,
  ...rest
}) => {
  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);

  const rootDom = document.getElementById('g-basic-layout');

  return (
    <Fragment>
      <View
        className={`${PREFIX_CLS}-icon`}
        onClick={() => {
          setShowActionSheet(true);
        }}
      >
        {children ?? (
          <Text className={`${PREFIX_CLS}-icon-default`}>
            <More size={10} color="#ffffff" />
          </Text>
        )}
      </View>
      <NutActionSheet
        className={classnames(PREFIX_CLS, className)}
        visible={showActionSheet}
        portal={rootDom}
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
};

export default ActionSheet;
