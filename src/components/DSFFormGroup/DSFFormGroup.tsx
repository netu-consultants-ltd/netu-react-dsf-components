import React, { Children, createContext } from 'react';
import '../../resources/css/dsf.main.min.css';
import DSFHintText from '../DSFHintText/DSFHintText';
import DSFErrorText from '../DSFErrorText/DSFErrorText';
import { getErrorId } from '../../lib/utils';
import DSFFieldSet from '../DSFFieldSet/DSFFieldSet';

export interface DSFFormGroupProps {
  label?: string;
  name: string;
  error?: string;
  hint?: string;
  children?: React.ReactNode;
}

export interface IFormGroupContext {
  error?: string;
  errorId: string;
  childrenCount: number;
}

export const FormGroupContext = createContext<IFormGroupContext>({
  error: '',
  errorId: '',
  childrenCount: 0,
});

const DSFFormGroup: React.FC<DSFFormGroupProps> = ({ name, label, error, hint, children }) => {
  const errorId = getErrorId(name);
  const count = Children.count(children);
  return (
    <FormGroupContext.Provider value={{ error: error, errorId: errorId, childrenCount: count }}>
      <div className="govcy-form">
        <DSFFieldSet legend={label}>
          {hint && <DSFHintText className="govcy-mt-2">{hint}</DSFHintText>}
          <div className={'govcy-form-control' + (!!error ? ' govcy-form-control-error' : '')}>
            {!!error && <DSFErrorText id={errorId}>{error}</DSFErrorText>}
            {children}
          </div>
        </DSFFieldSet>
      </div>
    </FormGroupContext.Provider>
  );
};

DSFFormGroup.displayName = 'DSFFormGroup';

DSFFormGroup.defaultProps = {
  error: undefined,
  hint: undefined,
  children: undefined,
};

export default DSFFormGroup;
