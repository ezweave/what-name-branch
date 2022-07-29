import { StoryIssueFixture } from '../__fixtures__';
import { generateBranchNameAndResponse } from './generateBranchNameAndResponse';

describe(generateBranchNameAndResponse, () => {
  it('generates a branch name and builds a response', () => {
    expect(
      typeof generateBranchNameAndResponse(StoryIssueFixture),
    ).toEqual('string');
  });
});
