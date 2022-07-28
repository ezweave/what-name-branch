import { StoryIssueFixture } from '@ezweave/__fixtures__';
import { buildResponse } from './buildResponse';
import { generateBranchName } from './generateBranchName';

describe(buildResponse, () => {
  it('builds a random response', () => {
    const branchName = generateBranchName(StoryIssueFixture);

    const response = buildResponse(branchName);
    console.warn(response);
    expect(typeof response).toEqual('string');
  });
});
