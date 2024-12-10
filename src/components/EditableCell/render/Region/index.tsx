import classnames from 'classnames';
import { useContext } from 'react';

import { PREFIX_CLS } from '../../constants';
import { Context } from '../../context';
import Wrapper from '../Wrapper';

import type { RegionPickerProps } from '@/components/Picker/RegionPicker';
import type { FC } from 'react';

import { Picker } from '@/components';

import './index.scss';

export interface CustomRegionProps extends RegionPickerProps {}

const CustomRegion: FC<CustomRegionProps> = ({ className, ...rest }) => {
  const { name, value, onChange } = useContext(Context);

  return (
    <Wrapper className={`${PREFIX_CLS}-region-wrapper`}>
      <Picker.Region
        className={classnames(`${PREFIX_CLS}-region`, className)}
        value={value}
        onChange={(v) => {
          onChange?.(name, v);
        }}
        {...rest}
      />
    </Wrapper>
  );
};

export default CustomRegion;
