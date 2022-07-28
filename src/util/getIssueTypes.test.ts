import { getIssueTypes } from './getIssueTypes';

describe(getIssueTypes, () => {
  it('turns the IssueType enum into an array', () => {
    expect(getIssueTypes()).toMatchSnapshot();
  });
});
