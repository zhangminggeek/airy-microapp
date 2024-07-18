import { Empty as NutEmpty } from '@nutui/nutui-react-taro';
import classnames from 'classnames';

import type { EmptyProps as NutEmptyProps } from '@nutui/nutui-react-taro';
import type { FC, MouseEventHandler } from 'react';

import { OSS_ASSETS_DIR_WITH_DOMAIN } from '@/constants';

import './index.scss';

interface EmptyProps extends Partial<NutEmptyProps> {
  onClick?: MouseEventHandler;
}

const Empty: FC<EmptyProps> = ({
  className,
  image = `${OSS_ASSETS_DIR_WITH_DOMAIN}/empty.png`,
  ...rest
}) => {
  return (
    <NutEmpty
      className={classnames(className, 'm-empty')}
      image={image}
      {...rest}
    />
  );
};

export default Empty;
