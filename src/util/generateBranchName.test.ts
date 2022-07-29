import { StoryIssueFixture } from '@ezweave/__fixtures__';
import { generateBranchName } from './generateBranchName';

describe(generateBranchName, () => {
  it('generates a branch name, given proper inputs', () => {
    expect(
      generateBranchName(StoryIssueFixture),
    ).toMatchSnapshot();
  });
});
