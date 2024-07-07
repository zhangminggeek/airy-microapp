import { Button, Form, TextArea } from '@nutui/nutui-react-taro';
import Taro, { useRouter } from '@tarojs/taro';
import { useEffect, useState } from 'react';

import ProductPicker from './ProductPicker';

import type { PostMarketRequest } from '@/api';

import { getMarketId, postMarket, putMarket } from '@/api';
import {
  AddressPicker,
  FormSection,
  InputNumber,
  TagChecker,
} from '@/components';
import {
  expressMethodMap,
  marketMethodMap,
  MarkrtMethod,
} from '@/constants/market';
import { productQualityMap } from '@/constants/product';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { id, productId } = useRouter().params;
  const [form] = Form.useForm();

  // 是否允许出售
  const [allowSell, setAllowSell] = useState<boolean>(false);
  // 是否允许借调
  const [allowLease, setAllowLease] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      fetchDetail({ id });
    }

    if (productId) {
      form.setFieldsValue({ productId: Number(productId) });
    }

    return () => {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
    };
  }, []);

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
        divider
        footer={
          <Button formType="submit" type="primary" size="xlarge" block>
            保存
          </Button>
        }
        onFinish={async (values) => {
          const { method, expressMethod, quality, ...rest } = values;
          const params: PostMarketRequest = {
            ...rest,
            allowSell: method?.includes(MarkrtMethod['出售']),
            allowLease: method?.includes(MarkrtMethod['借调']),
            expressMethod: expressMethod[0],
            quality: quality[0],
          };
          if (id) {
            await update({ ...params, id: Number(id) });
          } else {
            await create(params);
          }
        }}
      >
        <FormSection>
          <Form.Item
            name="title"
            noStyle
            rules={[{ required: true, message: '请输入商品标题' }]}
          >
            <TextArea placeholder="请输入商品标题" maxLength={200} />
          </Form.Item>
          <Form.Item
            name="productId"
            noStyle
            rules={[{ required: true, message: '请选择商品' }]}
          >
            <ProductPicker />
          </Form.Item>
        </FormSection>
        <FormSection title="描述">
          <Form.Item name="description" noStyle>
            <TextArea placeholder="请输入描述" maxLength={255} />
          </Form.Item>
        </FormSection>
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
      </Form>
    </BasicLayout>
  );
};

export default Page;
