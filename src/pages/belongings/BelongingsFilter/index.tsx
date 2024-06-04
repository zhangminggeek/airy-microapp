import { Filter } from '@nutui/icons-react-taro';
import { Badge, Button, Popup } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { Fragment, useState } from 'react';

import { ExpirationStatusFilter, RoomFilter, SpaceFilter } from './filters';
import styles from './index.module.scss';

import type { FC } from 'react';

type PathType = [number | undefined, number | undefined, number | undefined];

interface ValueType {
  roomId?: number;
  expirationStatus?: number;
  spacePath?: number[];
}

interface BelongingsFilterProps {
  onConfirm: (value?: ValueType) => void;
  onClear?: () => void;
}

const fields = [
  { name: 'roomId', text: '房间' },
  {
    name: 'spacePath',
    text: '位置',
    showDot(v: PathType | undefined) {
      return !!v?.length;
    },
  },
  { name: 'expirationStatus', text: '过期状态' },
];

const BelongingsFilter: FC<BelongingsFilterProps> = ({
  onConfirm,
  onClear,
}) => {
  // 是否显示筛选弹框
  const [visible, setVisible] = useState<boolean>(false);
  // 当前选中的字段
  const [selectedField, setSelectedField] = useState<string>(fields[0].name);
  // 所有的筛选条件
  const [value, setValue] = useState<ValueType>();

  const renderFilter = () => {
    switch (selectedField) {
      case 'roomId':
        return (
          <RoomFilter
            value={value?.roomId}
            onChange={(v) => {
              const { roomId, spacePath, ...rest } = value ?? {};
              setValue?.({
                ...rest,
                roomId: v,
                spacePath: v ? spacePath : undefined, // 如果反选房间则空间路径清空
              });
            }}
          />
        );
      case 'expirationStatus':
        return (
          <ExpirationStatusFilter
            value={value?.expirationStatus}
            onChange={(v) => {
              setValue?.({ ...value, expirationStatus: v });
            }}
          />
        );
      case 'spacePath': {
        const { roomId, spacePath = [] } = value ?? {};
        const _value: PathType = [spacePath[0], spacePath[1], spacePath[2]];
        return (
          <SpaceFilter
            roomId={roomId}
            value={_value}
            onChange={(v) => {
              setValue?.({
                ...value,
                spacePath: (v?.filter(Boolean) ?? []) as number[],
              });
            }}
            onCreateSpace={() => {
              setVisible(false);
            }}
          />
        );
      }
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <Badge dot={!!value} top="2" right="0" color="#ff6952">
        <Filter
          size={14}
          onClick={() => {
            setVisible(true);
          }}
        />
      </Badge>
      <Popup
        visible={visible}
        position="bottom"
        closeOnOverlayClick={false}
        onClose={() => {
          setVisible(false);
        }}
      >
        <View className={styles.header}>筛选</View>
        <View className={styles.body}>
          <View className={styles.left}>
            {fields.map((item) => (
              <View
                key={item.name}
                className={classnames(styles.field, {
                  [styles['field-selected']]: selectedField === item.name,
                })}
                onClick={() => {
                  setSelectedField(item.name);
                }}
              >
                {selectedField === item.name && (
                  <View className={styles['field-selected-flag']} />
                )}
                <Badge
                  dot={
                    item.showDot
                      ? item.showDot(value?.[item.name])
                      : value?.[item.name] !== undefined
                  }
                  top="2"
                  right="0"
                  color="#ff6952"
                >
                  <View>{item.text}</View>
                </Badge>
              </View>
            ))}
          </View>
          <View className={styles.right}>{renderFilter()}</View>
        </View>
        <View className={styles.footer}>
          <Button
            className={classnames(styles.btn, styles['btn-clear'])}
            onClick={() => {
              setValue(undefined);
              onClear?.();
            }}
          >
            清除
          </Button>
          <Button
            className={classnames(styles.btn, styles['btn-confirm'])}
            type="primary"
            onClick={() => {
              onConfirm?.(value);
              setVisible(false);
            }}
          >
            确定
          </Button>
        </View>
      </Popup>
    </Fragment>
  );
};

export default BelongingsFilter;
