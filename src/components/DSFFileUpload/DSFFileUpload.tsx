import React, { Ref } from 'react';
import '../../resources/css/dsf.main.min.css';
import DSFErrorText from '../DSFErrorText/DSFErrorText';
import DSFLabel from '../DSFLabel/DSFLabel';
import DSFHintText from '../DSFHintText/DSFHintText';
import { getErrorId } from '../../lib/utils';
import DSFInput from '../DSFInput';

export interface DSFFileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  meta: {
    error?: string | string[];
    touched?: boolean;
  };
  label: string;
  hint?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  acceptedFormats?: string;
}

const DSFFileUpload = React.forwardRef<HTMLInputElement, DSFFileUploadProps>(
  ({ meta, label, hint, acceptedFormats, onChange, id }: DSFFileUploadProps, ref: Ref<HTMLInputElement>) => {
    const errorId = getErrorId(id);
    const hintId = id + '_hint';
    const showError = meta.touched && !!meta.error;
    return (
      <>
        <div className="govcy-form">
          <div className="govcy-form-control">
            <DSFLabel label={label} className="govcy-mb-1"></DSFLabel>

            {hint && <DSFHintText id={hintId}>{hint}</DSFHintText>}

            {showError && (
              <DSFErrorText id={errorId} className="govcy-mb-3">
                {meta.error}
              </DSFErrorText>
            )}

            <DSFInput
              className="govcy-file-upload"
              accept={acceptedFormats}
              type="file"
              id={id}
              name={id}
              ref={ref}
              {...(showError ? { 'aria-describedby': errorId } : hint ? { 'aria-describedby': hintId } : {})}
            />
          </div>
        </div>
      </>
    );
  }
);

DSFFileUpload.defaultProps = {
  hint: undefined,
  label: undefined,
  meta: {},
  acceptedFormats: undefined,
  onChange: undefined,
  name: undefined,
};

DSFFileUpload.displayName = 'DSFFileUpload';

export default DSFFileUpload;
