import { FormHTMLAttributes, ReactNode } from 'react';

import styles from './Form.module.css';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const Form = ({ children, ...rest }: FormProps) => {
  return (
    <form {...rest} className={styles.wrapper}>
      {children}
    </form>
  );
};

interface ButtonsWrapper {
  children: ReactNode;
}

Form.ButtonsWrapper = ({ children }: ButtonsWrapper) => (
  <div className={styles.buttonsWrapper}>{children}</div>
);
