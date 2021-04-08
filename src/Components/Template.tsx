import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { InputLabel, Button, TextField } from '@material-ui/core';

export default () => {
  const [templateWidth, setWidth] = useState(300);
  const [templateHeight, setHeight] = useState(500);
  const [templateBg, setBg] = useState('');

  const useStyles = createUseStyles({
    container: {
      width: (props: any) => props.width,
      height: (props: any) => props.height,
      backgroundColor: '#dddddd',
      position: 'relative',
    },
    fileInput: {
      display: 'none',
    },
    bgImg: {
      width: '100%',
      height: '100%',
    },
    controller: {
      position: 'absolute',
      right: '-200px',
      top: '0',
      display: 'flex',
      flexDirection: 'column',
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

  const handleBgChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => setBg(reader.result as string),
      false
    );
    if (evt.target.files) {
      reader.readAsDataURL(evt.target.files[0]);
    }
  };

  return (
    <div className={classes.container} data-testid="template">
      {templateBg ? (
        <img className={classes.bgImg} src={templateBg} alt="template-bg-img" />
      ) : null}
      <div className={classes.controller}>
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
            onChange={handleBgChange}
          />
        </InputLabel>
      </div>
    </div>
  );
};
