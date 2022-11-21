import { CSSProperties, InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'className'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * label of input field
   */
  label?: string;
}
