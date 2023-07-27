import React, { FC } from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFUserSignOutProps {
  fullName: string;
  onClick?: () => void;
  href: string;
}

const DSFUserSignOut: FC<DSFUserSignOutProps> = ({ fullName, onClick, href }: DSFUserSignOutProps) => {
  return (
    <>
      <div className="govcy-text-end">
        <span>{fullName} | </span>
        <a
          href={href}
          className="govcy-sign-out"
          {...(onClick
            ? {
                onClick: (e) => {
                  e.preventDefault();
                  onClick();
                },
              }
            : {})}
        >
          Sign Out
        </a>
      </div>
    </>
  );
};

DSFUserSignOut.defaultProps = {
  href: '#',
};

export default DSFUserSignOut;
