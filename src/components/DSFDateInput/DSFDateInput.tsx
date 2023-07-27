import '../../resources/css/dsf.main.min.css';
import DSFErrorText from '../DSFErrorText';
import React, { useRef, RefObject, ChangeEvent, InputHTMLAttributes, FocusEvent, ChangeEventHandler } from 'react';
import DSFInput, { DSFInputProps } from '../DSFInput/DSFInput';
import DSFLabel from '../DSFLabel';

interface InputRefObject {
  day: RefObject<HTMLInputElement>;
  month: RefObject<HTMLInputElement>;
  year: RefObject<HTMLInputElement>;
}

export interface DSFDateInputProps {
  /**
   * ID of the component
   */
  id: string;

  /**
   * Input label
   */
  label: string;

  /**
   * Hint text
   */
  hint?: string;

  /**
   * Error text to be shown
   */
  errorText?: string;

  /**
   * Refs to the individual input elements for day, month, year
   */
  refs?: InputRefObject;

  /**
   * Overrides the labels for each input
   */
  labels?: {
    day: string;
    month: string;
    year: string;
  };

  /**
   * Native input attributes to be added to each date input
   */
  inputs?: {
    day?: DSFInputProps;
    month?: DSFInputProps;
    year?: DSFInputProps;
  };

  /**
   * Initialize each input with specific values
   */
  defaultValues?: {
    day?: string;
    month?: string;
    year?: string;
  };

  /**
   * General input props including event handlers and value for all inputs
   */
  inputProps?: {
    /**
     * Called when the day, month or year changes
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
    /**
     * Called when the day, month or year fields are blurred
     * (does not get called when moving between inputs in the same datefield)
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>, key: string) => void;
    /**
     * Called when the day, month or year fields are focussed
     * (does not get called when moving between inputs in the same datefield)
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>, key: string) => void;
    /**
     * When the form field is controlled, this sets the value of the day, month and year inputs
     */
    value?: {
      day?: string;
      month?: string;
      year?: string;
    };
  };
}

const keys = ['day', 'month', 'year'];

type CurrentRefsType = {
  [key: string]: React.RefObject<HTMLInputElement>;
};

type KeysIndexType = 'day' | 'month' | 'year';

const DSFDateInput: React.FC<DSFDateInputProps> = ({
  id,
  label,
  hint,
  errorText,
  labels = {
    day: 'Day',
    month: 'Month',
    year: 'Year',
  },
  refs = {
    day: useRef<HTMLInputElement>(null),
    month: useRef<HTMLInputElement>(null),
    year: useRef<HTMLInputElement>(null),
  },
  inputProps = {},
  inputs,
  defaultValues,
}) => {
  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const currentRefs: CurrentRefsType = {
    day: dayRef,
    month: monthRef,
    year: yearRef,
  };

  if (refs) {
    refs.day = currentRefs.day;
    refs.month = currentRefs.month;
    refs.year = currentRefs.year;
  }

  const parentErrorId = id + 'Error';

  const { onChange, onBlur, onFocus, value } = inputProps;

  return (
    <>
      <div className="govcy-form">
        <fieldset className="govcy-fieldset">
          <div className={'govcy-form-control' + (errorText ? ' govcy-form-control-error' : '')}>
            <legend className="govcy-legend govcy-mb-1">{label}</legend>
            {hint && <span className="govcy-hint govcy-mb-3">{hint}</span>}
            {errorText && <DSFErrorText id={parentErrorId}>{errorText}</DSFErrorText>}
            <div className="govcy-d-flex">
              {keys.map((key, index) => {
                const inputId = id + '_' + key;
                return (
                  <div key={index} className={'govcy-d-block ' + (key !== 'day' ? 'govcy-ml-2' : '')}>
                    <DSFLabel
                      label={labels[key as KeysIndexType]}
                      className="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2"
                      htmlFor={inputId}
                    ></DSFLabel>
                    <DSFInput
                      ref={currentRefs[key]}
                      id={inputId}
                      name={inputId}
                      defaultValue={defaultValues && defaultValues[key as KeysIndexType]}
                      value={value ? value[key as KeysIndexType] : undefined}
                      maxLength={key === 'year' ? 4 : 2}
                      visualSize={key === 'year' ? 6 : 3}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      onChange={(e) => onChange && onChange(e, key)}
                      onBlur={(e) => onBlur && onBlur(e, key)}
                      onFocus={(e) => onFocus && onFocus(e, key)}
                      {...(inputs && inputs[key as KeysIndexType])}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

DSFDateInput.displayName = 'DSFDateInput';

DSFDateInput.defaultProps = {
  inputProps: {},
  hint: undefined,
  errorText: undefined,
  labels: {
    day: 'Day',
    month: 'Month',
    year: 'Year',
  },
  defaultValues: {
    day: undefined,
    month: undefined,
    year: undefined,
  },
  inputs: {
    day: undefined,
    month: undefined,
    year: undefined,
  },
  refs: undefined,
};

export default DSFDateInput;
