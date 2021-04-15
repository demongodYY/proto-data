export const getRandomKey = (width = 6) => {
  const randomNum = Math.random();
  return randomNum.toString(16).slice(-1 * width);
};

export const replaceArrayElementByKey = (oldArray: any[], element: any) => {
  return oldArray.map((e) => (e.key === element.key ? element : e));
};

export const getDefaultTextWidgetProps = () => {
  const styles = {
    top: '0px',
    left: '0px',
    fontSize: '16px',
    color: '#333333',
    fontWeight: '500',
  };
  const defaultProps = {
    key: getRandomKey(),
    title: '占位文字',
    styles,
  };

  return defaultProps;
};
