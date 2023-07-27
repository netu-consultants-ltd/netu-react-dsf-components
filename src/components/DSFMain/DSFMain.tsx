import React from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFMainProps {
  children: React.ReactNode;
}

const DSFMain = ({ children }: DSFMainProps) => {
  return (
    <main className="govcy-container" id="mainContainer">
      {children}
    </main>
  );
};

DSFMain.defaultProps = {
  children: undefined,
};

DSFMain.displayName = 'DSFMain';

export default DSFMain;
