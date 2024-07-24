import classnames from 'classnames';

import { ROOT_PREFIX_CLS } from '../../constants';

import type { Option } from '@/components/Descriptions';
import type { CSSProperties, FC } from 'react';

import { Descriptions, Section } from '@/components';

import './index.scss';

export interface FieldProps {
  className?: string;
  style?: CSSProperties;
  fieldList?: Option[];
  data: any;
}

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-detail-field`;

const Field: FC<FieldProps> = ({ className, style, fieldList = [], data }) => {
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
          { field: 'size', label: '尺码' },
          ...fieldList,
        ]}
        data={data}
      />
    </Section>
  );
};

export default Field;
