import React, { FC } from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFFooterProps {
  privacyStatementUrl?: string;
  cookiePolicyUrl?: string;
  accessibilityStatementUrl?: string;
}

const DSFFooter = ({ privacyStatementUrl, cookiePolicyUrl, accessibilityStatementUrl }: DSFFooterProps) => {
  return (
    <div className="govcy-container-fluid govcy-br-top-8 govcy-br-top-primary govcy-p-3 govcy-bg-light govcy-d-print-none">
      <div className="govcy-container" id="footerContainer">
        <div className="row">
          <footer className="govcy-footer">
            <span className="govcy-d-inline-block govcy-valign-top govcy-pb-2">
              <img alt="govcy-logo" />
            </span>
            <ul className="govcy-d-inline-block  govcy-m-0 govcy-pl-3 govcy-efs-medium">
              {privacyStatementUrl && (
                <li>
                  <a href={privacyStatementUrl}>Privacy statement</a>
                </li>
              )}
              {cookiePolicyUrl && (
                <li>
                  <a href={cookiePolicyUrl}>Cookie policy</a>
                </li>
              )}
              {accessibilityStatementUrl && (
                <li>
                  <a href={accessibilityStatementUrl}>Accessibility statement</a>
                </li>
              )}
              <li className="govcy-d-block govcy-text-dark">© Republic of Cyprus, 2021</li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

DSFFooter.defaultProps = {
  privacyStatementUrl: undefined,
  cookiePolicyUrl: undefined,
  accessibilityStatementUrl: undefined,
};

DSFFooter.displayName = 'DSFFooter';

export default DSFFooter;
