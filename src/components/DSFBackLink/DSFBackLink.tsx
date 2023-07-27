import React, { FC } from 'react';
import '../../resources/css/dsf.main.min.css';
import { BrowserRouter, Link, LinkProps } from 'react-router-dom';

export interface DSFBackLinkProps extends LinkProps {
  onBackClick?: () => void;
}

const DSFBackLink: FC<DSFBackLinkProps> = ({ onBackClick, ...props }: DSFBackLinkProps) => {
  return (
    <>
      <div className="govcy-float-start">
        <span className="bi bi-chevron-left"></span>
        <Link onClick={onBackClick} {...props}>
          Back
        </Link>
      </div>
    </>
  );
};

DSFBackLink.defaultProps = {
  to: '/',
};

export default DSFBackLink;
