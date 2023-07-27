import React, { FC, SelectHTMLAttributes } from 'react';
import '../../resources/css/dsf.main.min.css';
import DSFInput, { DSFInputProps } from '../DSFInput/DSFInput';

export interface DSFSelectProps {
  label: string;
  hint?: React.ReactNode;
  id: string;
  inputProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  meta: {
    error?: string | string[];
    touched?: boolean;
  };
  children: React.ReactNode;
}

const DSFSelect: FC<DSFSelectProps> = ({ children, inputProps, label, hint, id, meta, ...props }: DSFSelectProps) => {
  const showError = meta.touched && meta.error;
  const errorId = id + 'Error';
  return (
    <>
      <div className="govcy-form">
        <div className={'govcy-form-control' + (showError ? ' govcy-form-control-error' : '')}>
          <label className="govcy-label" htmlFor={id}>
            {label}
          </label>

          {hint && <span className="govcy-hint">{hint}</span>}

          {showError && (
            <p className="govcy-input-error-msg" id={errorId}>
              <span className="govcy-visually-hidden-error">Error: </span>
              {meta.error}
            </p>
          )}

          <select
            className={'govcy-select' + (showError ? ' govcy-select-error' : '')}
            id={id}
            name={id}
            aria-describedby={showError ? errorId : ''}
            required={inputProps && inputProps.required}
            disabled={inputProps && inputProps.disabled}
            {...inputProps}
          >
            {children}
          </select>
        </div>
      </div>
    </>
  );
};

DSFSelect.defaultProps = {
  inputProps: {},
  meta: {},
  hint: undefined,
};

export default DSFSelect;
