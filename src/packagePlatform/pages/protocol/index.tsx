import { Cell } from '@nutui/nutui-react-taro';

import { Icon } from '@/components';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const protocols = [
  { title: '隐私政策', to: '/packagePlatform/pages/protocol/privacy/index' },
  {
    title: '软件许可使用协议',
    to: '/packagePlatform/pages/protocol/software/index',
  },
  { title: '借调协议', to: '/packagePlatform/pages/protocol/lease/index' },
];

const Page = () => {
  return (
    <BasicLayout title="协议指南" back>
      <Cell.Group>
        {protocols.map((item) => (
          <Cell
            key={item.title}
            title={item.title}
            extra={<Icon name="RightOutlined" size={14} />}
            align="center"
            onClick={() => {
              RouterUtil.navigateTo(item.to);
            }}
          />
        ))}
      </Cell.Group>
    </BasicLayout>
  );
};

export default Page;
