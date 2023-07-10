import { createBranch } from './createBranch';

describe(createBranch, () => {
  it('should create a branch with no problems', () => {
    const name = 'foo';
    const mockExec = jest.fn().mockImplementation(() => {
      return `Switched to a new branch '${name}'`;
    });
    expect(createBranch(mockExec)(name)).toMatchSnapshot();
  });
  it('should throw an error for an invalid branch name', async () => {
    const name = '...asdf';
    const mockExec = jest.fn().mockImplementation(() => {
      throw new Error(`fatal: '${name}' is not a valid branch name`);
    });
    expect(() => createBranch(mockExec)(name)).toThrowErrorMatchingSnapshot();
  });
});
