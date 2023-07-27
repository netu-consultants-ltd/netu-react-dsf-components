import React from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFBeforeMainContainerProps {
  children: React.ReactNode;
}

const DSFBeforeMainContainer = ({ children }: DSFBeforeMainContainerProps) => {
  return (
    <section className="govcy-container govcy-mb-4" id="beforeMainContainer">
      {children}
    </section>
  );
};

DSFBeforeMainContainer.defaultProps = {
  children: undefined,
};

DSFBeforeMainContainer.displayName = 'DSFBeforeMainContainer';

export default DSFBeforeMainContainer;
