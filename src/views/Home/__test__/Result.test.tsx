import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Result from '../Result';

test('Result should be rendered', () => {
  render(<Result />);

  waitFor(() =>
    expect(
      screen.getAllByText(
        /You will be one of the first to experience Broccoli & Co when we launch./i
      )
    ).toBeInTheDocument()
  );
  expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
});
