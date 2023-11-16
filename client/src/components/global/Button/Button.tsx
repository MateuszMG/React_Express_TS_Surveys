import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import styles from './Button.module.css';

interface GlobalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  isError?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, GlobalButtonProps>(
  (
    { children, disabled, isError, isLoading, ...rest }: GlobalButtonProps,
    ref,
  ) => {
    return (
      <button
        {...rest}
        className={styles.button}
        disabled={disabled || isLoading || isError}
        ref={ref}
      >
        {isLoading ? 'Loaading ...' : children}
      </button>
    );
  },
);
