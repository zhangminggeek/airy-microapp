import {
  Button,
  Form,
  Input,
  InputNumber,
  TextArea,
} from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

import { getBelongingsId, getRoom, postBelongings, putBelongings } from '@/api';
import {
  CalenderPicker,
  Picker,
  SpacePicker,
  Title,
  Upload,
} from '@/components';
import { DATE_FORMAT } from '@/constants';
import { useRequest } from '@/hooks';
import BasicLayout from '@/layouts/BasicLayout';
import { useUserStore } from '@/models';
import { RouterUtil, Toast } from '@/utils';

export interface Router {
  params: {
    id?: string;
    roomId?: string;
  };
}

const Page = () => {
  const {
    params: { id, roomId: roomIdFromQuery },
  } = useRouter() as Router;

  const { orgId } = useUserStore((state) => state);

  const [form] = Form.useForm();

  // 当前选中的房间id
  const [selectRoomId, setSelectRoomId] = useState<number>();

  useEffect(() => {
    if (roomIdFromQuery) {
      const _roomId = Number(roomIdFromQuery);
      setSelectRoomId(_roomId);
      form.setFieldsValue({ roomId: _roomId });
    }
    if (id) {
      fetchBelongings({ id });
    }
  }, []);

  // 获取物品详情
  const { run: fetchBelongings } = useRequest(getBelongingsId, {
    manual: true,
    onSuccess({ name, desc, count, pic, roomId, spacePath, expirationDate }) {
      form.setFieldsValue({
        name,
        desc: desc || '',
        count,
        picList: pic ? [pic] : [],
        roomId,
        space: spacePath.split(',').map((item) => Number(item)),
        expirationDate: expirationDate ? dayjs(expirationDate) : undefined,
      });
      setSelectRoomId(roomId);
    },
  });

  // 查询房间列表
  const { data: roomList = [] } = useRequest(getRoom, {
    defaultParams: { orgId: `${orgId}` },
  });

  // 创建物品
  const { run: create } = useRequest(postBelongings, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateBack();
    },
  });

  // 编辑物品
  const { run: edit } = useRequest(putBelongings, {
    manual: true,
    onSuccess() {
      RouterUtil.navigateBack();
    },
  });

  return (
    <BasicLayout className={styles.container}>
      <Form
        form={form}
        initialValues={{ count: 1 }}
        footer={
          <Button type="primary" block formType="submit">
            提交
          </Button>
        }
        onFinish={({ picList, space, expirationDate, ...rest }) => {
          if (!orgId) {
            Toast.info('请先选择组织');
            return;
          }
          const params = {
            ...rest,
            pic: picList?.[0],
            spacePath: space.join(','),
            expirationDate: expirationDate?.format(DATE_FORMAT),
            orgId,
          };
          if (id) {
            edit({ id: Number(id), ...params });
          } else {
            create(params);
          }
        }}
      >
        <Title className={styles.title}>基本信息</Title>
        <Form.Item
          label="名称"
          name="name"
          rules={[
            { required: true, message: '请输入物品名称' },
            { max: 32, message: '物品名称不能超过32个字符' },
          ]}
        >
          <Input placeholder="请输入物品名称" />
        </Form.Item>
        <Form.Item label="描述" name="desc">
          <TextArea showCount maxLength={200} placeholder="请输入物品描述" />
        </Form.Item>
        <Form.Item label="数量" name="count">
          <InputNumber />
        </Form.Item>
        <Form.Item label="图片" name="picList">
          <Upload />
        </Form.Item>
        <Form.Item
          label="房间"
          name="roomId"
          trigger="onConfirm"
          validateTrigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          rules={[{ required: true, message: '请选择物品所在房间' }]}
        >
          <Picker<number>
            options={
              roomList?.map(({ name, id }) => ({ value: id, text: name })) ?? []
            }
            onConfirm={(_, selectedValue) => {
              if (selectedValue !== selectRoomId) {
                setSelectRoomId(selectedValue);
                form.setFieldsValue({ space: undefined });
              }
            }}
          />
        </Form.Item>
        {selectRoomId ? (
          <Form.Item
            label="位置"
            name="space"
            rules={[{ required: true, message: '请选择物品所在位置' }]}
          >
            <SpacePicker roomId={selectRoomId} />
          </Form.Item>
        ) : null}
        <Form.Item label="过期时间" name="expirationDate">
          <CalenderPicker
            disableDate={(d) => {
              const { year, month, day } = d as any;
              return dayjs().year(year).month(month).day(day).isBefore(dayjs());
            }}
          />
        </Form.Item>
      </Form>
    </BasicLayout>
  );
};

export default Page;
