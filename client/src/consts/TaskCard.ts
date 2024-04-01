import { ITaskCard } from "../models/TaskCard";

export const taskCard: ITaskCard = {
  name: "Task name",
  description: "Default description",
  dueDate: new Date().toISOString(),
  priority: "Low",
  status: "To do"
};
