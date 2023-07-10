import { processAnswers } from './processAnswers';

describe(processAnswers, () => {
  it('generates a response and creates the branch if appropriate', () => {
    const branchName = 'bug/foo-123/this-is-a-description';
    const mockLog = jest.fn();
    const mockMaybeCreateBranch = jest.fn().mockReturnValue(`Switched to a new branch '${branchName}'`);
    const mockGenerateBranchName = jest.fn().mockReturnValue(branchName);
    const response = processAnswers({
      description: 'This is a description',
      name: 'FOO-123',
      type: 'BUG',
      create: 'YES',
    }, mockLog, mockMaybeCreateBranch, mockGenerateBranchName);

    expect(typeof response).toEqual('string');
    expect(mockMaybeCreateBranch).toHaveBeenCalledWith('YES', branchName);
  });
  it('generates a response and does not create the branch if appropriate', () => {
    const branchName = 'bug/foo-123/this-is-a-description';
    const mockLog = jest.fn();
    const mockMaybeCreateBranch = jest.fn().mockReturnValue(`Switched to a new branch '${branchName}'`);
    const mockGenerateBranchName = jest.fn().mockReturnValue(branchName);
    const response = processAnswers({
      description: 'This is a description',
      name: 'FOO-123',
      type: 'BUG',
      create: 'NO',
    }, mockLog, mockMaybeCreateBranch, mockGenerateBranchName);

    expect(typeof response).toEqual('string');
    expect(mockMaybeCreateBranch).toHaveBeenCalledWith('NO', branchName);
  });
});
