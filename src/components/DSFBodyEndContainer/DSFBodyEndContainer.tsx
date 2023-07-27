import React from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFBodyEndContainerProps {
  children?: React.ReactNode;
}

const DSFBodyEndContainer = ({ children }: DSFBodyEndContainerProps) => {
  return (
    <section className="govcy-container-fluid" id="bodyEndContainer">
      {children}
    </section>
  );
};

DSFBodyEndContainer.defaultProps = {
  children: undefined,
};

DSFBodyEndContainer.displayName = 'DSFBodyEndContainer';

export default DSFBodyEndContainer;
