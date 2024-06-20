import { Button, Form, TextArea } from '@nutui/nutui-react-taro';
import Taro, { useRouter } from '@tarojs/taro';
import { useEffect, useState } from 'react';

import AddressPicker from './AddressPicker';
import ProductPicker from './ProductPicker';

import type { PostMarketRequest } from '@/api';

import { postMarket } from '@/api';
import { FormSection, InputNumber, TagChecker } from '@/components';
import { MarkrtMethod } from '@/constants/market';
import { DeliveryMethod, ProductQuality } from '@/constants/product';
import { StorageKey } from '@/constants/storage';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';
import { RouterUtil } from '@/utils';

const Page = () => {
  const { id } = useRouter().params;

  // 是否允许出售
  const [allowSell, setAllowSell] = useState<boolean>(false);
  // 是否允许借调
  const [allowLease, setAllowLease] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
    };
  }, []);

  // 发布
  const { run: create } = useRequest(postMarket, {
    manual: true,
    onSuccess() {
      Taro.removeStorageSync(StorageKey.PRODUCT_SELECTED);
      RouterUtil.navigateTo('/pages/market/action/result/index');
    },
  });

  return (
    <BasicLayout title={`${id ? '编辑' : '发布'}商品`} back>
      <Form
        divider
        footer={
          <Button formType="submit" type="primary" size="xlarge" block>
            保存
          </Button>
        }
        onFinish={async (values) => {
          const { method, deliveryMethod, quality, ...rest } = values;
          const params: PostMarketRequest = {
            ...rest,
            allowSell: method?.includes(MarkrtMethod['出售']),
            allowLease: method?.includes(MarkrtMethod['借调']),
            deliveryMethod: deliveryMethod[0],
            quality: quality[0],
          };
          console.log('onfinish', values, params);
          if (id) {
            // ...
          } else {
            await create(params);
          }
        }}
      >
        <FormSection>
          <Form.Item
            name="desc"
            noStyle
            rules={[{ required: true, message: '请输入商品描述' }]}
          >
            <TextArea placeholder="描述一下宝贝品牌，详情等" maxLength={200} />
          </Form.Item>
          <Form.Item
            name="productId"
            noStyle
            rules={[{ required: true, message: '请选择商品' }]}
          >
            <ProductPicker />
          </Form.Item>
        </FormSection>
        <FormSection title="出售/借调">
          <Form.Item
            name="method"
            noStyle
            rules={[{ required: true, message: '请选择上架方式' }]}
          >
            <TagChecker
              options={[
                { label: '出售', value: MarkrtMethod['出售'] },
                { label: '借调', value: MarkrtMethod['借调'] },
              ]}
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
              <AddressPicker />
            </Form.Item>
          </FormSection>
        )}
        <FormSection title="发货方式">
          <Form.Item
            name="deliveryMethod"
            noStyle
            rules={[{ required: true, message: '请选择发货方式' }]}
          >
            <TagChecker
              options={[
                { label: '包邮', value: DeliveryMethod['包邮'] },
                { label: '到付', value: DeliveryMethod['到付'] },
                { label: '自提', value: DeliveryMethod['自提'] },
              ]}
            />
          </Form.Item>
        </FormSection>
        <FormSection title="新旧程度">
          <Form.Item
            name="quality"
            noStyle
            rules={[{ required: true, message: '请选择新旧程度' }]}
          >
            <TagChecker
              options={[
                { label: '全新', value: ProductQuality['全新'] },
                { label: '几乎全新', value: ProductQuality['几乎全新'] },
                {
                  label: '轻微使用痕迹',
                  value: ProductQuality['轻微使用痕迹'],
                },
                {
                  label: '明显使用痕迹',
                  value: ProductQuality['明显使用痕迹'],
                },
              ]}
            />
          </Form.Item>
        </FormSection>
      </Form>
    </BasicLayout>
  );
};

export default Page;
