import React, { FC, forwardRef, useContext } from 'react';
import '../../resources/js/bootstrap.bundle.min.js';
import '../../resources/js/app.min.js';
import '../../resources/css/dsf.main.min.css';
import { FormGroupContext } from '../DSFFormGroup/DSFFormGroup';
import DSFHintText from '../DSFHintText';
import DSFInput from '../DSFInput';

export interface DSFRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint?: React.ReactNode;
  children: React.ReactNode;
  collapsed?: {
    node?: React.ReactNode;
    className: string;
  };
  className?: string;
  inline?: boolean;
}

const DSFRadio = forwardRef<HTMLInputElement, DSFRadioProps>(
  ({ children, hint, className, id, inline = false, collapsed, ...props }: DSFRadioProps, ref) => {
    const { error, errorId, childrenCount } = useContext(FormGroupContext);

    var component = (
      <>
        <label className={'govcy-radio ' + (inline ? ' govcy-d-sm-inline-block ' : '') + (className ? className : '')}>
          {children}
          <DSFInput
            className={'govcy-radio-input ' + (collapsed ? 'collapsed' : '')}
            {...(collapsed && {
              'data-bs-toggle': 'collapse',
              'data-bs-target': `.${collapsed.className}${collapsed.node ? ':not(.show)' : '.show'}`,
              'aria-expanded': 'false',
            })}
            type="radio"
            {...(!!error ? { 'aria-describedby': errorId } : {})}
            {...props}
            ref={ref}
          />
          <span className="govcy-radio-checked"></span>
          {hint && <DSFHintText className="govcy-mt-2">{hint}</DSFHintText>}
        </label>
        {collapsed && collapsed.node && (
          <div className={'email govcy-pl-3 govcy-ml-1 collapse'}>
            <div className="govcy-form-control govcy-form-control-hint">{collapsed.node}</div>
          </div>
        )}
      </>
    );

    if (childrenCount && childrenCount > 1) {
      return <>{component}</>;
    } else {
      return (
        <>
          <div className="govcy-form">
            <div className="govcy-form-control">{component}</div>
          </div>
        </>
      );
    }
  }
);

DSFRadio.displayName = 'DSFRadio';

DSFRadio.defaultProps = {
  hint: undefined,
  className: undefined,
  inline: false,
};

export default DSFRadio;
