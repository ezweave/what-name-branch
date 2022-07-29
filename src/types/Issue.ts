import { IssueType } from './IssueType';

export interface Issue {
  description: string,
  name: string,
  type: IssueType,
}
