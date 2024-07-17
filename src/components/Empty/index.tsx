import { Empty as NutEmpty } from '@nutui/nutui-react-taro';
import classnames from 'classnames';

import type { EmptyProps as NutEmptyProps } from '@nutui/nutui-react-taro';
import type { FC, MouseEventHandler } from 'react';

import { OSS_DOMAIN, OSS_PREFIX } from '@/constants';

import './index.scss';

interface EmptyProps extends Partial<NutEmptyProps> {
  onClick?: MouseEventHandler;
}

const Empty: FC<EmptyProps> = ({
  className,
  image = `${OSS_DOMAIN}/${OSS_PREFIX}/assets/empty.png`,
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
