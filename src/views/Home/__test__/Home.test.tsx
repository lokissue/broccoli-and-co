import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Home from '../index';

test('home title should be render', () => {
  render(<Home />);

  expect(screen.getByText(/A better way.*to enjoy every day./)).toBeInTheDocument();
});

test('home subtitle should be render', () => {
  render(<Home />);

  expect(screen.getByText(/Be the first to know when we launch/)).toBeInTheDocument();
});

test('request button should be render', () => {
  render(<Home />);

  expect(screen.getByTestId('requestBtn')).toBeInTheDocument();
});

test('request form show correctly when request button clicked', () => {
  render(<Home />);

  const requestBtnEl = screen.getByTestId('requestBtn');
  fireEvent.click(requestBtnEl);

  expect(screen.getByTestId('requestModal')).toBeInTheDocument();
  expect(screen.getByTestId('requestForm')).toBeInTheDocument();
});
