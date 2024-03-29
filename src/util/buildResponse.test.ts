import { buildResponse } from './buildResponse';

describe(buildResponse, () => {
  it('builds a random response', () => {
    const branchName = 'spike/FOO-123/this-is-a-description';

    const response = buildResponse(branchName);
    console.warn(response);
    expect(typeof response).toEqual('string');
  });
  it('builds a random without a branch name', () => {
    const response = buildResponse('branch created', false);
    console.warn(response);
    expect(typeof response).toEqual('string');
  });
});
