import { Form } from '@nutui/nutui-react-taro';

import type { ModalFormProps } from '@/components/ModalForm';
import type { FC } from 'react';

import { getSpaceId, postSpace, putSpace } from '@/api';
import { ModalForm } from '@/components';
import { useRequest } from '@/hooks';

export interface ModalSpaceProps extends Omit<ModalFormProps, 'formProps'> {
  roomId: number;
  roomName?: string;
  parentSpaceId?: number;
  parentSpaceName?: string;
  spaceId?: number;
  onSuccess?: () => void;
}

const ModalSpace: FC<ModalSpaceProps> = ({
  roomId,
  roomName,
  parentSpaceId,
  parentSpaceName,
  spaceId,
  onSuccess,
  ...rest
}) => {
  const [form] = Form.useForm();

  // 获取储物空间详情
  const { run: fetchSpace } = useRequest(getSpaceId, {
    manual: true,
    onSuccess({ name, remark }) {
      form.setFieldsValue({ name, remark: remark || '' });
    },
  });

  // 创建储物空间
  const { run: create } = useRequest(postSpace, {
    manual: true,
    onSuccess() {
      onSuccess?.();
    },
  });

  // 更新储物空间
  const { run: update } = useRequest(putSpace, {
    manual: true,
    onSuccess() {
      onSuccess?.();
    },
  });

  return (
    <ModalForm
      title={spaceId ? '编辑储物空间' : '创建储物空间'}
      {...rest}
      formProps={{
        form,
        fields: [
          {
            label: '房间名称',
            name: 'roomName',
            contentConfig: {
              renderType: 'text',
              content: roomName,
            },
          },
          {
            label: '上级空间',
            name: 'parentSpaceId',
            contentConfig: {
              renderType: 'text',
              content: parentSpaceName,
            },
            hidden: !parentSpaceId,
          },
          {
            name: 'name',
            contentConfig: {
              renderType: 'input',
              placeholder: '请输入储物空间名称，如：衣柜',
            },
            rules: [
              { required: true, message: '请输入储物空间名称' },
              { max: 32, message: '最多输入32个字符' },
            ],
          },
          {
            name: 'remark',
            contentConfig: {
              renderType: 'textarea',
              placeholder: '请输入备注',
              maxLength: 200,
            },
          },
        ],
      }}
      onVisibleChange={(visible) => {
        if (visible && spaceId) {
          fetchSpace({ id: `${spaceId}` });
        }
      }}
      onConfirm={async (values) => {
        const { name, remark } = values;
        const params = { roomId, parentId: parentSpaceId, name, remark };
        if (spaceId) {
          await update({ id: spaceId, ...params });
        } else {
          await create(params);
        }
      }}
    />
  );
};

export default ModalSpace;
