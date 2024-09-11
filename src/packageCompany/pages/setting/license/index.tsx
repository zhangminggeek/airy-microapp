import { Button, Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useState } from 'react';

import styles from './index.module.scss';

import { postCompanyLicense } from '@/api';
import { Upload } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { info, fetchUserInfo } = useUserStore((state) => state);
  // 营业执照地址
  const [url, setUrl] = useState<string | undefined>(info?.company?.license);

  // 上传营业执照
  const { run } = useRequest(postCompanyLicense, {
    manual: true,
    onSuccess() {
      fetchUserInfo();
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout title="营业执照" back>
      <View className={styles.content}>
        <Upload
          className={styles.upload}
          mediaType={['image']}
          maxCount={1}
          btn={
            <Image
              className={styles['upload-btn']}
              src={`${OSS_ASSETS_DIR}/upload_license_button.png`}
              width="100%"
              height="100%"
            />
          }
          value={url ? [url] : undefined}
          onChange={(v) => {
            setUrl(v?.[0]);
          }}
        />
        <View className={styles.tip}>点击上传营业执照</View>
      </View>
      <View className={styles['btn-wrapper']}>
        <Button
          type="primary"
          size="xlarge"
          block
          disabled={!url || url === info?.company?.license}
          onClick={() => {
            if (!url) {
              Toast.info('请先上传营业执照');
              return;
            }
            run({ license: url });
          }}
        >
          提交
        </Button>
      </View>
    </BasicLayout>
  );
};

export default Page;
