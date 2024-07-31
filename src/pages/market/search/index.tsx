import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import { productTypeOptions } from '../index/config';

import styles from './index.module.scss';

import { OSS_ASSETS_DIR } from '@/constants';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  return (
    <BasicLayout className={styles.container} back>
      <View className={styles.title}>请选择搜索类目</View>
      <View className={styles.category}>
        {productTypeOptions.map((item) => {
          return (
            <View
              key={item.value}
              className={styles['category-item']}
              onClick={() => {
                RouterUtil.navigateTo('/pages/market/category/index', {
                  typeCode: item.value,
                  from: 'search',
                });
              }}
            >
              <Image
                className={styles['category-item-image']}
                src={`${OSS_ASSETS_DIR}/${item.imageName}`}
                width={72}
                height={72}
              />
              <View className={styles['category-item-name']}>{item.label}</View>
            </View>
          );
        })}
      </View>
    </BasicLayout>
  );
};

export default Page;
