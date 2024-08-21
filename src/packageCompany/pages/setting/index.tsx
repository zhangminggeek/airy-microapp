import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import { putCompany } from '@/api';
import { EditableCell } from '@/components';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { info, fetchUserInfo, logout } = useUserStore((state) => state);

  // 更新企业信息
  const { run: update } = useRequest(putCompany, {
    manual: true,
    onSuccess() {
      fetchUserInfo();
    },
  });

  // 退出登录二次确认
  const { renderDialog, open } = useDialog({
    id: 'logout',
    title: '是否确认退出登录？',
    onConfirm() {
      logout();
      RouterUtil.switchTab('/pages/user/index/index');
    },
  });

  return (
    <BasicLayout title="设置" back>
      <EditableCell
        fields={[
          {
            title: '店铺LOGO',
            name: 'logo',
            renderConfig: {
              renderType: 'avatar',
              name: info?.company?.name,
            },
          },
          {
            title: '简介',
            name: 'intro',
            renderConfig: {
              renderType: 'textarea',
              placeholder: '一句话介绍店铺',
              maxLength: 200,
            },
          },
          {
            title: '修改密码',
            name: 'password',
            renderConfig: {
              renderType: 'custom',
              onClick: () => {
                RouterUtil.navigateTo(
                  '/pages/user/password/verification/index',
                );
              },
            },
          },
        ]}
        data={{ logo: info?.company?.logo, intro: info?.company?.intro }}
        onChange={async (field, value) => {
          await update({ [field]: value });
        }}
      />
      <View className={styles.logout}>
        <Button
          type="primary"
          size="large"
          block
          onClick={() => {
            open();
          }}
        >
          退出登录
        </Button>
      </View>
      {renderDialog()}
    </BasicLayout>
  );
};

export default Page;
