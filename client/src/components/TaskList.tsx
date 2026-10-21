import { FC } from "react";
import TaskListInfo from "./TaskListInfo";
import BoardButton from "./UI/BoardButton";
import IconPlus from "./UI/Icons/IconPlus";
import TaskCard from "./TaskCard";
import { ITaskList } from "../models/TaskList";
import { useAppDispatch } from "../hooks/redux";
import { createTaskCard } from "../store/reducers/ActionCreators";
import { taskCard } from "../consts/TaskCard";

interface TaskListProps {
  taskList: ITaskList;
  taskLists: ITaskList[];
  isNewList: boolean;
}

const TaskList: FC<TaskListProps> = ({ taskList, taskLists, isNewList }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-64">
      <TaskListInfo
        taskList={taskList}
        isNewList={isNewList}
        amount={taskList.taskCards.length}
      />

      <BoardButton
        styles="w-full mt-3 border-dashed border-2 justify-center"
        clickHandler={() =>
          dispatch(createTaskCard({ ...taskCard, taskListId: taskList.id }))
        }
      >
        <IconPlus />
        Add new card
      </BoardButton>

      {taskList.taskCards.map((taskCard) => (
        <TaskCard key={taskCard.id} taskCard={taskCard} taskLists={taskLists} />
      ))}
    </div>
  );
};

export default TaskList;
