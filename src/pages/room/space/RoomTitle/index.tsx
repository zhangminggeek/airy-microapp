import { Fragment, useState } from 'react';

import ModalRoom from '../../ModalRoom';

import type { FC } from 'react';

import { deleteRoomId } from '@/api';
import { ActionSheet, Title } from '@/components';
import { useRequest } from '@/hooks';
import { RouterUtil, Toast } from '@/utils';

interface RoomTitleProps {
  roomId: number;
  roomName?: string;
  onEdit?: () => void;
}

const RoomTitle: FC<RoomTitleProps> = ({ roomId, roomName, onEdit }) => {
  const [showModalRoom, setShowModalRoom] = useState<boolean>(false);

  // 删除房间
  const { run: deleteRoom } = useRequest(deleteRoomId, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateBack();
    },
  });

  return (
    <Fragment>
      <Title
        extra={
          <ActionSheet
            title={roomName}
            options={[
              { key: 'edit', name: '编辑' },
              { key: 'delete', name: '删除', danger: true },
            ]}
            onSelect={({ key }) => {
              if (key === 'edit') {
                setShowModalRoom(true);
              } else if (key === 'delete') {
                Toast.confirm({
                  title: '是否删除该房间？',
                  content: '请先删除房间内的储物空间',
                  success() {
                    deleteRoom({ id: `${roomId}` });
                  },
                });
              }
            }}
          />
        }
      >
        {roomName}
      </Title>
      <ModalRoom
        visible={showModalRoom}
        roomId={roomId}
        onSuccess={() => {
          onEdit?.();
          setShowModalRoom(false);
        }}
        onCancel={() => {
          setShowModalRoom(false);
        }}
      />
    </Fragment>
  );
};

export default RoomTitle;
