import { View } from '@tarojs/components';

import styles from './index.module.scss';

import { getCompanyFans } from '@/api';
import { Avatar, List } from '@/components';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  return (
    <BasicLayout title="我的粉丝" back>
      <List
        className={styles.list}
        column={1}
        request={getCompanyFans}
        renderItem={(item) => (
          <View
            key={item.id}
            className={styles.item}
            onClick={() => {
              RouterUtil.navigateTo('/packageCompany/pages/index/index', {
                id: item.id,
              });
            }}
          >
            <Avatar src={item.logo} name={item.name} size="40" />
            <View className={styles['item-content']}>
              <View className={styles['item-name']}>{item.name}</View>
            </View>
          </View>
        )}
      />
    </BasicLayout>
  );
};

export default Page;
