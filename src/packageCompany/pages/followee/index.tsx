import { View } from '@tarojs/components';
import { useRef } from 'react';

import styles from './index.module.scss';

import { getCompanyFollowee, postCompanyFollowToggle } from '@/api';
import { Avatar, List } from '@/components';
import { ActionType } from '@/components/List';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  const actionRef = useRef<ActionType>(null);

  const { renderDialog, open } = useDialog({
    id: 'confirm',
    title: '是否确认取消关注',
    onConfirm(_, params) {
      run({ id: params.id, isFollow: false });
    },
  });

  // 取消关注
  const { run } = useRequest(postCompanyFollowToggle, {
    manual: true,
    onSuccess() {
      actionRef.current?.refresh();
    },
  });

  return (
    <BasicLayout title="我的关注" back>
      <List
        className={styles.list}
        actionRef={actionRef}
        column={1}
        request={getCompanyFollowee}
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
              <View
                className={styles['item-btn']}
                onClick={(e) => {
                  e.stopPropagation();
                  open({ params: { id: item.id } });
                }}
              >
                已关注
              </View>
            </View>
          </View>
        )}
      />
      {renderDialog()}
    </BasicLayout>
  );
};

export default Page;
