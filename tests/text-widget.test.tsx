import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextWidget from '../src/Components/TextWidget';

describe('text widget test', () => {
  it('widget should has a title', () => {
    const { getByTitle } = render(<TextWidget title="testTitle" styles={{}} />);
    expect(getByTitle('testTitle')).toBeInTheDocument();
  });

  it('widget should be absolute position', () => {
    const { getByTitle } = render(<TextWidget title="testTitle" styles={{}} />);
    expect(getByTitle('testTitle')).toHaveStyle({ position: 'absolute' });
  });

  it('widget should change style when props change', () => {
    const styles = {
      top: '100px',
      left: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'red',
    };
    const { getByTitle } = render(
      <TextWidget title="testTitle" styles={styles} />
    );
    expect(getByTitle('testTitle')).toHaveStyle(styles);
  });

  it('widget should have a placeholder', () => {
    const { getByTitle } = render(
      <TextWidget title="testTitle" styles={{}} placeholder="测试" />
    );
    expect(getByTitle('testTitle')).toHaveTextContent('测试');
  });
});
