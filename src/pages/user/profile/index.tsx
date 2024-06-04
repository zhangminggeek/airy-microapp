import { Button } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';

import styles from './index.module.scss';

import { putUserSelf } from '@/api';
import { EditableCell, Title } from '@/components';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import BasicLayout from '@/layouts/BasicLayout';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { no, avatar, name, fetchUserInfo } = useUserStore((state) => state);

  // 更新用户信息
  const { run: updateProfile } = useRequest(putUserSelf, {
    manual: true,
    onSuccess() {
      fetchUserInfo();
    },
  });

  // 退出登录
  const logout = () => {
    Taro.removeStorageSync(StorageKey.TOKEN);
    RouterUtil.navigateTo('/pages/login/index');
  };

  return (
    <BasicLayout>
      <Title>基础信息</Title>
      <EditableCell
        fields={[
          {
            name: 'no',
            title: '编号',
            editable: false,
            renderConfig: {
              renderType: 'text',
            },
          },
          {
            name: 'avatar',
            title: '头像',
            renderConfig: {
              renderType: 'avatar',
            },
          },
          {
            name: 'name',
            title: '昵称',
            rules: [
              { required: true, message: '请输入昵称' },
              { max: 32, message: '昵称最多32个字符' },
            ],
            renderConfig: {
              renderType: 'input',
              type: 'nickname',
            },
          },
        ]}
        data={{ no, avatar, name }}
        onChange={async (field, value) => {
          await updateProfile({ [field]: value });
        }}
      />
      <Button className={styles.btn} type="danger" block onClick={logout}>
        退出登录
      </Button>
    </BasicLayout>
  );
};

export default Page;
