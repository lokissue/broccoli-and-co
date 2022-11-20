import { CSSProperties, ReactNode } from 'react';

/**
 * @title Modal
 */

export interface ModalProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * if the modal is shown
   */
  visible?: boolean;
  /**
   * toggle visible state
   */
  toggle?: () => void;
}
