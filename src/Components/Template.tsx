import React, { useState, ChangeEventHandler } from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '@material-ui/core';
import TextWidget, { ITextWidget } from './TextWidget';
import TemplateController from './TemplateContoller';
import TextWidgetField from './TextWidgetField';
import { replaceArrayElementByKey, getDefaultTextWidgetProps } from '../utils';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  template: {
    width: (props: any) => props.width,
    height: (props: any) => props.height,
    backgroundColor: '#dddddd',
    position: 'relative',
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
});

export default () => {
  const [templateWidth, setWidth] = useState(300);
  const [templateHeight, setHeight] = useState(500);
  const [templateBg, setBg] = useState('');
  const [widgets, setWidgets] = useState([] as ITextWidget[]);

  const templateProps = { width: templateWidth, height: templateHeight };

  const classes = useStyles(templateProps);

  const handleWidthChange: ChangeEventHandler<HTMLInputElement> = (evt) =>
    setWidth(Number(evt.target.value));

  const handleHeightChange: ChangeEventHandler<HTMLInputElement> = (evt) =>
    setHeight(Number(evt.target.value));

  const handleBgChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const reader = new FileReader();
    reader.onload = () => setBg(reader.result as string);
    if (evt.target.files) reader.readAsDataURL(evt.target.files[0]);
  };

  const handleWidgetAdd = () => {
    setWidgets([...widgets, getDefaultTextWidgetProps()]);
  };

  const handleFieldChange = (newWidget: ITextWidget) => {
    const newWidgets = replaceArrayElementByKey(widgets, newWidget);
    setWidgets(newWidgets);
  };

  return (
    <div className={classes.container}>
      <div className={classes.template} data-testid="template">
        {templateBg ? (
          <img
            className={classes.bgImg}
            src={templateBg}
            alt="template-bg-img"
          />
        ) : null}
        {widgets.map((widget) => {
          const { title, key, styles } = widget;
          return <TextWidget title={title} key={key} styles={styles} />;
        })}
      </div>

      <TemplateController
        templateWidth={templateWidth}
        templateHeight={templateHeight}
        handleWidthChange={handleWidthChange}
        handleHeightChange={handleHeightChange}
        handleBgChange={handleBgChange}
      />
      <div className="text-widgets-controller">
        <Button
          data-testid="textWidgetAdd"
          onClick={handleWidgetAdd}
          variant="contained"
          color="primary"
          component="span"
        >
          添加文字组件
        </Button>
        {widgets.map((widget) => (
          <TextWidgetField
            key={widget.key}
            widget={widget}
            handleFieldChange={handleFieldChange}
          />
        ))}
      </div>
    </div>
  );
};
