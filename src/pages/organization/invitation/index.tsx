import { Button, Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useDidShow, useRouter } from '@tarojs/taro';

import styles from './index.module.scss';

import { getUserId, postOrganizationJoin } from '@/api';
import { OSS_PREFIX } from '@/constants';
import { useRequest } from '@/hooks';
import BasicLayout from '@/layouts/BasicLayout';
import { useOrganizationStore } from '@/models';
import { RouterUtil, Toast } from '@/utils';

interface Router {
  params: {
    userId: string;
    orgId: string;
    target: string;
    expried: string;
  };
}

const Page = () => {
  const {
    params: { userId, orgId },
  } = useRouter() as Router;

  const { changeOrganization, fetchOrganizationList } = useOrganizationStore(
    (state) => state,
  );

  useDidShow(() => {
    if (userId) {
      fetchUser({ id: userId });
    }
  });

  // 获取用户详情
  const { data, run: fetchUser } = useRequest(getUserId, { manual: true });

  // 加入组织
  const { run: joinOrganization } = useRequest(postOrganizationJoin, {
    manual: true,
    async onSuccess() {
      Toast.success('加入组织成功');
      // 把默认组织切换成加入的组织
      await changeOrganization(Number(orgId));
      await fetchOrganizationList();
      setTimeout(() => {
        RouterUtil.switchTab('/pages/room/index');
      }, 2000);
    },
  });

  return (
    <BasicLayout className={styles.container}>
      <View className={styles.content}>
        <View className={styles.title}>{data?.name}邀请您加入ta的组织</View>
        <Image
          className={styles.img}
          src={`${OSS_PREFIX}/assets/invitation.png`}
          width={300}
          height={300}
        />
        <View className={styles.action}>
          <Button
            className={styles.btn}
            block
            size="small"
            onClick={() => {
              RouterUtil.switchTab('/pages/room/index');
            }}
          >
            取消
          </Button>
          <Button
            className={styles.btn}
            type="primary"
            block
            size="small"
            onClick={() => {
              joinOrganization({ orgId: Number(orgId) });
            }}
          >
            加入
          </Button>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Page;
