import { IssueType } from '@ezweave/types';
import { generateBranchName } from './generateBranchName';

describe(generateBranchName, () => {
  it('generates a branch name, given proper inputs', () => {
    expect(
      generateBranchName({
        description: 'We\'ve got this terrible defect',
        name: 'MYPROJECT-1',
        type: IssueType.BUG,
      }),
    ).toMatchSnapshot();
  });
});
