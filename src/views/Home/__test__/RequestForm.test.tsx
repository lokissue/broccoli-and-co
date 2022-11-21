import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import RequestForm from '../RequestForm';

test('full name input should be rendered', () => {
  render(<RequestForm />);

  expect(screen.getByLabelText('Full name')).toBeInTheDocument();
});

test('email input should be rendered', () => {
  render(<RequestForm />);

  expect(screen.getByLabelText('Email')).toBeInTheDocument();
});

test('confirm input should be rendered', () => {
  render(<RequestForm />);

  expect(screen.getByLabelText('Confirm Email')).toBeInTheDocument();
});

test('submit button should be rendered', () => {
  render(<RequestForm />);

  expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
});

test('error message should not show initially', () => {
  render(<RequestForm />);

  expect(screen.queryAllByTestId('errorMsg')).toHaveLength(0);
});

test('full name input should not be empty', () => {
  render(<RequestForm />);

  const nameInputEl = screen.getByLabelText<HTMLInputElement>('Full name');
  expect(nameInputEl).toBeInvalid();

  const inputValue = 'FirstName LastName';
  fireEvent.change(nameInputEl, { target: { value: inputValue } });
  expect(nameInputEl.value).toBe(inputValue);

  expect(nameInputEl).toBeValid();
});

test('email input should be in email format', () => {
  render(<RequestForm />);

  const emailInputEl = screen.getByLabelText<HTMLInputElement>('Email');
  expect(emailInputEl).toBeInvalid();

  let inputValue = 'not_a_email';
  fireEvent.change(emailInputEl, { target: { value: inputValue } });
  expect(emailInputEl).toBeInvalid();

  inputValue = 'google@';
  fireEvent.change(emailInputEl, { target: { value: inputValue } });
  expect(emailInputEl).toBeInvalid();

  inputValue = 'google@gmail.com';
  fireEvent.change(emailInputEl, { target: { value: inputValue } });
  expect(emailInputEl).toBeValid();
});

test('confirm Email input should be in email format', () => {
  render(<RequestForm />);

  const confirmemailInputEl = screen.getByLabelText<HTMLInputElement>('Confirm Email');
  expect(confirmemailInputEl).toBeInvalid();

  let inputValue = 'not_a_email';
  fireEvent.change(confirmemailInputEl, { target: { value: inputValue } });
  expect(confirmemailInputEl).toBeInvalid();

  inputValue = 'google@';
  fireEvent.change(confirmemailInputEl, { target: { value: inputValue } });
  expect(confirmemailInputEl).toBeInvalid();

  inputValue = 'google@gmail.com';
  fireEvent.change(confirmemailInputEl, { target: { value: inputValue } });
  expect(confirmemailInputEl).toBeValid();
});

test('full name less than 3 char should display error message', () => {
  render(<RequestForm />);

  const nameInputEl = screen.getByLabelText<HTMLInputElement>('Full name');
  fireEvent.change(nameInputEl, { target: { value: 'aa' } });

  const emailInputEl = screen.getByLabelText<HTMLInputElement>('Email');
  fireEvent.change(emailInputEl, { target: { value: 'google@gmail.com' } });

  const confirmemailInputEl = screen.getByLabelText<HTMLInputElement>('Confirm Email');
  fireEvent.change(confirmemailInputEl, { target: { value: 'google@gmail.com' } });

  const submitBtnEl = screen.getByRole('button', { name: /send/i });
  fireEvent.click(submitBtnEl);

  expect(screen.getByTestId('errorMsg')).toHaveTextContent(
    /Full name needs to be at least 3 characters long/i
  );
});

test('email and confirm email not match should display error message', () => {
  render(<RequestForm />);

  const nameInputEl = screen.getByLabelText<HTMLInputElement>('Full name');
  fireEvent.change(nameInputEl, { target: { value: 'Oliver' } });

  const emailInputEl = screen.getByLabelText<HTMLInputElement>('Email');
  fireEvent.change(emailInputEl, { target: { value: 'google@gmail.com' } });

  const confirmemailInputEl = screen.getByLabelText<HTMLInputElement>('Confirm Email');
  fireEvent.change(confirmemailInputEl, { target: { value: 'g@gmail.com' } });

  // const submitBtnEl = screen.getByRole('button', { name: /send/i });
  const submitBtnEl = screen.getByTestId('submitBtn');
  fireEvent.click(submitBtnEl);

  expect(screen.getByTestId('errorMsg')).toHaveTextContent(/Email not match/i);
});

test('button should render correctly when form submitted', () => {
  render(<RequestForm />);
  const nameInputEl = screen.getByLabelText<HTMLInputElement>('Full name');
  fireEvent.change(nameInputEl, { target: { value: 'oliver' } });

  const emailInputEl = screen.getByLabelText<HTMLInputElement>('Email');
  fireEvent.change(emailInputEl, { target: { value: 'google@gmail.com' } });

  const confirmemailInputEl = screen.getByLabelText<HTMLInputElement>('Confirm Email');
  fireEvent.change(confirmemailInputEl, { target: { value: 'google@gmail.com' } });

  const submitBtnEl = screen.getByTestId('submitBtn');
  fireEvent.click(submitBtnEl);

  expect(screen.queryAllByTestId('errorMsg')).toHaveLength(0);

  expect(submitBtnEl).toHaveTextContent('Sending, please wait...');
});
