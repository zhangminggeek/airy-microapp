import { Form } from '@nutui/nutui-react-taro';

import type { ModalFormProps } from '@/components/ModalForm';
import type { FC } from 'react';

import { putOrganization } from '@/api';
import { ModalForm } from '@/components';
import { useRequest } from '@/hooks';
import { useOrganizationStore } from '@/models';
import { Toast } from '@/utils';

interface ModalOrganizationProps extends Omit<ModalFormProps, 'formProps'> {
  orgId: number;
  orgName?: string;
  onSuccess?: () => void;
}

const ModalOrganization: FC<ModalOrganizationProps> = ({
  orgId,
  orgName,
  onSuccess,
  ...rest
}) => {
  const { fetchOrganizationList } = useOrganizationStore((state) => state);

  const [form] = Form.useForm();

  // 更新房间名称
  const { run: update } = useRequest(putOrganization, {
    manual: true,
    onSuccess() {
      Toast.success('编辑成功');
      fetchOrganizationList();
      onSuccess?.();
    },
  });

  return (
    <ModalForm
      title="编辑组织"
      formProps={{
        form,
        fields: [
          {
            name: 'name',
            contentConfig: {
              renderType: 'input',
              placeholder: '请输入组织名称',
            },
            rules: [
              { required: true, message: '请输入组织名称' },
              { max: 32, message: '组织名称最多32个字符' },
            ],
          },
        ],
      }}
      onVisibleChange={(visible) => {
        if (visible && orgName) {
          form.setFieldsValue({ name: orgName });
        }
      }}
      onConfirm={async (values) => {
        const { name } = values;
        await update({ id: orgId, name });
      }}
      {...rest}
    />
  );
};

export default ModalOrganization;
