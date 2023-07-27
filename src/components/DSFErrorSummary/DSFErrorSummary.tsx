import React, { ChangeEventHandler, FC, SelectHTMLAttributes } from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFErrorSummaryProps {
  /** onClick function to scroll the target element into view */
  onHandleErrorClick?: (targetName: string) => void;
  /** Heading text */
  heading?: string;
  /** Array of errors with text and target element name to scroll into view when clicked */
  errors?: {
    targetName?: string;
    text?: string;
  }[];
}

const DSFErrorSummary: FC<DSFErrorSummaryProps> = ({
  onHandleErrorClick = undefined,
  heading = 'There is a problem',
  errors = [],
}: DSFErrorSummaryProps) => {
  const handleErrorClick = (e: any, targetName: string) => {
    e.preventDefault();
    const element = document.getElementById(targetName);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <div className="govcy-alert-error govcy-br-5 govcy-br-danger govcy-p-3">
        <h2>{heading}</h2>

        {errors.length > 0 && (
          <p className="govcy-mb-0">
            {errors.map((error, index) => (
              <a
                key={index}
                onClick={(e) => error.targetName && handleErrorClick && handleErrorClick(e, error.targetName + 'Error')}
                href={'#'}
              >
                {error.text}
              </a>
            ))}
          </p>
        )}
      </div>
    </>
  );
};

DSFErrorSummary.defaultProps = {
  errors: [],
  heading: 'There is a problem',
  onHandleErrorClick: undefined,
};

export default DSFErrorSummary;
