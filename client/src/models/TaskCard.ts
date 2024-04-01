import { ITaskCardHistory } from "./TaskCardHistory";

export type PriorityLabelType = "Low" | "Medium" | "High";
export type StatusType = 'To do' | 'Planned' | 'In process' | 'Closed';

export interface ITaskCard {
  id?: number;
  name: string;
  description: string;
  dueDate?: string;
  priority: PriorityLabelType;
  status: StatusType;
  taskCardHistories?: ITaskCardHistory[];
  taskListId?: number;
}
