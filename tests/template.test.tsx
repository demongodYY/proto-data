import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Template from '../src/Components/Template';

describe('test template component', () => {
  test('template should be exist', () => {
    const { getByTestId } = render(<Template />);
    expect(getByTestId('template')).toHaveStyle({
      width: '300px',
      height: '500px',
      'background-color': '#dddddd',
    });
  });

  test('template should has two input to change style', () => {
    const { getByLabelText } = render(<Template />);
    expect(getByLabelText('宽度')).toHaveValue(300);
    expect(getByLabelText('高度')).toHaveValue(500);
  });

  test('template should change style when input value change', async () => {
    const { getByLabelText, getByTestId } = render(<Template />);
    const widthInput = getByLabelText('宽度');
    const heightInput = getByLabelText('高度');
    fireEvent.change(widthInput, { target: { value: 400 } });
    fireEvent.change(heightInput, { target: { value: 600 } });
    expect(getByTestId('template')).toHaveStyle({
      width: '400px',
      height: '600px',
    });
  });

  test('template should has input to upload image', async () => {
    const { getByTestId } = render(<Template />);
    expect(getByTestId('template-bg')).toHaveProperty('type', 'file');
  });

  test('template should change background image when input value change', async () => {
    const { getByTestId } = render(<Template />);
  });
});
