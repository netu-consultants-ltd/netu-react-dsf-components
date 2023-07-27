import React from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFLoadingBoxProps {
  loading: boolean;
  spinnerColor?: string;
  children?: React.ReactNode;
}

const DSFLoadingBox: React.FC<DSFLoadingBoxProps> = ({ loading, spinnerColor = 'primary', children }) => {
  return (
    <>
      {loading && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.1)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="spinner-border govcy-text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
      {children}
    </>
  );
};

DSFLoadingBox.displayName = 'DSFLoadingBox';

export default DSFLoadingBox;
