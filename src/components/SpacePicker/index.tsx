import { Cascader, Popup } from '@nutui/nutui-react-taro';
import { Text } from '@tarojs/components';
import classnames from 'classnames';
import { useRef, useState } from 'react';

import type { GetSpaceResponse } from '@/api';
import type { CSSProperties, FC } from 'react';

import { getSpace } from '@/api';
import { Empty, PickerView } from '@/components';
import { useRequest } from '@/hooks';
import { RouterUtil } from '@/utils';

import './index.scss';

type SpaceType = GetSpaceResponse[0];
type ValueType = [number, number, number];
interface CascaderNode {
  loading: boolean;
  root: boolean;
  text: string;
  value: string;
  level: number;
}

interface SpacePickerProps {
  className?: string;
  style?: CSSProperties;
  roomId: number;
  value?: ValueType;
  onChange?: (value: ValueType) => void;
}

const PREFIX_CLS = 'm-space-picker';

const SpacePicker: FC<SpacePickerProps> = ({
  className,
  style,
  roomId,
  value,
  onChange,
}) => {
  // 存储全量空间id对应的空间信息，作为字典，优化查询体验
  const spaceStoreRef = useRef(new Map<number, SpaceType>([]));

  // 是否显示选择器
  const [visible, setVisible] = useState<boolean>(false);
  // 是否显示引导 Popup
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // 获取存储空间列表
  const { run: getSpaceList } = useRequest(getSpace, {
    manual: true,
  });

  return (
    <PickerView
      text={value
        ?.map((id) => spaceStoreRef.current.get(id)?.name)
        ?.join(' / ')}
      onClick={() => {
        if (spaceStoreRef.current?.size) {
          setVisible(true);
        } else {
          setShowPopup(true);
        }
      }}
    >
      <Cascader
        className={classnames(PREFIX_CLS, className)}
        style={style}
        title="选择储物空间"
        visible={visible}
        value={value}
        lazy
        onLoad={async (node: CascaderNode, resolve) => {
          const { root, value } = node;
          if (root) {
            // 初始化是获取全部空间列表，并进行存储，方便查询
            const res = await getSpaceList({ roomId: `${roomId}` });
            res.data?.forEach((space) => {
              spaceStoreRef.current.set(space.id, space);
            });
          }
          const currentSpaceId = root ? 0 : Number(value);
          const list =
            Array.from(spaceStoreRef.current?.values())?.filter(
              (item) => item.parentId === currentSpaceId,
            ) ?? [];
          resolve(list?.map(({ name, id }) => ({ text: name, value: id })));
        }}
        onChange={(value: ValueType) => {
          onChange?.(value);
        }}
        onClose={() => {
          setVisible(false);
        }}
      />
      <Popup
        className={`${PREFIX_CLS}-popup`}
        visible={showPopup}
        position="bottom"
        round
        onClose={() => {
          setShowPopup(false);
        }}
      >
        <Empty
          className={`${PREFIX_CLS}-popup-empty`}
          title="暂无储物空间"
          description={
            <Text className={`${PREFIX_CLS}-popup-empty-desc`}>
              点击前往添加储物空间
            </Text>
          }
          onClick={() => {
            RouterUtil.navigateTo('/pages/room/space/index', { roomId });
            setShowPopup(false);
          }}
        />
      </Popup>
    </PickerView>
  );
};

export default SpacePicker;
