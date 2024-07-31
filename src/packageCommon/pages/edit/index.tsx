import { Button, Form, TextArea } from '@nutui/nutui-react-taro';
import { useDidShow, useRouter } from '@tarojs/taro';
import { useMemo } from 'react';

import { BasicLayout } from '@/layouts';
import { EventUtil, parseJson, RouterUtil } from '@/utils';

const Page = () => {
  const { params } = useRouter();

  const [form] = Form.useForm();

  useDidShow(() => {
    if (_params.field && _params.defaultValue) {
      form.setFieldsValue({ [_params.field]: _params.defaultValue });
    }
  });

  const _params = useMemo(() => {
    const { title, renderType, field, defaultValue, props } = params;
    return {
      title: title ? decodeURIComponent(title) : '',
      renderType,
      field: field ? decodeURIComponent(field) : '',
      defaultValue: defaultValue ? decodeURIComponent(defaultValue) : '',
      props: props ? parseJson(decodeURIComponent(props)) : {},
    };
  }, [params]);

  const comp = useMemo(() => {
    switch (_params.renderType) {
      case 'textarea':
        return <TextArea showCount {...(_params.props as any)} />;
      default:
        return null;
    }
  }, [_params]);

  return (
    <BasicLayout title={_params.title} back>
      <Form
        form={form}
        footer={
          <Button type="primary" formType="submit" size="xlarge" block>
            确定
          </Button>
        }
        onFinish={(values) => {
          if (_params.field) {
            EventUtil.emit(_params.field, values?.[_params.field]);
          }
          RouterUtil.navigateBack();
        }}
      >
        <Form.Item name={_params.field}>{comp}</Form.Item>
      </Form>
    </BasicLayout>
  );
};

export default Page;
