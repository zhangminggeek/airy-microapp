import { Button, Divider, Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

import { PREFIX_CLS as ROOT_PREFIX_CLS } from '../constants';

import ImageLogo from '@/assets/logo.svg';
import { Space, Text } from '@/components';
import { RouterUtil } from '@/utils';

import './index.scss';

const summary = [
  { label: '平均每日新入驻商户', value: '78' },
  { label: '平均每日上新数量', value: '600+', unit: '套' },
  { label: '平均成交时间', value: '3', unit: '天' },
  { label: '好评率', value: '98', unit: '%' },
];

const PREFIX_CLS = `${ROOT_PREFIX_CLS}-tip`;

const LoginTip = () => {
  return (
    <View className={`${PREFIX_CLS}`}>
      <View className={`${PREFIX_CLS}-header`}>
        <Space className={`${PREFIX_CLS}-header-brand`} size={4}>
          <Image
            className={`${PREFIX_CLS}-header-brand-logo`}
            src={ImageLogo}
            width={24}
            height={24}
          />
          <Text className={`${PREFIX_CLS}-header-brand-text`}>易纱集</Text>
        </Space>
        <View className={`${PREFIX_CLS}-header-intro`}>
          快速处理您的二手库存，最新最好看的婚纱礼服等您购买，还有超多店铺功能免费使用
        </View>
        <Button
          className={`${PREFIX_CLS}-header-btn`}
          type="primary"
          size="small"
          onClick={() => {
            RouterUtil.navigateTo('/pages/user/login/index');
          }}
        >
          登录
        </Button>
      </View>
      <Divider className={`${PREFIX_CLS}-divider`} />
      <View className={`${PREFIX_CLS}-body`}>
        {summary.map((item) => (
          <View key={item.label} className={`${PREFIX_CLS}-body-item`}>
            <View className={`${PREFIX_CLS}-body-item-content`}>
              <Text className={`${PREFIX_CLS}-body-item-content-value`}>
                {item.value}
              </Text>
              <Text className={`${PREFIX_CLS}-body-item-content-unit`}>
                {item.unit}
              </Text>
            </View>
            <View className={`${PREFIX_CLS}-body-item-label`}>
              {item.label}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default LoginTip;
