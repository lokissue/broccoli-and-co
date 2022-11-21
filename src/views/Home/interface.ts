export type ModalState = 'REQUEST' | 'RESULT';

export interface formValueProps {
  name: string;
  email: string;
  confirmEmail: string;
}

interface baseFormProps {
  toggle?: () => void;
  switchForm?: (s: ModalState) => void;
}

export interface requestFormProps extends baseFormProps {}

export interface resultFormProps extends baseFormProps {}
