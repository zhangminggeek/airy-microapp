import { Button, Form, Input, TextArea } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';
import ProductFieldPicker from './ProductFieldPicker';
import ProductInventoryPicker from './ProductInventoryPicker';
import ProductTypePicker from './ProductTypePicker';

import { getProductId, getTag, postProduct, putProduct } from '@/api';
import { FormSection, TagChecker, Upload } from '@/components';
import { TagType } from '@/constants/tag';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useProductStore } from '@/models/product';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;
  const [form] = Form.useForm();

  // 当前选中的服饰类型code
  const [currentCode, setCurrentCode] = useState<string>();

  const { fieldMap, fetchProjectField } = useProductStore((state) => state);

  useEffect(() => {
    if (id) {
      fetchDetail({ id: `${id}` });
    }
  }, []);

  // 获取标签选项
  const { data: tagList } = useRequest(getTag, {
    defaultParams: { use: `${TagType.PRODUCT}` },
  });

  // 获取详情
  const { run: fetchDetail } = useRequest(getProductId, {
    manual: true,
    async onSuccess(data) {
      const {
        name,
        picList,
        no,
        brand,
        typeCode,
        inventory,
        fieldList,
        tagList,
        desc,
      } = data;
      await fetchProjectField(typeCode);
      const formData: Record<string, any> = {
        name,
        picList: picList.map((item) => item.url),
        no,
        brand,
        typeCode,
        inventory: inventory?.map((item) => ({
          sizeId: item.sizeId,
          count: item.count,
        })),
        tagIdList: tagList.map((item) => item.tagId),
        desc,
      };
      fieldList.forEach((item) => {
        formData[item.fieldKey] = item.fieldValue;
      });
      form.setFieldsValue(formData);
      setCurrentCode(typeCode);
    },
  });

  // 创建服饰
  const { run: create } = useRequest(postProduct, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateBack();
    },
  });

  // 更新服饰
  const { run: update } = useRequest(putProduct, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout
      className={styles.container}
      title={`${id ? '编辑' : '新增'}服饰`}
      back
    >
      <Form
        className="form-with-footer"
        form={form}
        labelPosition="left"
        divider
        footer={
          <Button formType="submit" type="primary" size="xlarge" block>
            保存
          </Button>
        }
        onFinish={async (values) => {
          const params = {
            ...values,
            fieldList: Array.from(fieldMap.get(currentCode!) ?? [])?.map(
              (item) => ({
                fieldKey: item.key,
                fieldValue: values?.[item.key],
              }),
            ),
          };
          if (id) {
            await update({ ...params, id });
          } else {
            await create(params);
          }
        }}
      >
        <FormSection>
          <Form.Item
            name="name"
            noStyle
            rules={[{ required: true, message: '请输入商品名称' }]}
          >
            <TextArea
              className={styles.textarea}
              placeholder="请输入商品名称"
              maxLength={255}
            />
          </Form.Item>
          <Form.Item
            name="picList"
            noStyle
            rules={[{ required: true, message: '请上传商品图片' }]}
          >
            <Upload placeholder="添加商品图片" maxCount={4} />
          </Form.Item>
        </FormSection>
        <FormSection fill>
          <Form.Item label="编号" name="no">
            <Input maxLength={8} />
          </Form.Item>
          <Form.Item label="品牌" name="brand">
            <Input maxLength={255} />
          </Form.Item>
        </FormSection>
        <FormSection fill>
          <Form.Item
            label="类型"
            name="typeCode"
            trigger="onConfirm"
            getValueFromEvent={(...args) => args[1]}
            validateTrigger="onConfirm"
            rules={[{ required: true, message: '请选择商品类型' }]}
          >
            <ProductTypePicker
              onConfirm={async (_, code) => {
                setCurrentCode(code);
                await fetchProjectField(code);
              }}
            />
          </Form.Item>
          <Form.Item
            label="数量"
            name="inventory"
            trigger="onConfirm"
            validateTrigger="onConfirm"
            rules={[
              { required: true, message: '请输入商品数量' },
              {
                validator(_, value: any) {
                  if (value?.every((item) => item.count === 0)) {
                    return false;
                  }
                  return true;
                },
                message: '请输入商品数量',
              },
            ]}
          >
            <ProductInventoryPicker />
          </Form.Item>
          {currentCode
            ? Array.from(fieldMap.get(currentCode) ?? [])?.map((item) => (
                <Form.Item
                  key={item.id}
                  label={item.name}
                  name={item.key}
                  rules={[{ required: true, message: `请选择${item.name}` }]}
                  trigger="onConfirm"
                  getValueFromEvent={(...args) => args[1]}
                  validateTrigger="onConfirm"
                >
                  <ProductFieldPicker code={currentCode} field={item.key} />
                </Form.Item>
              ))
            : null}
        </FormSection>
        <FormSection title="标签">
          <Form.Item name="tagIdList" noStyle>
            <TagChecker
              options={tagList?.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
              multiple
            />
          </Form.Item>
        </FormSection>
        <FormSection title="描述">
          <Form.Item name="desc" noStyle>
            <TextArea
              className={styles.textarea}
              placeholder="请输入描述"
              maxLength={255}
            />
          </Form.Item>
        </FormSection>
      </Form>
    </BasicLayout>
  );
};

export default Page;
