import { FC } from "react";
import IconCollapse from "./UI/Icons/IconCollapse";
import PriorityLabel from "./UI/PriorityLabel";
import DropDown from "./UI/DropDown";
import { ITaskCard } from "../models/TaskCard";
import TaskDatePicker from "./UI/TaskDatePicker";

interface TaskCardProps {
  taskCard: ITaskCard;
}

const TaskCard: FC<TaskCardProps> = ({ taskCard }) => {
  return (
    <div className="flex flex-col gap-3 mt-3 border-2 rounded px-4 py-3 select-none">
      <section className="flex items-center justify-between">
        <h5 className="font-semibold">{taskCard.name}</h5>
        <IconCollapse />
      </section>

      <h5 className="opacity-70">{taskCard.description}</h5>

      <TaskDatePicker disabled={true} />

      <PriorityLabel name={taskCard.priority} />

      <DropDown />
    </div>
  );
};

export default TaskCard;
