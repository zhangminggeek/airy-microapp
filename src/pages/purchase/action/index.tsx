import { Button, Form, Input, TextArea } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import { useEffect, useState } from 'react';

import type { ProductBizData } from '@/interfaces/product';

import { getPurchaseId, getTag, postPurchase, putPurchase } from '@/api';
import {
  FormSection,
  InputNumberRange,
  Product,
  TagChecker,
  Upload,
} from '@/components';
import { productInfoFieldMap, ProductType } from '@/constants/product';
import { PurchaseMethod, purchaseMethodMap } from '@/constants/purchase';
import { TagType } from '@/constants/tag';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { isNil, parseJson, RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;
  const [form] = Form.useForm();

  // 当前选中的服饰类型code
  const [currentTypeCode, setCurrentTypeCode] = useState<
    ProductType | undefined
  >(ProductType['婚纱']);
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
  const { run: fetchDetail } = useRequest(getPurchaseId, {
    manual: true,
    async onSuccess(data) {
      const {
        title,
        picList,
        typeCode,
        size,
        brand,
        wantBuy,
        wantLease,
        minPrice,
        maxPrice,
        minLeasePrice,
        maxLeasePrice,
        tagList,
        bizData,
      } = data;
      setCurrentTypeCode(typeCode as ProductType);
      const method: PurchaseMethod[] = [];
      if (wantBuy) {
        method.push(PurchaseMethod['购买']);
        setWantBuy(true);
      }
      if (wantLease) {
        method.push(PurchaseMethod['借调']);
        setWantLease(true);
      }
      const ret: Record<string, any> = {
        title,
        picList: picList?.map((item) => item.url),
        typeCode,
        size: isNil(size) ? [] : [size],
        brand,
        method,
        price: [minPrice, maxPrice],
        leasePrice: [minLeasePrice, maxLeasePrice],
        tagIdList: tagList?.map((item) => item.id),
      };
      parseJson<ProductBizData>(bizData, [])?.forEach((item) => {
        ret[item.fieldKey] = [item.fieldValue];
      });
      form.setFieldsValue(ret);
    },
  });

  // 创建求购
  const { run: create } = useRequest(postPurchase, {
    manual: true,
    onSuccess() {
      Toast.success('创建成功');
      RouterUtil.navigateTo('/pages/purchase/action/result/index');
    },
  });

  // 编辑求购
  const { run: update } = useRequest(putPurchase, {
    manual: true,
    onSuccess() {
      Toast.success('修改成功');
      RouterUtil.navigateTo('/pages/purchase/action/result/index');
    },
  });

  return (
    <BasicLayout title={`${id ? '编辑' : '发布'}求购`} back>
      <Form
        form={form}
        labelPosition="left"
        divider
        initialValues={{
          method: [PurchaseMethod['购买']],
          typeCode: [ProductType['婚纱']],
        }}
        footer={
          <Button formType="submit" type="primary" size="xlarge" block>
            保存
          </Button>
        }
        onFinish={async (values) => {
          const { title, size, method, price, leasePrice, picList, ...rest } =
            values;
          if (!title) {
            Toast.info('请输入求购商品信息');
            return;
          }
          if (!picList?.length) {
            Toast.info('请上传求购商品图片');
            return;
          }
          const params = {
            ...rest,
            title,
            picList,
            size: size?.length ? size[0] : undefined,
            wantBuy: !!method?.includes(PurchaseMethod['购买']),
            wantLease: !!method?.includes(PurchaseMethod['借调']),
            minPrice: isNil(price?.[0], false) ? undefined : price?.[0],
            maxPrice: isNil(price?.[1], false) ? undefined : price?.[1],
            minLeasePrice: isNil(leasePrice?.[0], false)
              ? undefined
              : leasePrice?.[0],
            maxLeasePrice: isNil(leasePrice?.[1], false)
              ? undefined
              : leasePrice?.[1],
          };
          const fieldMap =
            productInfoFieldMap.get(currentTypeCode as ProductType)?.keys() ??
            [];
          const fieldList: { fieldKey: string; fieldValue: any }[] = [];
          Array.from(fieldMap).forEach((k) => {
            if (isNil(values?.[k])) return;
            fieldList.push({
              fieldKey: k,
              fieldValue: values?.[k]?.[0],
            });
            delete params[k];
          });
          params.fieldList = fieldList;
          if (id) {
            update({ ...params, id });
          } else {
            create(params);
          }
        }}
      >
        <FormSection>
          <Form.Item name="title" noStyle>
            <TextArea
              style={{ marginBottom: 20 }}
              placeholder="描述一下求购商品信息"
              maxLength={200}
            />
          </Form.Item>
          <Form.Item name="picList" noStyle>
            <Upload placeholder="添加图片" maxCount={4} />
          </Form.Item>
        </FormSection>
        <FormSection fill>
          <Form.Item
            label="类型"
            name="typeCode"
            rules={[{ required: true, message: '请选择商品类型' }]}
          >
            <Product.TypePicker
              wrap={false}
              onChange={(v) => {
                setCurrentTypeCode(v?.[0]);
              }}
            />
          </Form.Item>
          <Form.Item label="尺码" name="size">
            <Product.SizePicker wrap={false} />
          </Form.Item>
          {currentTypeCode
            ? Array.from(
                productInfoFieldMap
                  .get(currentTypeCode as ProductType)
                  ?.entries() ?? [],
              ).map(([k, v]) => (
                <Form.Item key={k} label={v.name} name={k}>
                  <Product.FieldPicker code={currentTypeCode} field={k} />
                </Form.Item>
              ))
            : null}
          <Form.Item label="品牌" name="brand">
            <Input maxLength={255} />
          </Form.Item>
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
              allowEmpty={false}
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
