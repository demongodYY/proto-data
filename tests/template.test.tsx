import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByTitle,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Template from '../src/Components/Template';

describe('test template component', () => {
  it('template should be exist', () => {
    const { getByTestId } = render(<Template />);
    expect(getByTestId('template')).toHaveStyle({
      width: '300px',
      height: '500px',
      'background-color': '#dddddd',
    });
  });

  it('template should has two input to change style', () => {
    const { getByLabelText } = render(<Template />);
    expect(getByLabelText('宽度')).toHaveValue(300);
    expect(getByLabelText('高度')).toHaveValue(500);
  });

  it('template should change style when input value change', async () => {
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

  it('template should has input to upload image', async () => {
    const { getByTestId } = render(<Template />);
    const inputBtn = getByTestId('bgChange');
    fireEvent.click(inputBtn);
    expect(getByTestId('template-bg')).toHaveProperty('type', 'file');
  });

  it('template should change background image when input value change', async () => {
    const { getByTestId, getByAltText } = render(<Template />);
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const imageInput = getByTestId('template-bg');
    fireEvent.change(imageInput, { target: { files: [file] } });
    await waitFor(() => getByAltText('template-bg-img'));
    const bgImg = getByAltText('template-bg-img') as HTMLImageElement;
    expect(bgImg.src).toMatchSnapshot('(⌐□_□)');
    expect(bgImg).toHaveStyle({ width: '100%', height: '100%' });
  });

  it('template should has a btn to add text widget', async () => {
    const { getByTestId, getByText } = render(<Template />);
    const TextWidgetAddBtn = getByTestId('textWidgetAdd');
    fireEvent.click(TextWidgetAddBtn);
    expect(getByText('占位文字')).toBeInTheDocument();
  });
});
