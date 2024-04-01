export type PriorityLabelType = "Low" | "Medium" | "High";
export type StatusType = 'To do' | 'Planned' | 'In process' | 'Closed';

export interface ITaskCard {
  id?: number;
  name: string;
  description: string;
  dueDate: Date;
  priority: PriorityLabelType;
  status: StatusType;
  taskListId?: number;
}
