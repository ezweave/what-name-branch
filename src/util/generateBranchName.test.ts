import { StoryIssueFixture, StoryIssueFixtureWithSpaces } from '../__fixtures__';
import { generateBranchName } from './generateBranchName';

describe(generateBranchName, () => {
  it('generates a branch name, given proper inputs', () => {
    expect(
      generateBranchName(StoryIssueFixture),
    ).toMatchSnapshot();
  });
  it('generates a branch name, trimming spaces', () => {
    expect(
      generateBranchName(StoryIssueFixtureWithSpaces),
    ).toEqual(generateBranchName(StoryIssueFixture));
  });
});
