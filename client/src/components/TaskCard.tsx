import { FC } from "react";
import IconCollapse from "./UI/icons/IconCollapse";
import PriorityLabel from "./UI/PriorityLabel";
import DropDown from "./UI/DropDown";
import { ITaskCard } from "../models/TaskCard";
import TaskDatePicker from "./UI/TaskDatePicker";
import TaskTooltip from "./UI/TaskTooltip";
import BoardButton from "./UI/BoardButton";
import IconEdit from "./UI/icons/IconEdit";
import IconTrash from "./UI/icons/IconTrash";
import { useAppDispatch } from "../hooks/redux";
import { deleteTaskCard } from "../store/reducers/ActionCreators";

interface TaskCardProps {
  taskCard: ITaskCard;
}

const TaskCard: FC<TaskCardProps> = ({ taskCard }) => {
  const dispatch = useAppDispatch();
  const anchor = `my-anchor-element-task-card-${taskCard.id}`;

  const handleRemoveTaskCard = (): void => {
    if (taskCard.id) {
      dispatch(deleteTaskCard(taskCard.id));
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-3 border-2 rounded px-4 py-3 select-none">
      <section className="flex items-center justify-between">
        <h5 className="font-semibold">{taskCard.name}</h5>
        <IconCollapse id={anchor} />
      </section>

      <TaskTooltip anchor={`#${anchor}`}>
        <BoardButton styles="w-full hover:bg-gray-300">
          <IconEdit />
          Edit
        </BoardButton>
        <BoardButton
          styles="group w-full text-red-600 hover:bg-red-600 hover:text-black"
          clickHandler={handleRemoveTaskCard}
        >
          <IconTrash styles="text-red-600 group-hover:text-black" />
          Delete
        </BoardButton>
      </TaskTooltip>

      <h5 className="opacity-70">{taskCard.description}</h5>

      <TaskDatePicker disabled={true} />

      <PriorityLabel name={taskCard.priority} />

      <DropDown />
    </div>
  );
};

export default TaskCard;
