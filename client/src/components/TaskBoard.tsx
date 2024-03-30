import { FC, useEffect } from "react";
import BoardButton from "./UI/BoardButton";
import IconPlus from "./UI/icons/IconPlus";
import IconReload from "./UI/icons/IconReload";
import TaskList from "./TaskList";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  fetchTaskLists,
  createTaskList,
  deleteTaskList
} from "../store/reducers/ActionCreators";
import { taskList } from "../consts/TaskList";
import { ITaskList } from "../models/TaskList";

const TaskBoard: FC = () => {
  const dispatch = useAppDispatch();
  const { taskLists } = useAppSelector((state) => state.taskListReducer);

  useEffect(() => {
    dispatch(fetchTaskLists());
  }, [dispatch]);

  const handleRemoveTaskList = (taskList: ITaskList): void => {
    if (taskList.id) {
      dispatch(deleteTaskList(taskList.id));
    }
  };

  return (
    <div className="px-14 py-8 md:px-24">
      <nav className="flex justify-between flex-col sm:flex-row gap-5 sm:gap-0 items-center">
        <h2 className="text-xl font-bold">My Task board</h2>
        <section className="flex">
          <BoardButton
            styles="border-2 mr-5 justify-center"
            clickHandler={() => {}}
          >
            <IconReload />
            History
          </BoardButton>
          <BoardButton
            styles="text-white bg-sky-800 border-2 justify-center"
            clickHandler={() => dispatch(createTaskList(taskList))}
          >
            <IconPlus color="white" />
            Create new list
          </BoardButton>
        </section>
      </nav>

      <section className="mt-6 flex gap-4 flex-wrap justify-center sm:justify-start">
        {taskLists.map((taskList) => (
          <TaskList
            key={taskList.id}
            taskList={taskList}
            clickRemoveHandler={() => handleRemoveTaskList(taskList)}
          />
        ))}
      </section>
    </div>
  );
};

export default TaskBoard;
