import { Popup } from '@nutui/nutui-react-taro';
import { ScrollView, View } from '@tarojs/components';
import Taro, { request } from '@tarojs/taro';
import classnames from 'classnames';
import { useEffect, useMemo, useState } from 'react';

import PickerView from '../PickerView';

import type { FC } from 'react';

import { InputSearch } from '@/components';
import { OSS_ASSETS_DIR } from '@/constants';

import './index.scss';

interface GroupData {
  title: string;
  list: { id: string; name: string }[];
}

interface DeliveryPickerProps {
  className?: string;
  value?: string;
  onChange?: (value?: string) => void;
}

const PREFIX_CLS = 'm-delivery-picker';

const commonOption = [
  { id: 'SF', name: '顺丰速运' },
  { id: 'EMS', name: 'EMS' },
  { id: 'ZTO', name: '中通快递' },
  { id: 'STO', name: '申通快递' },
  { id: 'YTO', name: '圆通速递' },
  { id: 'YD', name: '韵达速递' },
  { id: 'HTKY', name: '百世快递' },
  { id: 'JD', name: '京东快递' },
  { id: 'JTSD', name: '极兔速递' },
];

const DeliveryPicker: FC<DeliveryPickerProps> = ({
  className,
  value,
  onChange,
}) => {
  // 是否显示弹窗
  const [visible, setVisible] = useState<boolean>(false);
  // 距离窗口顶部的距离
  const [topMargin, setTopMargin] = useState<number>(0);
  // 当前滚动高度
  const [scrollTop, setScrollTop] = useState<number>(0);
  // 滚动之后的滚动高度高度
  const [afterScrollTop, setAfterScrollTop] = useState<number>(0);
  // 搜索关键词
  const [keyword, setKeyword] = useState<string>();
  // 快递公司列表
  const [list, setList] = useState<GroupData[]>([]);

  useEffect(() => {
    getExpressCompany();
  }, []);

  // 获取快递公司列表
  const getExpressCompany = async () => {
    const res = await request({
      url: `${OSS_ASSETS_DIR}/express_company.json`,
      method: 'GET',
    });
    setList(res?.data);
  };

  // 点击右侧导航栏滚动到指定位置
  const handleScrollTo = (id: string) => {
    Taro.createSelectorQuery()
      .select(`.${PREFIX_CLS}-popup >>> #${id}`)
      .boundingClientRect()
      .exec((res) => {
        // 距离窗口左上角的位置 + 滚动距离 - 搜索栏距离窗口左上角的位置
        const top = scrollTop === afterScrollTop ? scrollTop : afterScrollTop;
        const ret = res[0]?.top + top - topMargin;
        setAfterScrollTop(ret);
        setScrollTop(ret);
      });
  };

  const handleSelect = (id: string) => {
    console.log(id);
    onChange?.(id);
    handleClose();
  };

  const handleClose = () => {
    setVisible(false);
    setScrollTop(0);
    setAfterScrollTop(0);
    setKeyword(undefined);
  };

  const text = useMemo(() => {
    const companies = list?.reduce(
      (prev, cur) => {
        return prev.concat(cur.list);
      },
      [] as GroupData['list'],
    );
    return companies?.find((item) => item.id === value)?.name;
  }, [value, list]);

  return (
    <PickerView
      className={classnames(PREFIX_CLS, className)}
      text={text}
      onClick={() => {
        setVisible(true);
      }}
    >
      <Popup
        className={`${PREFIX_CLS}-popup`}
        visible={visible}
        title="选择物流公司"
        position="bottom"
        closeable
        destroyOnClose
        afterShow={() => {
          // 计算距离窗口顶部的距离
          Taro.createSelectorQuery()
            .select(
              `.${PREFIX_CLS}-popup >>> .${PREFIX_CLS}-popup-content-search`,
            )
            .boundingClientRect()
            .exec((res) => {
              setTopMargin(res[0]?.top);
            });
        }}
        onClose={handleClose}
      >
        <View className={`${PREFIX_CLS}-popup-view`}>
          <ScrollView
            className={`${PREFIX_CLS}-popup-content`}
            scrollY
            scrollWithAnimation
            scrollAnchoring
            scrollTop={scrollTop}
            onScroll={(e) => {
              setAfterScrollTop(e.detail.scrollTop);
            }}
          >
            <InputSearch
              className={`${PREFIX_CLS}-popup-content-search`}
              onChange={(v) => {
                setKeyword(v);
                setScrollTop(0);
                setAfterScrollTop(0);
              }}
            />
            <View className={`${PREFIX_CLS}-popup-content-common`}>
              <View className={`${PREFIX_CLS}-popup-content-common-title`}>
                常用快递
              </View>
              <View className={`${PREFIX_CLS}-popup-content-common-option`}>
                {commonOption.map((item) => (
                  <View
                    key={item.id}
                    className={classnames(
                      `${PREFIX_CLS}-popup-content-common-option-item`,
                      {
                        [`${PREFIX_CLS}-popup-content-common-option-item-active`]:
                          item.id === value,
                      },
                    )}
                    onClick={() => {
                      handleSelect(item.id);
                    }}
                  >
                    {item.name}
                  </View>
                ))}
              </View>
            </View>
            <View className={`${PREFIX_CLS}-popup-content-option`}>
              {list?.map((group) => {
                const isMatch = keyword
                  ? group.list?.some((item) => item.name.includes(keyword))
                  : true;
                return isMatch ? (
                  <View
                    className={`${PREFIX_CLS}-popup-content-option-group`}
                    key={group.title}
                  >
                    <View
                      id={group.title}
                      className={`${PREFIX_CLS}-popup-content-option-group-title`}
                    >
                      {group.title}
                    </View>
                    <View
                      className={`${PREFIX_CLS}-popup-content-option-group-list`}
                    >
                      {group.list
                        ?.filter((item) =>
                          keyword ? item.name.includes(keyword) : true,
                        )
                        ?.map((item) => (
                          <View
                            className={classnames(
                              `${PREFIX_CLS}-popup-content-option-group-list-item`,
                              {
                                [`${PREFIX_CLS}-popup-content-option-group-list-item-active`]:
                                  value === item.id,
                              },
                            )}
                            key={item.id}
                            onClick={() => {
                              handleSelect(item.id);
                            }}
                          >
                            {item.name}
                          </View>
                        ))}
                    </View>
                  </View>
                ) : null;
              })}
            </View>
          </ScrollView>
          <View className={`${PREFIX_CLS}-popup-view-bar`}>
            {list?.map((group) => {
              const isMatch = keyword
                ? group.list?.some((item) => item.name.includes(keyword))
                : true;
              return isMatch ? (
                <View
                  className={`${PREFIX_CLS}-popup-view-bar-item`}
                  key={group.title}
                  onClick={() => {
                    handleScrollTo(group.title);
                  }}
                >
                  {group.title}
                </View>
              ) : null;
            })}
          </View>
        </View>
      </Popup>
    </PickerView>
  );
};

export default DeliveryPicker;
