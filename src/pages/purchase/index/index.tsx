import { useState } from 'react';

import styles from './index.module.scss';

import { getPurchase } from '@/api';
import { Filter, InfiniteList, InputSearch, Product } from '@/components';
import { HIDE_PRICE } from '@/constants';
import { productTypeMap } from '@/constants/product';
import { PurchaseStatus } from '@/constants/purchase';
import { BasicLayout } from '@/layouts';
import { useUserStore } from '@/models';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { info } = useUserStore((state) => state);

  // 搜索关键字
  const [keyword, setKeyword] = useState<string>('');
  // 筛选条件
  const [condition, setCondition] = useState<Record<string, any>>();

  return (
    <BasicLayout
      className={styles.container}
      title={
        <InputSearch
          placeholder="搜索求购"
          onSearch={(v) => {
            setKeyword(v ?? '');
          }}
        />
      }
      fill
      safeArea={false}
    >
      <InfiniteList
        column="multiple"
        request={getPurchase}
        params={{
          status: `${PurchaseStatus['求购中']}`,
          title: keyword,
          ...condition,
        }}
        header={
          <Filter
            fields={[
              {
                name: 'typeCode',
                title: '类型',
                options: Array.from(productTypeMap.values()),
              },
              {
                name: 'order',
                title: '排序',
                options: [
                  { text: '默认排序', value: 0 },
                  { text: '最新发布', value: 1 },
                  { text: '报价量由高到低', value: 2 },
                  { text: '报价量由低到高', value: 3 },
                ],
                emptyOption: false,
                defaultValue: 0,
              },
            ]}
            value={condition}
            onChange={(v) => {
              setCondition(v);
            }}
          />
        }
        headerFixed
        renderItem={(item) => (
          <Product.Card
            key={item.id}
            image={item.picList?.[0]?.url}
            title={item.title}
            tagList={item.tagList?.map((item) => item.tagName)}
            allowLease
            allowSell
            leasePrice={
              info?.account
                ? [item.minLeasePrice, item.maxLeasePrice]
                : HIDE_PRICE
            }
            sellingPrice={
              info?.account ? [item.minPrice, item.maxPrice] : HIDE_PRICE
            }
            companyLogo={item.companyLogo}
            companyName={item.companyName}
            extra={
              info?.account
                ? { icon: 'FormOutlined', text: item.quotations }
                : undefined
            }
            onClick={() => {
              RouterUtil.navigateTo('/pages/purchase/detail/index', {
                id: item.id,
              });
            }}
            onCompanyClick={() => {
              RouterUtil.navigateTo('/packageCompany/pages/index/index', {
                id: item.companyId,
              });
            }}
          />
        )}
      />
    </BasicLayout>
  );
};

export default Page;
