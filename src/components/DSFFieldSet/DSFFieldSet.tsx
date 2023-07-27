import React from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFFieldSetProps {
  legend: React.ReactNode;
  children?: React.ReactNode;
}

const DSFFieldSet: React.FC<DSFFieldSetProps> = ({ legend, children }) => {
  return (
    <fieldset className="govcy-fieldset">
      <legend className="govcy-legend">{legend}</legend>
      {children}
    </fieldset>
  );
};

DSFFieldSet.defaultProps = {
  legend: undefined,
  children: undefined,
};

DSFFieldSet.displayName = 'DSFFieldSet';

export default DSFFieldSet;
