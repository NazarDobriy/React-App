import { FC } from "react";
import IconCollapse from "./UI/Icons/IconCollapse";
import EditableText from "../helpers/EditableText";
import { useAppDispatch } from "../hooks/redux";
import { updateTaskList } from "../store/reducers/ActionCreators";
import { ITaskList } from "../models/TaskList";

interface TaskListInfoProps {
  amount: number;
  taskList: ITaskList;
}

const TaskListInfo: FC<TaskListInfoProps> = ({ taskList, amount }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center py-1 px-4 rounded border-2">
      <EditableText
        initialText={taskList.name}
        onSave={(text: string) => {
          dispatch(updateTaskList({ ...taskList, name: text }));
        }}
      />
      <section className="flex items-center gap-6">
        {amount > 0 && <p>{amount}</p>}
        <IconCollapse />
      </section>
    </div>
  );
};

export default TaskListInfo;
