import { forwardRef, InputHTMLAttributes } from 'react';
import { InputBox } from '../../InputBox/InputBox';

interface ColorInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  ({ label, error, ...rest }: ColorInputProps, ref) => {
    return (
      <InputBox label={label} error={error}>
        <input {...rest} ref={ref} type='color' />
      </InputBox>
    );
  },
);
