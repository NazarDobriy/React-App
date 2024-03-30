import { FC, useState } from "react";
import IconCollapse from "./UI/icons/IconCollapse";
import EditableText from "../helpers/EditableText";
import { useAppDispatch } from "../hooks/redux";
import { updateTaskList } from "../store/reducers/ActionCreators";
import { ITaskList } from "../models/TaskList";
import TaskTooltip from "./UI/TaskTooltip";
import BoardButton from "./UI/BoardButton";
import IconTrash from "./UI/icons/IconTrash";
import IconPlus from "./UI/icons/IconPlus";
import IconEdit from "./UI/icons/IconEdit";

interface TaskListInfoProps {
  amount: number;
  taskList: ITaskList;
  clickAddHandler?: () => void;
  clickRemoveHandler?: () => void;
}

const TaskListInfo: FC<TaskListInfoProps> = ({
  taskList,
  amount,
  clickAddHandler,
  clickRemoveHandler
}) => {
  const dispatch = useAppDispatch();
  const anchor = `my-anchor-element-${taskList.id}`;
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleUpdateName = (text: string): void => {
    if (text !== taskList.name) {
      dispatch(updateTaskList({ ...taskList, name: text }));
    }
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center py-1 px-4 rounded border-2">
      <EditableText
        isInitialEdit={isEditing}
        initialText={taskList.name}
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
            clickHandler={clickAddHandler}
          >
            <IconPlus />
            Add new card
          </BoardButton>
          <BoardButton
            styles="group w-full text-red-600 hover:bg-red-600 hover:text-black"
            clickHandler={clickRemoveHandler}
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
