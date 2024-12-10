import { Button } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import { putCompany } from '@/api';
import { EditableCell, Text } from '@/components';
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
            title: '店铺名称',
            name: 'name',
            renderConfig: {
              renderType: 'textarea',
              placeholder: '请输入店铺名称',
              maxLength: 50,
            },
          },
          {
            title: '店铺LOGO',
            name: 'logo',
            renderConfig: {
              renderType: 'avatar',
              name: info?.company?.name,
            },
          },
          {
            title: '联系人',
            name: 'contacts',
            renderConfig: {
              renderType: 'textarea',
              placeholder: '请输入联系人',
              maxLength: 8,
            },
          },
          {
            title: '联系方式',
            name: 'contactPhone',
            editable: false,
            renderConfig: {
              renderType: 'text',
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
            title: '店铺地址',
            name: 'region',
            renderConfig: {
              renderType: 'region',
            },
          },
          {
            title: '详细地址',
            name: 'address',
            renderConfig: {
              renderType: 'textarea',
              placeholder: '请输入详细地址',
              maxLength: 200,
            },
          },
          {
            title: '营业执照',
            name: 'license',
            renderConfig: {
              renderType: 'custom',
              children: (
                <Text>{info?.company?.license ? '已认证' : '未认证'}</Text>
              ),
              onClick: () => {
                RouterUtil.navigateTo(
                  '/packageCompany/pages/setting/license/index',
                );
              },
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
        data={{
          name: info?.company?.name,
          logo: info?.company?.logo,
          contacts: info?.company?.contacts,
          contactPhone: info?.company?.contactPhone,
          intro: info?.company?.intro,
          region: info?.company?.province
            ? [
                info?.company?.province,
                info?.company?.city,
                info?.company?.area,
              ]
            : [],
          address: info?.company?.address,
        }}
        onChange={async (field, value) => {
          console.log('field', field, value);
          if (field === 'region') {
            if (!(Array.isArray(value) && value.length)) return;
            const [province, city, area] = value;
            await update({
              province,
              city,
              area,
            });
            console.log('region', value);
          } else {
            await update({ [field]: value });
          }
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
