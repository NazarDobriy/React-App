import { FC, Fragment, ReactNode, useState } from "react";
import TaskListInfo from "./TaskListInfo";
import BoardButton from "./UI/BoardButton";
import IconPlus from "./UI/Icons/IconPlus";
import TaskCard from "./TaskCard";
import { ITaskList } from "../models/TaskList";

interface TaskListProps {
  taskList: ITaskList;
}

const TaskList: FC<TaskListProps> = ({ taskList }) => {
  const [taskCards, setTaskCards] = useState<ReactNode[]>([]);

  const createTaskCard = (): void => setTaskCards([...taskCards, <TaskCard />]);

  return (
    <div className="w-64">
      <TaskListInfo taskList={taskList} amount={taskCards.length} />

      <BoardButton
        styles="w-full mt-3 border-dashed"
        clickHandler={createTaskCard}
      >
        <IconPlus />
        Add new card
      </BoardButton>

      {taskCards.map((card, index) => (
        <Fragment key={index}>{card}</Fragment>
      ))}
    </div>
  );
};

export default TaskList;
