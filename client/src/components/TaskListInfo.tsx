import { FC, useState } from "react";
import IconCollapse from "./UI/Icons/IconCollapse";
import EditableText from "../helpers/EditableText";
import { useAppDispatch } from "../hooks/redux";
import {
  createTaskCard,
  deleteTaskList,
  updateTaskList
} from "../store/reducers/ActionCreators";
import { ITaskList } from "../models/TaskList";
import TaskTooltip from "./UI/TaskTooltip";
import BoardButton from "./UI/BoardButton";
import IconTrash from "./UI/Icons/IconTrash";
import IconPlus from "./UI/Icons/IconPlus";
import IconEdit from "./UI/Icons/IconEdit";
import { taskCard } from "../consts/TaskCard";

interface TaskListInfoProps {
  amount: number;
  taskList: ITaskList;
  isNewList: boolean;
}

const TaskListInfo: FC<TaskListInfoProps> = ({
  taskList,
  amount,
  isNewList
}) => {
  const dispatch = useAppDispatch();
  const anchor = `my-anchor-element-task-list-${taskList.id}`;
  const [isEditing, setIsEditing] = useState<boolean>(isNewList);

  const handleUpdateName = (text: string): void => {
    if (text !== taskList.name) {
      dispatch(updateTaskList({ ...taskList, name: text }));
    }
    setIsEditing(false);
  };

  const handleRemoveTaskList = (taskList: ITaskList): void => {
    if (taskList.id) {
      dispatch(deleteTaskList(taskList.id));
    }
  };

  return (
    <div className="flex justify-between items-center py-1 px-4 rounded border-2">
      <EditableText
        isInitialEdit={isEditing}
        initialText={taskList.name}
        styles="w-full"
        onSave={(text: string) => handleUpdateName(text)}
      />
      <section className="flex items-center gap-6">
        {amount > 0 && <p>{amount}</p>}
        <IconCollapse id={anchor} />
        <TaskTooltip anchor={`#${anchor}`}>
          <BoardButton
            styles="w-full hover:bg-gray-300"
            clickHandler={() => setIsEditing(true)}
          >
            <IconEdit />
            Edit
          </BoardButton>
          <BoardButton
            styles="w-full hover:bg-gray-300"
            clickHandler={() =>
              dispatch(createTaskCard({ ...taskCard, taskListId: taskList.id }))
            }
          >
            <IconPlus />
            Add new card
          </BoardButton>
          <BoardButton
            styles="group w-full text-red-600 hover:bg-red-600 hover:text-black"
            clickHandler={() => handleRemoveTaskList(taskList)}
          >
            <IconTrash styles="text-red-600 group-hover:text-black" />
            Delete
          </BoardButton>
        </TaskTooltip>
      </section>
    </div>
  );
};

export default TaskListInfo;
