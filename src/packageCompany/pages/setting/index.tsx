import { getCompanySelf, putCompany } from '@/api';
import { EditableCell } from '@/components';
import { useRequest } from '@/hooks';
import { BasicLayout } from '@/layouts';

const Page = () => {
  // 获取企业信息
  const { data, run } = useRequest(getCompanySelf);

  // 更新企业信息
  const { run: update } = useRequest(putCompany, {
    manual: true,
    onSuccess() {
      run();
    },
  });

  return (
    <BasicLayout title="设置" back>
      <EditableCell
        fields={[
          {
            title: '店铺LOGO',
            name: 'logo',
            renderConfig: {
              renderType: 'avatar',
              name: data?.name,
            },
          },
          {
            title: '简介',
            name: 'intro',
            renderConfig: {
              renderType: 'textarea',
              placeholder: '一句话介绍店铺',
              maxLength: 200,
            },
          },
        ]}
        data={{ logo: data?.logo, intro: data?.intro }}
        onChange={async (field, value) => {
          await update({ [field]: value });
        }}
      />
    </BasicLayout>
  );
};

export default Page;
