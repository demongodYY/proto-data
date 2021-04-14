import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../src/App';

describe('App root test', () => {
  it('test app', () => {
    render(<App />);
    const appDom = document.querySelector('.App');
    expect(appDom).toHaveClass('App');
  });
});
