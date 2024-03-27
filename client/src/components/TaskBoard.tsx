import { FC, Fragment, ReactNode, useState } from "react";
import BoardButton from "./UI/BoardButton";
import IconPlus from "./UI/Icons/IconPlus";
import IconReload from "./UI/Icons/IconReload";
import TaskList from "./TaskList";

const TaskBoard: FC = () => {
  const [taskList, setTaskList] = useState<ReactNode[]>([]);

  const createTaskList = (): void => setTaskList([...taskList, <TaskList />]);

  return (
    <div className="px-14 py-8 md:px-24">
      <nav className="flex justify-between flex-col sm:flex-row gap-5 sm:gap-0 items-center">
        <h2 className="text-xl font-bold">My Task board</h2>
        <section className="flex">
          <BoardButton styles="mr-5" clickHandler={createTaskList}>
            <IconReload />
            History
          </BoardButton>
          <BoardButton
            styles="text-white bg-sky-800"
            clickHandler={createTaskList}
          >
            <IconPlus color="white" />
            Create new list
          </BoardButton>
        </section>
      </nav>

      <section className="mt-6 flex gap-4 flex-wrap justify-center sm:justify-start">
        {taskList.map((task, index) => (
          <Fragment key={index}>{task}</Fragment>
        ))}
      </section>
    </div>
  );
};

export default TaskBoard;
