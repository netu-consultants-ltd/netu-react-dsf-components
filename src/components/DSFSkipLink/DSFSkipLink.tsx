import React from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFSkipLinkProps {
  href?: string;
  children?: React.ReactNode;
}

const DSFSkipLink = ({ href, children }: DSFSkipLinkProps) => {
  return (
    <a href={href} className="govcy-skip-link">
      {children}
    </a>
  );
};

DSFSkipLink.defaultProps = {
  children: 'Skip to main content',
  href: '#mainContainer',
};

DSFSkipLink.displayName = 'DSFSkipLink';

export default DSFSkipLink;
