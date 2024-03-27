import { FC } from "react";
import IconCollapse from "./UI/Icons/IconCollapse";
import EditableText from "../helpers/EditableText";

interface TaskListInfoProps {
  amount: number;
}

const TaskListInfo: FC<TaskListInfoProps> = ({ amount }) => {
  return (
    <div className="flex justify-between items-center py-1 px-4 rounded border-2">
      <EditableText initialText="Untitled" onSave={() => {}} />
      <section className="flex items-center gap-6">
        {amount > 0 && <p>{amount}</p>}
        <IconCollapse />
      </section>
    </div>
  );
};

export default TaskListInfo;
