import { getRandomKey, replaceArrayElementByKey } from '../src/utils';

describe('test utiles function', () => {
  it('random key has default length', () => {
    expect(getRandomKey()).toHaveLength(6);
  });

  it('random key can special width', () => {
    expect(getRandomKey(8)).toHaveLength(8);
  });

  it('random key should different', () => {
    expect(getRandomKey()).not.toBe(getRandomKey());
  });

  it('array replace by key', () => {
    const getWidget = () => {
      const styles = {
        top: '0px',
        left: '0px',
        fontSize: '16px',
        color: '#333333',
        fontWeight: '500',
      };

      const defaultProps = {
        key: getRandomKey(),
        title: '',
        styles,
      };
      return defaultProps;
    };
    const widgets = [getWidget(), getWidget()];
    const newWidget = {
      ...widgets[1],
      styles: { ...widgets[1].styles, top: '200px' },
    };
    const newWidgets = replaceArrayElementByKey(widgets, newWidget);
    expect(newWidgets[1].styles.top).toBe('200px');
  });
});
