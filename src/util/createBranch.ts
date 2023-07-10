import { execSync } from 'child_process';

interface ExecSync {
  (command: string): Buffer;
}

export interface CreateBranch {
  (execSyncFunction?: ExecSync): (name: string) => string;
}

export const createBranch: CreateBranch = (execSyncFunction = execSync) => (name) => {
  return execSyncFunction(`git checkout -b ${name}`).toString();
};
