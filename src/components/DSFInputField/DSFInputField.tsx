import React, { FC } from 'react';
import '../../resources/css/dsf.main.min.css';
import DSFInput, { DSFInputProps } from '../DSFInput/DSFInput';
import DSFLabel from '../DSFLabel/DSFLabel';
import DSFErrorText from '../DSFErrorText/DSFErrorText';
import DSFHintText from '../DSFHintText/DSFHintText';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface DSFInputFieldProps {
  label: string;
  hint?: React.ReactNode;
  underRadio?: boolean;
  id: string;
  inputProps?: DSFInputProps;
  input?: DSFInputProps;
  meta: {
    error?: string | string[];
    touched?: boolean;
  };
  visualSize?: number;
  errorId?: string;
  register?: UseFormRegisterReturn;
}

const DSFInputField: FC<DSFInputFieldProps> = ({
  meta,
  label,
  id,
  children,
  hint,
  inputProps,
  visualSize,
  errorId,
  register,
  underRadio,
  ...props
}: any) => {
  const showError = meta.touched && !!meta.error;
  return (
    <>
      <div className={'govcy-form ' + (underRadio ? ' govcy-pl-3 govcy-ml-1' : '')}>
        <div
          className={
            'govcy-form-control ' +
            (showError ? ' govcy-form-control-error ' : '') +
            (!!underRadio && !showError ? ' govcy-form-control-hint ' : '')
          }
          {...props}
        >
          <DSFLabel label={label} htmlFor={id}></DSFLabel>
          {hint && <DSFHintText>{hint}</DSFHintText>}
          {meta.touched && meta.error && <DSFErrorText id={id + 'Error'}>{meta.error}</DSFErrorText>}
          <DSFInput id={id} register={register} visualSize={visualSize} error={showError} {...inputProps} />
        </div>
      </div>
    </>
  );
};

DSFInputField.defaultProps = {
  hint: undefined,
  errorId: undefined,
  visualSize: undefined,
  inputProps: undefined,
  register: undefined,
  meta: {},
};

export default DSFInputField;
