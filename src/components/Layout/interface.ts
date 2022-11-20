import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

/**
 * @title Layout
 */

export interface LayoutProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'ref'> {
  style?: CSSProperties;
  className?: string | string[];
  testId?: string;
}

export interface HeaderProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'ref'> {
  className?: string | string[];
}

export interface ContentProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'ref'> {
  className?: string | string[];
}

export interface FooterProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'ref'> {
  className?: string | string[];
}
