import React, { CSSProperties, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLElement>, 'className'> {
  style?: CSSProperties;
  className?: string | string[];
  appearance?: 'primary' | 'danger' | 'link';
}
