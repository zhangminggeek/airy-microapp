import { ConfigProvider, Dialog } from '@nutui/nutui-react-taro';
import { useRef } from 'react';

import type { DialogProps } from '@nutui/nutui-react-taro';

interface OpenParams<P> extends DialogProps {
  params?: P;
}

interface UseDialogProps<P extends Record<string, any> = any>
  extends Partial<Omit<DialogProps, 'id' | 'visible' | 'onConfirm'>> {
  id: string;
  center?: boolean;
  onConfirm?: (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    params?: P,
  ) => void;
}

export const useDialog = <P extends Record<string, any> = any>({
  id,
  content,
  center = true,
  lockScroll = true,
  onConfirm,
  onCancel,
  ...rest
}: UseDialogProps<P>) => {
  const params = useRef<P>();

  const open = (props?: OpenParams<P>) => {
    const { params: p, ...restProps } = props ?? {};
    params.current = p;
    Dialog.open(id, { ...restProps });
  };

  const close = () => {
    params.current = undefined;
    Dialog.close(id);
  };

  const renderDialog = () => {
    return (
      <ConfigProvider
        theme={{
          '--nutui-dialog-content-text-align': center ? 'center' : 'left',
        }}
      >
        <Dialog
          id={id}
          lockScroll={lockScroll}
          onConfirm={(e) => {
            onConfirm?.(e, params.current);
            close();
          }}
          onCancel={() => {
            onCancel?.();
            close();
          }}
          {...rest}
        >
          {content}
        </Dialog>
      </ConfigProvider>
    );
  };

  return {
    open,
    close,
    renderDialog,
  };
};
