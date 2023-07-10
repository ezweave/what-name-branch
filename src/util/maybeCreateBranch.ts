import { CreateBranch, createBranch } from './createBranch';
import { isYes } from './isYes';

export interface MaybeCreateBranch {
  (create: string, branchName: string): string | false
}

export const maybeCreateBranch = (
  createBranchFunc: CreateBranch = createBranch,
): MaybeCreateBranch => (create, branchName) => isYes(create) && createBranchFunc()(branchName);
