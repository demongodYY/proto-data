import React from 'react';
import { createUseStyles } from 'react-jss';

export interface ITextWidget {
  key?: string;
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
  const { title, styles = {} } = props;
  const classes = useStyles(styles);
  return (
    <div className={classes['widget-wrapper']} title={title}>
      {title}
    </div>
  );
};
