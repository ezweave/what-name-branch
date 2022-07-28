import { IssueType } from "@ezweave/types";
import { buildResponse } from "./buildResponse";
import { generateBranchName } from "./generateBranchName";

describe(buildResponse, () => {
  it('builds a random response', () => {
    const branchName = generateBranchName({
      name: 'FOO-420',
      type: IssueType.STORY,
      description: 'you both present sick arguments',
    });

    const response = buildResponse(branchName);
    console.warn(response);
    expect(typeof response).toEqual('string');
  })
})