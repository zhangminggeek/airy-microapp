import { Dialog } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import type { DialogProps } from '@nutui/nutui-react-taro';

interface UseDialogProps extends Partial<Omit<DialogProps, 'id' | 'visible'>> {
  id: string;
  center?: boolean;
}

export const useDialog = ({
  id,
  content,
  center = true,
  lockScroll = true,
  onConfirm,
  onCancel,
  ...rest
}: UseDialogProps) => {
  const open = (props?: DialogProps) => {
    Dialog.open(id, { ...props });
  };

  const close = () => {
    Dialog.close(id);
  };

  const renderDialog = () => {
    return (
      <Dialog
        id={id}
        lockScroll={lockScroll}
        onConfirm={() => {
          onConfirm?.();
          Dialog.close(id);
        }}
        onCancel={() => {
          onCancel?.();
          Dialog.close(id);
        }}
        {...rest}
      >
        <View
          style={
            center ? { display: 'flex', justifyContent: 'center' } : undefined
          }
        >
          {content}
        </View>
      </Dialog>
    );
  };

  return {
    open,
    close,
    renderDialog,
  };
};
