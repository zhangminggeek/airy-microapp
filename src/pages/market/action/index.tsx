import { Button, Form, Input, TextArea } from '@nutui/nutui-react-taro';
import Taro, { useRouter } from '@tarojs/taro';
import { useEffect, useMemo, useState } from 'react';

import ProductPicker from './ProductPicker';

import {
  getMarketId,
  getTag,
  postMarket,
  postMarketAndProduct,
  putMarket,
} from '@/api';
import {
  AddressPicker,
  FormSection,
  InputNumber,
  Picker,
  Product,
  TagChecker,
  Upload,
} from '@/components';
import {
  ExpressMethod,
  expressMethodMap,
  marketMethodMap,
  MarkrtMethod,
} from '@/constants/market';
import {
  ProductQuality,
  productQualityMap,
  productSizeMap,
  ProductSource,
} from '@/constants/product';
import { StorageKey } from '@/constants/storage';
import { TagType } from '@/constants/tag';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { useProductStore } from '@/models';
import { isNil, RouterUtil } from '@/utils';

const Page = () => {
  const { id, productId, source } = useRouter().params;
  const [form] = Form.useForm();

  const { fieldMap, fetchProjectField } = useProductStore((state) => state);

  // 当前选中的服饰类型code
  const [currentTypeCode, setCurrentTypeCode] = useState<string>();
  // 是否允许出售
  const [allowSell, setAllowSell] = useState<boolean>(true);
  // 是否允许借调
  const [allowLease, setAllowLease] = useState<boolean>(false);

  const createFromAlbum = useMemo(
    () => !id && source === ProductSource['相册'],
    [id, source],
  );

  useEffect(() => {
    if (id) {
      fetchDetail({ id });
    }

    if (source === ProductSource['服装管理'] && productId) {
      form.setFieldsValue({ productId: Number(productId) });
    }

    return () => {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
    };
  }, []);

  // 获取标签选项
  const { data: tagList } = useRequest(getTag, {
    defaultParams: { use: `${TagType.PRODUCT}` },
  });

  // 获取详情
  const { run: fetchDetail } = useRequest(getMarketId, {
    manual: true,
    onSuccess(data) {
      const {
        title,
        productId,
        description,
        allowSell,
        allowLease,
        sellingPrice,
        leasePrice,
        leaseDeposit,
        companyAddressId,
        expressMethod,
        quality,
      } = data;
      const method: MarkrtMethod[] = [];
      if (allowSell) {
        method.push(MarkrtMethod['出售']);
        setAllowSell(true);
      }
      if (allowLease) {
        method.push(MarkrtMethod['借调']);
        setAllowLease(true);
      }
      form.setFieldsValue({
        title,
        productId,
        description,
        method,
        sellingPrice,
        leasePrice,
        leaseDeposit,
        companyAddressId,
        expressMethod: [expressMethod],
        quality: [quality],
      });
    },
  });

  // 发布
  const { run: create } = useRequest(postMarket, {
    manual: true,
    onSuccess() {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
      RouterUtil.navigateTo('/pages/market/action/result/index');
    },
  });

  // 发布
  const { run: createMarketAndProduct } = useRequest(postMarketAndProduct, {
    manual: true,
    onSuccess() {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
      RouterUtil.navigateTo('/pages/market/action/result/index');
    },
  });

  // 编辑
  const { run: update } = useRequest(putMarket, {
    manual: true,
    onSuccess() {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
      RouterUtil.navigateTo('/pages/market/action/result/index');
    },
  });

  return (
    <BasicLayout title={`${id ? '编辑' : '发布'}商品`} back>
      <Form
        form={form}
        labelPosition="left"
        divider
        initialValues={{
          method: [MarkrtMethod['出售']],
          expressMethod: [ExpressMethod['包邮']],
          quality: [ProductQuality['全新']],
        }}
        footer={
          <Button formType="submit" type="primary" size="xlarge" block>
            保存
          </Button>
        }
        onFinish={async (values) => {
          const { method, expressMethod, quality, ...rest } = values;
          const params = {
            ...rest,
            allowSell: method?.includes(MarkrtMethod['出售']),
            allowLease: method?.includes(MarkrtMethod['借调']),
            expressMethod: expressMethod[0],
            quality: quality[0],
          };
          if (id) {
            await update({ ...params, id: Number(id) });
          } else {
            if (source === ProductSource['服装管理']) {
              await create(params);
            } else {
              params.fieldList = Array.from(
                fieldMap.get(currentTypeCode!) ?? [],
              )
                .map((item) => ({
                  fieldKey: item.key,
                  fieldValue: values?.[item.key],
                }))
                .filter((item) => !isNil(item.fieldValue));
              await createMarketAndProduct(params);
            }
          }
        }}
      >
        <FormSection style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Form.Item
            name="title"
            rules={[{ required: true, message: '请输入商品标题' }]}
          >
            <Input placeholder="请输入商品标题" maxLength={200} />
          </Form.Item>
        </FormSection>
        <FormSection>
          <Form.Item name="description" noStyle>
            <TextArea placeholder="描述一下宝贝品牌，详情等" maxLength={255} />
          </Form.Item>
          {createFromAlbum ? (
            <Form.Item
              name="picList"
              noStyle
              rules={[{ required: true, message: '请上传商品图片' }]}
            >
              <Upload placeholder="添加商品图片" maxCount={4} />
            </Form.Item>
          ) : (
            <Form.Item
              name="productId"
              noStyle
              rules={[{ required: true, message: '请选择商品' }]}
            >
              <ProductPicker />
            </Form.Item>
          )}
        </FormSection>
        {createFromAlbum && (
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
          </FormSection>
        )}
        <FormSection title="出售/借调">
          <Form.Item
            name="method"
            noStyle
            rules={[{ required: true, message: '请选择上架方式' }]}
          >
            <TagChecker
              options={Array.from(marketMethodMap.values())}
              multiple
              onChange={(v) => {
                setAllowSell(v?.includes(MarkrtMethod['出售']) ?? false);
                setAllowLease(v?.includes(MarkrtMethod['借调']) ?? false);
              }}
            />
          </Form.Item>
        </FormSection>
        <FormSection fill>
          {allowSell && (
            <Form.Item
              label="出售价"
              name="sellingPrice"
              rules={[{ required: true, message: '请输入出售价' }]}
            >
              <InputNumber prefix="¥" />
            </Form.Item>
          )}
          {allowLease && (
            <Form.Item
              label="借调价"
              name="leasePrice"
              rules={[{ required: true, message: '请输入借调价' }]}
            >
              <InputNumber prefix="¥" />
            </Form.Item>
          )}
          {allowLease && (
            <Form.Item
              label="借调押金"
              name="leaseDeposit"
              rules={[{ required: true, message: '请输入借调押金' }]}
            >
              <InputNumber prefix="¥" />
            </Form.Item>
          )}
        </FormSection>
        {allowLease && (
          <FormSection fill>
            <Form.Item
              name="companyAddressId"
              noStyle
              rules={[{ required: true, message: '请选择返还地址' }]}
            >
              <AddressPicker placeholder="请选择返还地址" />
            </Form.Item>
          </FormSection>
        )}
        <FormSection title="发货方式">
          <Form.Item
            name="expressMethod"
            noStyle
            rules={[{ required: true, message: '请选择发货方式' }]}
          >
            <TagChecker options={Array.from(expressMethodMap.values())} />
          </Form.Item>
        </FormSection>
        <FormSection title="新旧程度">
          <Form.Item
            name="quality"
            noStyle
            rules={[{ required: true, message: '请选择新旧程度' }]}
          >
            <TagChecker options={Array.from(productQualityMap.values())} />
          </Form.Item>
        </FormSection>
        {createFromAlbum && (
          <FormSection fill>
            <Form.Item
              label="尺码"
              name="size"
              trigger="onConfirm"
              getValueFromEvent={(...args) => args[1]}
              validateTrigger="onConfirm"
              rules={[{ required: true, message: '请输入商品尺码' }]}
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
        )}
        {createFromAlbum && (
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
        )}
      </Form>
    </BasicLayout>
  );
};

export default Page;
