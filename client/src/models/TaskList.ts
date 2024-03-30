import { ITaskCard } from "./TaskCard";

export interface ITaskList {
  id?: number;
  name: string;
  taskCards: ITaskCard[];
}
