import { Dialog, Form } from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import { useEffect, useMemo } from 'react';

import { renderByType } from './render';

import type { FormProps } from './interfaces';
import type { DialogProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import './index.scss';

export interface ModalFormProps extends Omit<DialogProps, 'onConfirm'> {
  formProps: FormProps;
  onVisibleChange?: (visible: boolean) => void;
  onConfirm?: (values: any) => void;
}

const PREFIX_CLS = 'm-modal-form';

const ModalForm: FC<ModalFormProps> = ({
  className,
  visible = false,
  formProps = {} as FormProps,
  onVisibleChange,
  onConfirm,
  onCancel,
  ...rest
}) => {
  const { form, fields = [], ...restFormProps } = formProps ?? {};

  const [innerForm] = Form.useForm();

  useEffect(() => {
    onVisibleChange?.(visible);
  }, [visible]);

  // Form 实例, 优先使用外部传入的实例
  const _form = useMemo(() => {
    return form ?? innerForm;
  }, [form, innerForm]);

  const handleConfirm = async (values: any) => {
    onConfirm?.(values);
  };

  const handleCancel = () => {
    _form.resetFields();
    onCancel?.();
  };

  return (
    <Dialog
      className={classnames(PREFIX_CLS, className)}
      visible={visible}
      onConfirm={() => {
        _form.submit();
      }}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={_form} onFinish={handleConfirm} {...restFormProps}>
        {fields?.map((item) => {
          const {
            className,
            name,
            label,
            contentConfig,
            hidden = false,
            ...restFieldProps
          } = item;

          if (hidden) return null;

          return (
            <Form.Item
              key={name}
              className={classnames(
                `${PREFIX_CLS}-item`,
                { [`${PREFIX_CLS}-item-with-label`]: !!label },
                className,
              )}
              name={name}
              label={label}
              {...restFieldProps}
            >
              {renderByType(contentConfig)}
            </Form.Item>
          );
        })}
      </Form>
    </Dialog>
  );
};

export default ModalForm;
