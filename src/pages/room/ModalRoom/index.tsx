import { Form } from '@nutui/nutui-react-taro';

import type { ModalFormProps } from '@/components/ModalForm';
import type { FC } from 'react';

import { getRoomId, postRoom, putRoomId } from '@/api';
import { ModalForm } from '@/components';
import { useRequest } from '@/hooks';
import { useUserStore } from '@/models';
import { Toast } from '@/utils';

interface ModalRoomProps extends Omit<ModalFormProps, 'formProps'> {
  roomId?: number;
  onSuccess?: () => void;
}

const ModalRoom: FC<ModalRoomProps> = ({ roomId, onSuccess, ...rest }) => {
  const { orgId } = useUserStore((state) => state);

  const [form] = Form.useForm();

  // 获取房间详情
  const { run: fetchRoom } = useRequest(getRoomId, {
    manual: true,
    onSuccess({ name }) {
      form.setFieldsValue({ name });
    },
  });

  // 创建房间
  const { run: create } = useRequest(postRoom, {
    manual: true,
    onSuccess() {
      Toast.success('创建成功');
      onSuccess?.();
    },
  });

  // 更新房间名称
  const { run: update } = useRequest(putRoomId, {
    manual: true,
    onSuccess() {
      Toast.success('编辑成功');
      onSuccess?.();
    },
  });

  return (
    <ModalForm
      title={roomId ? '编辑房间' : '创建房间'}
      formProps={{
        form,
        fields: [
          {
            name: 'name',
            contentConfig: {
              renderType: 'input',
              placeholder: '请输入房间名称，如：主卧',
            },
            rules: [
              { required: true, message: '请输入房间名称' },
              { max: 32, message: '房间名称最多32个字符' },
            ],
          },
        ],
      }}
      onVisibleChange={(visible) => {
        if (visible && roomId) {
          fetchRoom({ id: `${roomId}` });
        }
      }}
      onConfirm={async (values) => {
        const { name } = values;
        if (!orgId) return;
        if (roomId) {
          await update({ id: `${roomId}`, orgId, name });
        } else {
          await create({ orgId, name });
        }
      }}
      {...rest}
    />
  );
};

export default ModalRoom;
