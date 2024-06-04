import { Tag } from '@nutui/nutui-react-taro';
import classnames from 'classnames';
import dayjs, { type Dayjs } from 'dayjs';
import { useMemo } from 'react';

import type { TagType } from '@nutui/nutui-react-taro';
import type { CSSProperties, FC } from 'react';

import './index.scss';

interface ExpirationStatusTagProps {
  className?: string;
  style?: CSSProperties;
  date?: Dayjs;
}

const PREFIX_CLS = 'm-expiration-status-tag';

const ExpirationStatusTag: FC<ExpirationStatusTagProps> = ({
  className,
  style,
  date,
}) => {
  const status = useMemo(() => {
    if (!date) return;
    const now = dayjs();
    if (now.isAfter(date)) {
      return { text: '已过期', type: 'danger' as TagType };
    } else if (now.isAfter(date.subtract(7, 'day'))) {
      return { text: '即将过期', type: 'warning' as TagType };
    } else {
      return;
    }
  }, [date]);

  return date && status ? (
    <Tag
      className={classnames(PREFIX_CLS, className)}
      style={style}
      type={status.type}
    >
      {status.text}
    </Tag>
  ) : null;
};

export default ExpirationStatusTag;
