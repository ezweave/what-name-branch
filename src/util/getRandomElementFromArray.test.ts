import { getRandomElementFromArray } from './getRandomElementFromArray';

describe(getRandomElementFromArray, () => {
  it('gets a random element from an array', () => {
    const values = [
      'Homer',
      'Marge',
      'Bart',
      'Lisa',
      'Otto',
    ];

    const one = getRandomElementFromArray(values);
    const two = getRandomElementFromArray(values);
    expect(typeof one).toEqual('string');
    expect(typeof two).toEqual('string');
  });
});
