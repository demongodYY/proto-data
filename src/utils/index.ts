export const getRandomKey = (width = 6) => {
  const randomNum = Math.random();
  return randomNum.toString(16).slice(-1 * width);
};
