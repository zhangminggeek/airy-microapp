import { Button, Form, Input, TextArea } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import { useEffect, useState } from 'react';

import { getMarketId, getTag, postPurchase } from '@/api';
import {
  FormSection,
  InputNumberRange,
  Picker,
  Product,
  TagChecker,
  Upload,
} from '@/components';
import { productSizeMap } from '@/constants/product';
import { PurchaseMethod, purchaseMethodMap } from '@/constants/purchase';
import { TagType } from '@/constants/tag';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useProductStore } from '@/models';
import { RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;
  const [form] = Form.useForm();

  const { fieldMap, fetchProjectField } = useProductStore((state) => state);

  // 当前选中的服饰类型code
  const [currentTypeCode, setCurrentTypeCode] = useState<string>();
  // 是否允许出售
  const [wantBuy, setWantBuy] = useState<boolean>(true);
  // 是否允许借调
  const [wantLease, setWantLease] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      fetchDetail({ id });
    }
  }, []);

  // 获取标签选项
  const { data: tagList } = useRequest(getTag, {
    defaultParams: { use: `${TagType.PRODUCT}` },
  });

  // 获取详情
  const { run: fetchDetail } = useRequest(getMarketId, {
    manual: true,
    onSuccess(data) {
      console.log(data);
    },
  });

  // 创建求购
  const { run: create } = useRequest(postPurchase, {
    manual: true,
    onSuccess() {
      Toast.success('创建成功');
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout title={`${id ? '编辑' : '发布'}商品`} back>
      <Form
        form={form}
        labelPosition="left"
        divider
        initialValues={{
          method: [PurchaseMethod['购买']],
        }}
        footer={
          <Button formType="submit" type="primary" size="xlarge" block>
            保存
          </Button>
        }
        onFinish={async (values) => {
          const { method, price, leasePrice, ...rest } = values;
          const params = {
            ...rest,
            fieldList: Array.from(fieldMap.get(currentTypeCode!) ?? [])?.map(
              (item) => ({
                fieldKey: item.key,
                fieldValue: values?.[item.key],
              }),
            ),
            wantBuy: !!method?.includes(PurchaseMethod['购买']),
            wantLease: !!method?.includes(PurchaseMethod['借调']),
            minPrice: price?.[0],
            maxPrice: price?.[1],
            minLeasePrice: leasePrice?.[0],
            maxLeasePrice: leasePrice?.[1],
          };
          if (id) {
            // ...
          } else {
            create(params);
          }
        }}
      >
        <FormSection>
          <Form.Item name="title" noStyle>
            <TextArea placeholder="描述一下求购商品信息" maxLength={200} />
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
          <Form.Item
            label="类型"
            name="typeCode"
            trigger="onConfirm"
            getValueFromEvent={(...args) => args[1]}
            validateTrigger="onConfirm"
            rules={[{ required: true, message: '请选择商品类型' }]}
          >
            <Product.TypePicker
              onConfirm={async (_, code) => {
                setCurrentTypeCode(code);
                await fetchProjectField(code);
              }}
            />
          </Form.Item>
          <Form.Item label="品牌" name="brand">
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item
            label="尺码"
            name="size"
            trigger="onConfirm"
            getValueFromEvent={(...args) => args[1]}
            validateTrigger="onConfirm"
          >
            <Picker options={Array.from(productSizeMap.values())} />
          </Form.Item>
          {currentTypeCode
            ? Array.from(fieldMap.get(currentTypeCode) ?? [])?.map((item) => (
                <Form.Item
                  key={item.id}
                  label={item.name}
                  name={item.key}
                  trigger="onConfirm"
                  getValueFromEvent={(...args) => args[1]}
                  validateTrigger="onConfirm"
                >
                  <Product.FieldPicker
                    code={currentTypeCode}
                    field={item.key}
                  />
                </Form.Item>
              ))
            : null}
        </FormSection>
        <FormSection title="购买/借调">
          <Form.Item
            name="method"
            noStyle
            rules={[{ required: true, message: '请选择求购方式' }]}
          >
            <TagChecker
              options={Array.from(purchaseMethodMap.values())}
              multiple
              onChange={(v) => {
                setWantBuy(v?.includes(PurchaseMethod['购买']) ?? false);
                setWantLease(v?.includes(PurchaseMethod['借调']) ?? false);
              }}
            />
          </Form.Item>
        </FormSection>
        <FormSection fill>
          {wantBuy && (
            <Form.Item label="购买价" name="price">
              <InputNumberRange
                prefix={['¥', '¥']}
                placeholder={['请输入最低价', '请输入最高价']}
              />
            </Form.Item>
          )}
          {wantLease && (
            <Form.Item label="借调价" name="leasePrice">
              <InputNumberRange
                prefix={['¥', '¥']}
                placeholder={['请输入最低价', '请输入最高价']}
              />
            </Form.Item>
          )}
        </FormSection>
        <FormSection title="标签">
          <Form.Item name="tagIdList" noStyle>
            <TagChecker
              options={tagList?.map((item) => ({
                text: item.name,
                value: item.id,
              }))}
              multiple
            />
          </Form.Item>
        </FormSection>
      </Form>
    </BasicLayout>
  );
};

export default Page;
