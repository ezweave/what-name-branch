import { getRandomElementFromArray } from "./getRandomElementFromArray";

describe(getRandomElementFromArray, () => {
  it('gets a random element from an array', () => {
    const values = [
      'Homer',
      'Marge',
      'Bart',
      'Lisa',
      'Otto'
    ];

    const getRandomSimpsonsFirstName = getRandomElementFromArray(values);

    const one = getRandomSimpsonsFirstName();
    const two = getRandomSimpsonsFirstName();
    expect(typeof one).toEqual('string')
    expect(typeof two).toEqual('string')
  })
})