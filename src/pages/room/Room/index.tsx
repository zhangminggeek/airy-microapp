import { Add, Layers, Setting } from '@nutui/icons-react-taro';
import { Cell } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';

import styles from './index.module.scss';

import type { GetRoomResponse } from '@/api';
import type { FC } from 'react';

import { Avatar, Space } from '@/components';
import { OSS_PREFIX } from '@/constants';
import { RouterUtil } from '@/utils';

interface RoomProps {
  id: number;
  name: string;
  belongingsList?: GetRoomResponse[0]['belongingsList'];
}

const Room: FC<RoomProps> = ({ id, name, belongingsList }) => {
  return (
    <Cell.Group className={styles.room}>
      <Cell
        className={styles['room-header']}
        title={
          <View className={styles['room-header-title']}>
            <Layers width="16px" height="16px" color="#135D66" />
            <Space
              className={styles['room-header-title-name']}
              size={4}
              align="baseline"
              block
            >
              {name}
              <Text className={styles['room-header-title-name-count']}>
                ({belongingsList?.length ?? 0})
              </Text>
            </Space>
          </View>
        }
        extra={
          <Setting
            width="16px"
            height="16px"
            onClick={() => {
              RouterUtil.navigateTo('/pages/room/space/index', { roomId: id });
            }}
          />
        }
      />
      <Cell className={styles['room-body']}>
        {belongingsList?.map((item) => (
          <Avatar
            key={item.id}
            src={item.pic}
            name={item.name}
            shape="square"
            size="60"
            defaultImage={`${OSS_PREFIX}/assets/default_belongings.png`}
            onClick={() => {
              RouterUtil.navigateTo('/pages/belongings/detail/index', {
                id: item.id,
              });
            }}
          />
        ))}
        <View
          className={styles['room-body-btn']}
          onClick={() => {
            RouterUtil.navigateTo('/pages/belongings/action/index', {
              roomId: id,
            });
          }}
        >
          <Add color="#e0e0e0" />
        </View>
      </Cell>
    </Cell.Group>
  );
};

export default Room;
