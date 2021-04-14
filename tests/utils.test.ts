import { getRandomKey } from '../src/utils';

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
});
