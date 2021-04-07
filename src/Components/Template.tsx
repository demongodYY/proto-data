import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Input, InputLabel, Button, TextField } from '@material-ui/core';

export default () => {
  const [templateWidth, setWidth] = useState(300);
  const [templateHeight, setHeight] = useState(500);
  const [templateBg, setBg] = '';

  const useStyles = createUseStyles({
    container: {
      width: (props: any) => props.width,
      height: (props: any) => props.height,
      backgroundColor: '#dddddd',
    },
    fileInput: {
      display: 'none',
    },
  });
  const templateProps: any = { width: templateWidth, height: templateHeight };

  const classes = useStyles(templateProps);

  const handleWidthChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(evt.target.value));
  };

  const handleHeightChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(evt.target.value));
  };

  return (
    <div className={classes.container} data-testid="template">
      <TextField
        label="宽度"
        type="number"
        id="template-width"
        value={templateWidth}
        onChange={handleWidthChange}
      />

      <TextField
        label="高度"
        type="number"
        id="template-height"
        value={templateHeight}
        onChange={handleHeightChange}
      />

      <InputLabel htmlFor="template-bg">
        <Button variant="contained" color="primary" component="span">
          上传背景
        </Button>
        <input
          className={classes.fileInput}
          type="file"
          id="template-bg"
          data-testid="template-bg"
          accept="image/*"
          onChange={(evt) => {
            console.log(evt.target.value);
          }}
        />
      </InputLabel>
    </div>
  );
};
