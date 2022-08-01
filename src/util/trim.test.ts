import { trim } from './trim';

describe(trim, () => {
  it('trims a string', () => {
    expect(
      trim(' foo      '),
    ).toEqual('foo');
  });
});
