export type ChangeType =
  | 'CREATE'
  | 'RENAME'
  | 'DESCRIPTION'
  | 'STATUS'
  | 'PRIORITY'
  | 'DUE_DATE'
  | 'DELETE';

export interface ITaskCardHistory {
  id?: number;
  changeType: ChangeType;
  oldValue?: string;
  newValue?: string;
  timestamp: string;
  taskCardId: number;
}