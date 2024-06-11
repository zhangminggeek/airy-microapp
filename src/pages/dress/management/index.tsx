import { Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

import { Affix, InputSearch } from '@/components';
import { BasicLayout } from '@/layouts';
import { useProductStore } from '@/models/product';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { typeList } = useProductStore((state) => state);

  return (
    <BasicLayout title="服饰管理" back fill>
      <View className={styles.header}>
        <View className={styles['header-search']}>
          <InputSearch />
        </View>
        <Tabs>
          {typeList.map((item) => (
            <Tabs.TabPane key={item.code} title={item.name} />
          ))}
        </Tabs>
      </View>
      <View className={styles.body}>1</View>
      <Affix
        onClick={() => {
          RouterUtil.navigateTo('/pages/dress/action/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
