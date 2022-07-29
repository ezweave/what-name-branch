import { convertDescription } from './convertDescription';

describe(convertDescription, () => {
  it('converts any description to a git/file safe name', () => {
    expect(
      convertDescription('the S3 notifications are too notify!  how fix? #!@##$'),
    ).toMatchSnapshot();
  });
  it('removes unsafe characters', () => {
    expect(
      convertDescription('issue-name$#!@%$*&))"\''),
    ).toEqual('issue-name');
  });
});
