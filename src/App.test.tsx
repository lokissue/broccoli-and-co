import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { BRAND_NAME } from 'constants/data';

test('render landing page', () => {
  render(<App />);

  expect(screen.getByText(BRAND_NAME)).toBeInTheDocument();
});
