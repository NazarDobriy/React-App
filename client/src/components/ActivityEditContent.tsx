import { FC } from "react";
import { ITaskCard } from "../models/TaskCard";
import TaskActivityLogger from "./TaskActivityLogger";

interface ActivityEditContentProps {
  taskCard: ITaskCard;
}

const ActivityEditContent: FC<ActivityEditContentProps> = ({ taskCard }) => {
  return (
    <div className="bg-gray-300 p-7 rounded-b-xl rounded-l-none w-[40%] h-[523px] overflow-y-auto">
      <h5 className="text-lg font-bold">Activity</h5>
      {taskCard.taskCardHistories?.map((taskCardHistory) => (
        <TaskActivityLogger taskCardHistory={taskCardHistory} />
      ))}
    </div>
  );
};

export default ActivityEditContent;
