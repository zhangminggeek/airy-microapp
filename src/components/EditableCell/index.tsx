import { Cell } from '@nutui/nutui-react-taro';
import classnames from 'classnames';

import { PREFIX_CLS } from './constants';
import { Context } from './context';
import renderContent, { type RenderContentProps } from './render';

import type { CSSProperties, FC } from 'react';

import { isNil, Toast } from '@/utils';

import './index.scss';

interface Rule {
  required?: boolean;
  min?: number;
  max?: number;
  message?: string;
  pattern?: RegExp;
  validator?: (value: any) => Promise<void>;
}

interface Field {
  name: string;
  title: string;
  editable?: boolean;
  rules?: Rule[];
  renderConfig: RenderContentProps;
}

interface EditableCellProps {
  className?: string;
  style?: CSSProperties;
  fields: Field[];
  data?: { [key: string]: any };
  onChange?: (field: string, value: any) => Promise<void>;
}

const EditableCell: FC<EditableCellProps> = ({
  className,
  style,
  fields = [],
  data,
  onChange,
}) => {
  const handleCheck: EditableCellProps['onChange'] = async (field, value) => {
    const rules = fields.find((item) => item.name === field)?.rules;
    if (!rules) {
      return Promise.resolve();
    }
    for (const rule of rules) {
      // 校验必填
      if (rule.required && isNil(value, false)) {
        Toast.info(rule.message || '请输入内容');
        return Promise.reject();
      }
      // 校验最小长度
      if (rule.min && value.length < rule.min) {
        Toast.info(rule.message || `长度不能小于${rule.min}`);
        return Promise.reject();
      }
      // 校验最大长度
      if (rule.max && value.length > rule.max) {
        Toast.info(rule.message || `长度不能大于${rule.max}`);
        return Promise.reject();
      }
      // 校验正则
      if (rule.pattern && !rule.pattern.test(value)) {
        Toast.info(rule.message || '格式不正确');
        return Promise.reject();
      }
      // 自定义校验
      if (rule.validator) {
        return rule.validator(value);
      }
    }
  };

  const handleChange = async (field: string, value: any) => {
    await handleCheck(field, value);
    return onChange?.(field, value);
  };

  return (
    <Cell.Group className={classnames(PREFIX_CLS, className)} style={style}>
      {fields?.map(({ name, title, editable = true, renderConfig }) => (
        <Context.Provider
          key={name}
          value={{
            title,
            name,
            editable,
            value: data?.[name],
            onChange: handleChange,
          }}
        >
          <Cell
            className={`${PREFIX_CLS}-item`}
            title={title}
            extra={renderContent(renderConfig)}
            align="center"
          />
        </Context.Provider>
      ))}
    </Cell.Group>
  );
};

export default EditableCell;
