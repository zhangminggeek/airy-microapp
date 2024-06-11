import classnames from 'classnames';

import type { SectionProps } from '@/components/Section';
import type { FC } from 'react';

import { Section } from '@/components';

import './index.scss';

interface FormSectionProps extends SectionProps {
  fill?: boolean;
}

const PREFIX_CLS = 'm-form-section';

const FormSection: FC<FormSectionProps> = ({
  className,
  children,
  fill = false,
  ...rest
}) => {
  return (
    <Section
      className={classnames(
        PREFIX_CLS,
        { [`${PREFIX_CLS}-fill`]: fill },
        className,
      )}
      {...rest}
    >
      {children}
    </Section>
  );
};

export default FormSection;
