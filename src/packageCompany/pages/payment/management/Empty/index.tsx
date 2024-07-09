import { Text, View } from '@tarojs/components';

import styles from './index.module.scss';

import type { FC } from 'react';

import { Icon, Space } from '@/components';
import { CompanyPaymentType } from '@/constants/company';
import { RouterUtil } from '@/utils';

interface EmptyProps {
  text: string;
  type: CompanyPaymentType;
}

const Empty: FC<EmptyProps> = ({ text, type }) => {
  return (
    <View
      className={styles.empty}
      onClick={() => {
        RouterUtil.navigateTo('/packageCompany/pages/payment/action/index', {
          type,
        });
      }}
    >
      <Space className={styles.content}>
        <Icon name="PlusOutlined" />
        <Text>{text}</Text>
      </Space>
    </View>
  );
};

export default Empty;
