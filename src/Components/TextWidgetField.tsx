import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { TextField } from '@material-ui/core';
import { ITextWidget } from './TextWidget';

interface ITextWidgetsFiled {
  widget: ITextWidget;
  handleFieldChange: (newWidget: ITextWidget) => void;
}

export default (props: ITextWidgetsFiled) => {
  const { widget, handleFieldChange } = props;
  const { key, title, styles } = widget;

  const onStyleFieldChange = (key: string) => (
    evt: ChangeEvent<HTMLInputElement>
  ) => {
    const value = evt.target.value;
    const newStyles = { ...widget.styles, [key]: value };
    const newWidget = { ...widget, styles: newStyles };
    handleFieldChange(newWidget);
  };

  const onTitleFieldChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const title = evt.target.value;
    const newWidget = { ...widget, title };
    handleFieldChange(newWidget);
  };

  return (
    <div>
      <TextField
        label="标题"
        value={title}
        id={`${key}-title`}
        onChange={onTitleFieldChange}
      />
      <TextField
        label="x"
        value={styles.left}
        onChange={onStyleFieldChange('left')}
        id={`${key}-left`}
      />
      <TextField
        label="y"
        value={styles.top}
        id={`${key}-top`}
        onChange={onStyleFieldChange('top')}
      />
      <TextField
        label="字号"
        value={styles.fontSize}
        id={`${key}-font`}
        onChange={onStyleFieldChange('fontSize')}
      />
      <TextField
        label="字重"
        value={styles.fontWeight}
        id={`${key}-weight`}
        onChange={onStyleFieldChange('fontWeight')}
      />
      <TextField
        label="颜色"
        value={styles.color}
        id={`${key}-color`}
        onChange={onStyleFieldChange('color')}
      />
    </div>
  );
};
