export type PriorityLabelType = "Low" | "Medium" | "High";

export interface ITaskCard {
  id?: number;
  name: string;
  description: string;
  dueDate: Date;
  priority: PriorityLabelType;
  taskListId?: number;
}
