import { Image, View } from '@tarojs/components';

import styles from './index.module.scss';

import { OSS_ASSETS_DIR } from '@/constants';
import { BasicLayout } from '@/layouts';

const Page = () => {
  return (
    <BasicLayout title="限时预约" back fill>
      <View className={styles.content}>
        <Image
          className={styles.image}
          src={`${OSS_ASSETS_DIR}/feature_reservation_1.jpg`}
          mode="widthFix"
        />
        <Image
          className={styles.image}
          src={`${OSS_ASSETS_DIR}/feature_reservation_2.jpg`}
          mode="widthFix"
        />
        <Image
          className={styles.image}
          src={`${OSS_ASSETS_DIR}/feature_reservation_3.jpg`}
          mode="widthFix"
        />
      </View>
    </BasicLayout>
  );
};

export default Page;
