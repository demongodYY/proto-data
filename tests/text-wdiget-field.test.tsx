import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextWidgetsField from '../src/Components/TextWidgetField';
import { getRandomKey } from '../src/utils';

describe('test TextWidgetsController', () => {
  let styles: any;
  let mockWidget: any;
  beforeEach(() => {
    styles = {
      top: '0px',
      left: '0px',
      fontSize: '16px',
      color: '#333333',
      fontWeight: '500',
    };

    mockWidget = {
      key: getRandomKey(),
      title: '1',
      styles,
    };
  });

  it('widget props should be change', () => {
    const handleFieldChange = (widget: any) => {
      mockWidget = widget;
    };

    const { getByLabelText } = render(
      <TextWidgetsField
        widget={mockWidget}
        key={mockWidget.key}
        handleFieldChange={handleFieldChange}
      />
    );

    const titleInput = getByLabelText('标题');
    const xInput = getByLabelText('x');
    const yInput = getByLabelText('y');
    const fontInput = getByLabelText('字号');
    const fontWeightInput = getByLabelText('字重');
    const colorInput = getByLabelText('颜色');

    fireEvent.change(titleInput, { target: { value: '测试标题' } });
    expect(mockWidget.title).toBe('测试标题');

    fireEvent.change(xInput, { target: { value: '100px' } });
    expect(mockWidget.styles.left).toBe('100px');
    fireEvent.change(yInput, { target: { value: '200px' } });
    expect(mockWidget.styles.top).toBe('200px');
    fireEvent.change(fontInput, { target: { value: '16px' } });
    expect(mockWidget.styles.fontSize).toBe('16px');
    fireEvent.change(fontWeightInput, { target: { value: '500' } });
    expect(mockWidget.styles.fontWeight).toBe('500');
    fireEvent.change(colorInput, { target: { value: '#dddddd' } });
    expect(mockWidget.styles.color).toBe('#dddddd');
  });
});
