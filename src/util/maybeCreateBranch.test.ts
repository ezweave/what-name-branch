import { maybeCreateBranch } from './maybeCreateBranch';

describe(maybeCreateBranch, () => {
  it('creates the branch if yes', () => {
    const mockCreateBranchFunction = jest.fn();
    const branchName = 'branch-name';
    maybeCreateBranch(() => mockCreateBranchFunction)('yes', branchName);
    expect(mockCreateBranchFunction).toHaveBeenCalledWith(branchName);
  });
  it('does not create the branch if no', () => {
    const mockCreateBranchFunction = jest.fn();
    const branchName = 'branch-name';
    const response = maybeCreateBranch(() => mockCreateBranchFunction)('no', branchName);
    expect(response).toEqual(false);
    expect(mockCreateBranchFunction).toHaveBeenCalledTimes(0);
  });
});
