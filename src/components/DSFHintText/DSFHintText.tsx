import React, { FC } from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFHintTextProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const DSFHintText: FC<DSFHintTextProps> = ({ children, className, id }: DSFHintTextProps) => {
  return (
    <>
      <span className={'govcy-hint ' + className} id={id}>
        {children}
      </span>
    </>
  );
};

DSFHintText.displayName = 'DSFHintText';

export default DSFHintText;
