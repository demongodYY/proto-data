import React from 'react';
import { createUseStyles } from 'react-jss';

interface ITextWidget {
  title: string;
  styles?: any;
  placeholder?: string;
}

const useStyles = createUseStyles({
  'widget-wrapper': (props: any) => {
    return {
      position: 'absolute',
      ...props,
    };
  },
});

export default (props: ITextWidget) => {
  const { title, styles = {}, placeholder = '占位文字' } = props;
  const classes = useStyles(styles);
  return (
    <div className={classes['widget-wrapper']} title={title}>
      {placeholder}
    </div>
  );
};
