import React from 'react';
import { createUseStyles } from 'react-jss';
import { InputLabel, Button, TextField } from '@material-ui/core';

interface ITemplateController {
  templateWidth: number;
  handleWidthChange: React.ChangeEventHandler;
  templateHeight: number;
  handleHeightChange: React.ChangeEventHandler;
  handleBgChange: React.ChangeEventHandler;
}

const useStyles = createUseStyles({
  controller: {
    display: 'flex',
    flexDirection: 'column',
  },
  fileInput: {
    display: 'none',
  },
});

export default (props: ITemplateController) => {
  const {
    templateWidth,
    templateHeight,
    handleWidthChange,
    handleHeightChange,
    handleBgChange,
  } = props;
  const classes = useStyles();
  return (
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
        <Button
          variant="contained"
          color="primary"
          component="span"
          data-testid="bgChange"
        >
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
  );
};
