import { Edit, Trash } from '@nutui/icons-react-taro';
import { Button, Checkbox } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';

import styles from './index.module.scss';

import { deleteAddressId, getAddress, putAddressDefault } from '@/api';
import { AddressCard } from '@/components';
import { useDialog, useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  useDidShow(() => {
    run();
  });

  // 获取地址列表
  const { data, run } = useRequest(getAddress, { manual: true });

  // 切换默认地址
  const { run: toggle } = useRequest(putAddressDefault, {
    manual: true,
    onSuccess() {
      Toast.success('切换成功');
      run();
    },
  });

  // 删除地址
  const { run: deleteAddress } = useRequest(deleteAddressId, {
    manual: true,
    onSuccess() {
      run();
    },
  });

  // 删除地址二次确认
  const { renderDialog, open } = useDialog<{ id: number }>({
    id: 'delete-confirm',
    title: '删除地址',
    content: '是否删除该地址？',
    onConfirm(_, params) {
      const { id } = params ?? {};
      deleteAddress({ id: `${id}` });
    },
  });

  return (
    <BasicLayout title="地址管理" back>
      {data?.map((item) => (
        <AddressCard
          key={item.id}
          className={styles.card}
          name={item.recipient}
          phone={item.phone}
          province={item.province}
          city={item.city}
          area={item.area}
          address={item.address}
          isDefault={!!item.isDefault}
          footer={
            <View className={styles['card-footer']}>
              <Checkbox
                checked={!!item.isDefault}
                onChange={(checked) => {
                  if (checked) {
                    toggle({ id: item.id });
                  }
                }}
              >
                设为默认地址
              </Checkbox>
              <View>
                <Button
                  className={styles['card-footer-btn']}
                  icon={<Edit />}
                  fill="none"
                  size="mini"
                  onClick={() => {
                    RouterUtil.navigateTo(
                      '/packageCompany/pages/address/action/index',
                      { id: item.id },
                    );
                  }}
                >
                  编辑
                </Button>
                <Button
                  className={styles['card-footer-btn']}
                  icon={<Trash />}
                  fill="none"
                  size="mini"
                  onClick={() => {
                    open({ params: { id: item.id } });
                  }}
                >
                  删除
                </Button>
              </View>
            </View>
          }
        />
      ))}
      <View className={styles['btn-wrapper']}>
        <Button
          type="primary"
          size="xlarge"
          block
          onClick={() => {
            RouterUtil.navigateTo('/packageCompany/pages/address/action/index');
          }}
        >
          新增收货地址
        </Button>
      </View>
      {renderDialog()}
    </BasicLayout>
  );
};

export default Page;
