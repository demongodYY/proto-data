import { getRandomKey } from '../src/utils';

describe('test utiles function', () => {
  test('random key has default length', () => {
    expect(getRandomKey()).toHaveLength(6);
  });

  test('random key can special width', () => {
    expect(getRandomKey(8)).toHaveLength(8);
  });

  test('random key should different', () => {
    expect(getRandomKey()).not.toBe(getRandomKey());
  });
});
