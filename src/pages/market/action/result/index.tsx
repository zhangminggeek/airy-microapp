import { useRef } from 'react';

import type { ActionType } from '@/components/ActionSheet';

import { ActionSheet, Result } from '@/components';
import { ProductSource } from '@/constants/product';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  const ref = useRef<ActionType>(null);

  return (
    <BasicLayout back>
      <Result
        title="发布成功"
        desc="正在等待审核，审核需要几分钟"
        status="success"
        okText="再发一件"
        cancelText="返回"
        onOk={() => {
          ref.current?.setOpen(true);
        }}
        onCancel={() => {
          RouterUtil.navigateBack();
        }}
      />
      <ActionSheet
        ref={ref}
        options={[
          { name: '从服装管理中选择', key: ProductSource['服装管理'] },
          { name: '从相册中选择', key: ProductSource['相册'] },
        ]}
        onSelect={(option) => {
          RouterUtil.navigateTo('/pages/market/action/index', {
            source: option.key,
          });
        }}
      />
    </BasicLayout>
  );
};

export default Page;
