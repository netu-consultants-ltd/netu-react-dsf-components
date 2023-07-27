import React from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFBodyStartContainerProps {
  children: React.ReactNode;
}

const DSFBodyStartContainer = ({ children }: DSFBodyStartContainerProps) => {
  return (
    <section className="govcy-container-fluid" id="bodyStartContainer">
      {children}
    </section>
  );
};

DSFBodyStartContainer.defaultProps = {
  children: undefined,
};

DSFBodyStartContainer.displayName = 'DSFBodyStartContainer';

export default DSFBodyStartContainer;
