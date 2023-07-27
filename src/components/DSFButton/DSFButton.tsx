import React, { FC } from 'react';
import '../../resources/css/dsf.main.min.css';

export interface DSFButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /**
   * Id of the button
   */
  id: string;
  /**
   * React Node to be displayed on the button, can be a string or any other react node
   */
  children: React.ReactNode;
}

const DSFButton: FC<DSFButtonProps> = ({ children, id, type = 'button', className, ...props }: DSFButtonProps) => {
  return (
    <button id={id} type={type} className={className ? className : 'govcy-btn-primary'} {...props}>
      {children}
    </button>
  );
};

DSFButton.defaultProps = {};
DSFButton.displayName = 'DSFButton';

export default DSFButton;
