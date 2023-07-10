import { isYes } from './isYes';

describe(isYes, () => {
  it('returns true if value is "yes"', () => {
    expect(isYes('yes')).toEqual(true);
  });
  it('returns true if value is "YES"', () => {
    expect(isYes('YES')).toEqual(true);
  });
  it('returns false if the value is "no"', () => {
    expect(isYes('no')).toEqual(false);
  });
  it('returns false if the value is "NO"', () => {
    expect(isYes('NO')).toEqual(false);
  });
  it('returns false if the value is not yes', () => {
    expect(isYes('baldhkasdfaklsdfjasd')).toEqual(false);
  });
});
