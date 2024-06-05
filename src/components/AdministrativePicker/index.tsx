import { Cascader } from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import { useMemo, useState } from 'react';

import type { CascaderNode } from '@/interfaces/components';
import type { AdministrativeCode } from '@/models/global';
import type { CSSProperties, FC } from 'react';

import { PickerView } from '@/components';
import { useGlobalStore } from '@/models';

type ValueType = [string, string, string];

interface AdministrativePickerProps {
  className?: string;
  style?: CSSProperties;
  value?: ValueType;
  onChange?: (value?: ValueType) => void;
}

const PREFIX_CLS = 'm-administrative-picker';

const AdministrativePicker: FC<AdministrativePickerProps> = ({
  className,
  style,
  value,
  onChange,
}) => {
  const {
    administrativeCodeMap,
    fetchAdministrativeCode,
    saveAdministrativeCode,
  } = useGlobalStore((state) => state);

  const [visible, setVisible] = useState<boolean>(false);

  const text = useMemo(() => {
    return value
      ?.map((code) => administrativeCodeMap.get(code)?.name)
      ?.join(' / ');
  }, [value, administrativeCodeMap]);

  return (
    <PickerView
      className={classnames(PREFIX_CLS, className)}
      style={style}
      block
      arrowType="right"
      text={text}
      onClick={() => {
        setVisible(true);
      }}
    >
      <Cascader
        visible={visible}
        lazy
        onLoad={async (node: CascaderNode, resolve) => {
          const { root, value } = node;
          let list: AdministrativeCode[];
          if (root) {
            list = await fetchAdministrativeCode();
          } else {
            list = administrativeCodeMap.get(value)?.children ?? [];
          }
          const ret = list?.map((item) => {
            saveAdministrativeCode(item.code, item);
            return { text: item.name, value: item.code };
          });
          resolve(ret);
        }}
        onChange={(value: ValueType) => {
          onChange?.(value);
        }}
        onClose={() => {
          setVisible(false);
        }}
      />
    </PickerView>
  );
};

export default AdministrativePicker;
