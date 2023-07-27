import React, { FC, Ref, forwardRef } from 'react';
import '../../resources/css/dsf.main.min.css';
import { getErrorId } from '../../lib/utils';

export interface DSFInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  error?: boolean;
  visualSize?: number;
  errorId?: string;
  register?: (rules?: any) => void;
}

const DSFInput = forwardRef(
  (
    { disabled, required, id, error, errorId, maxLength, visualSize, register, ...props }: DSFInputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <>
        <input
          type="text"
          maxLength={maxLength ? maxLength : undefined}
          className={
            'govcy-text-input' +
            (error ? ' govcy-text-input-error' : '') +
            (visualSize ? ' govcy-text-input-char_' + visualSize : '')
          }
          id={id}
          disabled={disabled}
          required={required}
          {...(error ? (errorId ? { 'aria-describedby': errorId } : { 'aria-describedby': id + 'Error' }) : {})}
          ref={ref}
          {...register}
          {...props}
        />
      </>
    );
  }
);

DSFInput.defaultProps = {
  type: 'text',
  error: false,
};

export default DSFInput;
