import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../src/App';

describe('App root test', () => {
  test('test app', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button')).toHaveTextContent('0');
  });
});
