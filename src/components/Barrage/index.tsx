import { View } from '@tarojs/components';
import classnames from 'classnames';
import { useState } from 'react';

import { COMPANY_NAME_LIST, PRODUCT_NAME_LIST } from './data';

import type { CSSProperties, FC } from 'react';

import { Icon } from '@/components';
import { useInterval } from '@/hooks';
import { useGlobalStore } from '@/models';

import './index.scss';

const PREFIX_CLS = 'm-barrage';

interface BarrageProps {
  className?: string;
  style?: CSSProperties;
}

interface Info {
  company: string;
  product: string;
  price: string;
}

const Barrage: FC<BarrageProps> = ({ className, style }) => {
  const { showBarrage, setShowBarrage } = useGlobalStore();

  // 弹幕内容
  const [info, setInfo] = useState<Info>();

  // 定时更新弹幕内容
  const { clear } = useInterval({
    fn: () => {
      setInfo({
        company: generateCompanyName(),
        product: generateProductName(),
        price: generatePrice(),
      });
    },
    interval: 300000, // 5分钟
    immediate: true,
  });

  // 随机生成一个公司名称
  const generateCompanyName = () => {
    const name =
      COMPANY_NAME_LIST[Math.floor(Math.random() * COMPANY_NAME_LIST.length)];
    // 脱敏，只显示前2个字符和后两个字符
    return `${name.slice(0, 2)}****${name.slice(-2)}`;
  };

  // 随机生成一个商品名称
  const generateProductName = () =>
    PRODUCT_NAME_LIST[Math.floor(Math.random() * PRODUCT_NAME_LIST.length)];

  // 随机生成一个价格
  const generatePrice = () => {
    const number = Math.floor(Math.random() * 199) + 1;
    if (number < 20) {
      // 如果小于20，最后一位补9
      return `${number}9`;
    } else if (number < 100) {
      // 如果小于100，最后一位补9，如果最后一位是0，则返回19
      const lastNumber = number % 10;
      return `${lastNumber === 0 ? 1 : lastNumber}9`;
    } else {
      // 如果大于100，取整十数
      const [first, second] = number.toString().split('');
      return `${first}${second}0`;
    }
  };

  if (!showBarrage) return null;

  return (
    <View className={classnames(PREFIX_CLS, className)} style={style}>
      <View className={`${PREFIX_CLS}-content`}>
        <View className={`${PREFIX_CLS}-content-info`}>
          {info?.company}购买了一件{info?.product}
        </View>
        <View className={`${PREFIX_CLS}-content-price`}>¥ {info?.price}</View>
      </View>
      <Icon
        name="QingCOutlined"
        size={16}
        onClick={() => {
          setShowBarrage(false);
          clear();
        }}
      />
    </View>
  );
};

export default Barrage;
