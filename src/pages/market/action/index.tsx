import { Button, Form, Input, TextArea } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import Big from 'big.js';
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
  productInfoFieldMap,
  ProductQuality,
  productQualityMap,
  ProductSource,
  ProductType,
} from '@/constants/product';
import { StorageKey } from '@/constants/storage';
import { TagType } from '@/constants/tag';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { isNil, RouterUtil, Toast } from '@/utils';

const Page = () => {
  const { id, productId, source, purchaseId } = useRouter().params;
  const [form] = Form.useForm();

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
        product: { brand },
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
        brand,
        expressMethod: [expressMethod],
        quality: [quality],
      });
    },
  });

  // 发布
  const { run: create, loading: createLoading } = useRequest(postMarket, {
    manual: true,
    onSuccess() {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
      if (purchaseId) {
        // 如果求购id存在，说明是从求购选择二手商品页面过来的，新增完要回去
        RouterUtil.navigateBack();
      } else {
        RouterUtil.redirectTo('/pages/market/action/result/index');
      }
    },
  });

  // 发布
  const { run: createMarketAndProduct } = useRequest(postMarketAndProduct, {
    manual: true,
    onSuccess() {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
      RouterUtil.redirectTo('/pages/market/action/result/index');
    },
  });

  // 编辑
  const { run: update, loading: updateLoading } = useRequest(putMarket, {
    manual: true,
    onSuccess() {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
      RouterUtil.redirectTo('/pages/market/action/result/index');
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
          expressMethod: [ExpressMethod['到付']],
          quality: [ProductQuality['几乎全新']],
        }}
        footer={
          <Button
            formType="submit"
            type="primary"
            size="xlarge"
            block
            loading={createLoading || updateLoading}
          >
            保存
          </Button>
        }
        onFinish={async (values) => {
          const {
            title,
            picList,
            productId: productIdBySelected,
            method,
            expressMethod,
            quality,
            companyAddressId,
            ...rest
          } = values;
          if (!title) {
            Toast.info('请输入商品标题');
            return;
          }
          if (!createFromAlbum && !productIdBySelected) {
            Toast.info('请选择商品');
            return;
          }
          if (createFromAlbum && !picList?.length) {
            Toast.info('请上传商品图片');
            return;
          }
          if (method?.includes(MarkrtMethod['借调']) && !companyAddressId) {
            Toast.info('请选择返还地址');
            return;
          }
          const params = {
            ...rest,
            title,
            companyAddressId,
            allowSell: method?.includes(MarkrtMethod['出售']),
            allowLease: method?.includes(MarkrtMethod['借调']),
            expressMethod: expressMethod[0],
            quality: quality[0],
          };
          if (createFromAlbum) {
            params.picList = picList;
          } else {
            params.productId = productIdBySelected;
          }
          if (id) {
            await update({ ...params, id: Number(id) });
          } else {
            if (source === ProductSource['服装管理']) {
              await create(params);
            } else {
              const fieldMap =
                productInfoFieldMap
                  .get(currentTypeCode as ProductType)
                  ?.keys() ?? [];
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
              await createMarketAndProduct(params);
            }
          }
        }}
      >
        <FormSection style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Form.Item name="title">
            <Input placeholder="请输入商品标题" maxLength={200} />
          </Form.Item>
        </FormSection>
        <FormSection>
          <Form.Item name="description" noStyle>
            <TextArea
              style={{ marginBottom: 20 }}
              placeholder="描述一下宝贝详情"
              maxLength={255}
            />
          </Form.Item>
          {createFromAlbum ? (
            <Form.Item name="picList" noStyle>
              <Upload
                placeholder={
                  <View>
                    <View>添加图片</View>
                    <View>视频</View>
                  </View>
                }
                maxCount={4}
              />
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
        <FormSection fill>
          <Form.Item
            label="出售/借调"
            name="method"
            rules={[{ required: true, message: '请选择上架方式' }]}
          >
            <TagChecker
              options={Array.from(marketMethodMap.values())}
              multiple
              allowEmpty={false}
              onChange={(v) => {
                setAllowSell(v?.includes(MarkrtMethod['出售']) ?? false);
                setAllowLease(v?.includes(MarkrtMethod['借调']) ?? false);
              }}
            />
          </Form.Item>
          {allowSell && (
            <Form.Item
              label="出售价"
              name="sellingPrice"
              rules={[
                { required: true, message: '请输入出售价' },
                {
                  validator(_, value) {
                    if (isNil(value, false)) {
                      return Promise.reject('请输入出售价');
                    }
                    if (Big(value).lt(0.01)) {
                      return Promise.reject('出售价不能小于0.01元');
                    }
                    return Promise.resolve(true);
                  },
                },
              ]}
              validateTrigger="onBlur"
            >
              <InputNumber prefix="¥" />
            </Form.Item>
          )}
          {allowLease && (
            <Form.Item
              label="借调价"
              name="leasePrice"
              rules={[
                { required: true, message: '请输入借调价' },
                {
                  validator(_, value) {
                    if (isNil(value, false)) {
                      return Promise.reject('请输入借调价');
                    }
                    if (Big(value).lt(0.01)) {
                      return Promise.reject('借调价不能小于0.01元');
                    }
                    return Promise.resolve(true);
                  },
                },
              ]}
              validateTrigger="onBlur"
            >
              <InputNumber prefix="¥" />
            </Form.Item>
          )}
          {allowLease && (
            <Form.Item
              label="借调押金"
              name="leaseDeposit"
              rules={[
                { required: true, message: '请输入借调押金' },
                {
                  validator(_, value) {
                    if (isNil(value, false)) {
                      return Promise.reject('请输入借调押金');
                    }
                    if (Big(value).lt(0.01)) {
                      return Promise.reject('借调押金不能小于0.01元');
                    }
                    return Promise.resolve(true);
                  },
                },
              ]}
              validateTrigger="onBlur"
            >
              <InputNumber prefix="¥" />
            </Form.Item>
          )}
        </FormSection>
        {allowLease && (
          <FormSection fill>
            <Form.Item name="companyAddressId" noStyle>
              <Picker.Address placeholder="请选择返还地址" />
            </Form.Item>
          </FormSection>
        )}
        <FormSection fill>
          <Form.Item
            label="发货方式"
            name="expressMethod"
            rules={[{ required: true, message: '请选择发货方式' }]}
          >
            <TagChecker
              options={Array.from(expressMethodMap.values())}
              allowEmpty={false}
            />
          </Form.Item>
        </FormSection>
        {createFromAlbum && (
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
            <Form.Item
              label="尺码"
              name="size"
              rules={[{ required: true, message: '请输入商品尺码' }]}
            >
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
        )}
        <FormSection title="新旧程度">
          <Form.Item
            name="quality"
            noStyle
            rules={[{ required: true, message: '请选择新旧程度' }]}
          >
            <TagChecker
              options={Array.from(productQualityMap.values())}
              allowEmpty={false}
            />
          </Form.Item>
        </FormSection>
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
