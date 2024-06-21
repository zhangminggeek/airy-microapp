import { ArrowRight } from '@nutui/icons-react-taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../../constants';

import type { GetProductIdResponse } from '@/api';
import type { Option } from '@/components/Descriptions';
import type { CSSProperties, FC } from 'react';

import { Descriptions, Section } from '@/components';
import { useDialog } from '@/hooks';

import './index.scss';

export interface FieldProps {
  className?: string;
  style?: CSSProperties;
  fieldList?: Option[];
  data: any;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-detail-field`;

const Field: FC<FieldProps> = ({ className, style, fieldList = [], data }) => {
  // 尺码详情弹框
  const { renderDialog, open } = useDialog({
    id: 'size-info',
    title: '尺码',
    hideCancelButton: true,
  });

  return (
    <Section
      className={classnames(PREFIX_CLS, className)}
      style={style}
      title="产品信息"
    >
      <Descriptions
        options={[
          { field: 'no', label: '编号', col: 2 },
          { field: 'productTypeName', label: '类型' },
          {
            field: 'inventory',
            label: '尺码',
            render: (v: GetProductIdResponse['inventory']) => {
              return (
                <View
                  className={`${PREFIX_CLS}-btn`}
                  onClick={() => {
                    open({
                      content: v
                        ?.map((item) => `${item.size.name}/${item.count}件`)
                        ?.join('、'),
                    });
                  }}
                >
                  <View className={`${PREFIX_CLS}-btn-text`}>
                    {v?.map((item) => item.size.name)?.join('/')}
                  </View>
                  <ArrowRight size={12} color="#7c7c7c" />
                </View>
              );
            },
          },
          ...fieldList,
        ]}
        data={data}
      />
      {renderDialog()}
    </Section>
  );
};

export default Field;
