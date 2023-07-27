import React, { FC } from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFErrorTextProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const DSFErrorText: FC<DSFErrorTextProps> = ({ id, children, className }: DSFErrorTextProps) => {
  return (
    <>
      <p className={'govcy-input-error-msg ' + className} id={id}>
        <span className="govcy-visually-hidden-error">Error: </span>
        {children}
      </p>
    </>
  );
};

DSFErrorText.defaultProps = {
  id: undefined,
};

DSFErrorText.displayName = 'DSFErrorText';

export default DSFErrorText;
