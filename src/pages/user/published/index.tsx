import { Tabs } from '@nutui/nutui-react-taro';
import { useState } from 'react';

import { Affix } from '@/components';
import { MarketProductStatus } from '@/constants/market';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const tabs = [
    { title: '在售', value: MarketProductStatus['在售'] },
    { title: '已下架', value: MarketProductStatus['已下架'] },
    { title: '审核中', value: MarketProductStatus['审核中'] },
    { title: '未通过', value: MarketProductStatus['未通过'] },
  ];

  return (
    <BasicLayout title="我发布的" back fill>
      <Tabs
        value={currentIndex}
        onChange={(index: number) => {
          setCurrentIndex(index);
        }}
      >
        {tabs.map((item) => (
          <Tabs.TabPane key={item.value} title={item.title} />
        ))}
      </Tabs>
      <Affix
        onClick={() => {
          RouterUtil.navigateTo('/pages/market/action/index');
        }}
      />
    </BasicLayout>
  );
};

export default Page;
