import { FC, Fragment, ReactNode, useState } from "react";
import TaskListInfo from "./TaskListInfo";
import BoardButton from "./UI/BoardButton";
import IconPlus from "./UI/Icons/IconPlus";
import TaskCard from "./TaskCard";
import { ITaskList } from "../models/TaskList";

interface TaskListProps {
  taskList: ITaskList;
  clickRemoveHandler?: () => void;
}

const TaskList: FC<TaskListProps> = ({ taskList, clickRemoveHandler }) => {
  const [taskCards, setTaskCards] = useState<ReactNode[]>([]);

  const createTaskCard = (): void => {
    setTaskCards([...taskCards, <TaskCard />]);
  };

  return (
    <div className="w-64">
      <TaskListInfo
        taskList={taskList}
        amount={taskCards.length}
        clickAddHandler={createTaskCard}
        clickRemoveHandler={clickRemoveHandler}
      />

      <BoardButton
        styles="w-full mt-3 border-dashed border-2 justify-center"
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
