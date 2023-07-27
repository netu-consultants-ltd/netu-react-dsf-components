import React, { FC } from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFLabelProps
  extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  label: string;
  htmlFor?: string;
}

const DSFLabel: FC<DSFLabelProps> = ({ label, htmlFor, className, ...props }: DSFLabelProps) => {
  return (
    <>
      <label className={'govcy-label ' + className} htmlFor={htmlFor} {...props}>
        {label}
      </label>
    </>
  );
};

DSFLabel.defaultProps = {
  label: '',
  htmlFor: 'string',
};

DSFLabel.displayName = 'DSFLabel';

export default DSFLabel;
