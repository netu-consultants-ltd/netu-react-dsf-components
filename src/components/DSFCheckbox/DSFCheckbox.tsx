import React, { FC, forwardRef, useContext } from 'react';
import '../../resources/css/dsf.main.min.css';
import { FormGroupContext } from '../DSFFormGroup/DSFFormGroup';
import DSFHintText from '../DSFHintText';

export interface DSFCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * React Node to be displayed on the button, can be a string or any other react node
   */
  id?: string;

  /**
   * Hint text
   */
  hint?: React.ReactNode;

  /**
   * React Node to be displayed as label, can be a combination of compnents
   */
  children: React.ReactNode;

  /**
   * Custom style class to be added in the checkbox
   */
  className?: string;
}

const DSFCheckbox = forwardRef<HTMLInputElement, DSFCheckboxProps>(
  ({ children, hint, className, id, ...props }: DSFCheckboxProps, ref) => {
    const { error, errorId } = useContext(FormGroupContext);

    return (
      <div className="govcy-form">
        <div className="govcy-form-control">
          <label className={'govcy-checkbox ' + (className ? className : '')}>
            {children}
            <input
              className="govcy-checkbox-input"
              type="checkbox"
              id={id}
              {...(!!error ? { 'aria-describedby': errorId } : {})}
              {...props}
              ref={ref}
            />
            <span className="govcy-tickbox"></span>
            {hint && <DSFHintText className="govcy-mt-2">{hint}</DSFHintText>}
          </label>
        </div>
      </div>
    );
  }
);

DSFCheckbox.displayName = 'Checkbox';

DSFCheckbox.defaultProps = {
  hint: undefined,
  className: undefined,
  id: undefined,
};

export default DSFCheckbox;
