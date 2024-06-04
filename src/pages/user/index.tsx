import { ArrowRight, Mail, Processing, Receipt } from '@nutui/icons-react-taro';
import { Cell } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import styles from './index.module.scss';

import { Avatar } from '@/components';
import BasicLayout from '@/layouts/BasicLayout';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { name, no, avatar } = useUserStore((state) => state);

  const options = [
    {
      key: 'orginaztion_management',
      title: '组织管理',
      icon: <Processing size={14} color="#148aff" />,
      onClick() {
        RouterUtil.navigateTo('/pages/organization/index');
      },
    },
    {
      key: 'protocol',
      title: '用户协议',
      icon: <Receipt size={14} color="#ffab24" />,
      onClick() {
        Taro.openPrivacyContract();
      },
    },
    {
      key: 'feedback',
      title: '意见反馈',
      icon: <Mail size={14} color="#ff6952" />,
      onClick() {
        RouterUtil.navigateTo('/pages/user/feedback/index');
      },
    },
  ];

  return (
    <BasicLayout>
      <View
        className={styles.header}
        onClick={() => {
          RouterUtil.navigateTo('/pages/user/profile/index');
        }}
      >
        <Avatar className={styles['header-avatar']} src={avatar} size="large" />
        <View className={styles['header-info']}>
          <View className={styles['header-info-name']}>{name}</View>
          <View className={styles['header-info-no']}>编号: {no}</View>
        </View>
        <ArrowRight
          className={styles['header-icon']}
          size={14}
          color="#7c7c7c"
        />
      </View>
      <Cell.Group className={styles.body}>
        {options.map((item) => (
          <Cell
            className={styles.cell}
            key={item.key}
            title={
              <View className={styles['cell-title']}>
                {item.icon}
                {item.title}
              </View>
            }
            extra={<ArrowRight size={12} />}
            align="center"
            onClick={item.onClick}
          />
        ))}
      </Cell.Group>
    </BasicLayout>
  );
};

export default Page;
