import { Check, Home } from '@nutui/icons-react-taro';
import { Popup } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { Fragment, useMemo, useState } from 'react';

import type { PopupProps } from '@nutui/nutui-react-taro';
import type { FC } from 'react';

import { useOrganizationStore, useUserStore } from '@/models';

import './index.scss';

interface OrganizationPickerProps extends Partial<PopupProps> {
  children?: JSX.Element;
}

const PREFIX_CLS = 'm-organization-picker';

const OrganizationPicker: FC<OrganizationPickerProps> = ({
  visible,
  children,
  onClose,
  ...rest
}) => {
  const { orgId } = useUserStore((state) => state);
  const { list, changeOrganization } = useOrganizationStore((state) => state);

  // 内部显示状态
  const [innerVisible, setInnerVisible] = useState<boolean>(false);

  const _visible = useMemo(() => {
    if (visible !== undefined) {
      return visible;
    }
    return innerVisible;
  }, [visible, innerVisible]);

  return (
    <Fragment>
      <View
        onClick={() => {
          setInnerVisible(true);
        }}
      >
        {children}
      </View>
      <Popup
        className={`${PREFIX_CLS}-popup`}
        visible={_visible}
        onClose={() => {
          setInnerVisible(false);
          onClose?.();
        }}
        {...rest}
      >
        <View className={`${PREFIX_CLS}-popup-content`}>
          <View className={`${PREFIX_CLS}-popup-content-title`}>选择组织</View>
          <View className={`${PREFIX_CLS}-popup-content-list`}>
            {list?.map((item) => (
              <View
                key={item.id}
                className={`${PREFIX_CLS}-popup-content-item`}
                onClick={() => {
                  changeOrganization(item.id);
                  setInnerVisible(false);
                  onClose?.();
                }}
              >
                <View className={`${PREFIX_CLS}-popup-content-item-name`}>
                  <Home color="#77B0AA" size={14} />
                  {item.name}
                </View>
                {item.id === orgId ? (
                  <Check
                    className={`${PREFIX_CLS}-popup-content-item-icon`}
                    color="#003C43"
                    size={14}
                  />
                ) : null}
              </View>
            ))}
          </View>
        </View>
      </Popup>
    </Fragment>
  );
};

export default OrganizationPicker;
