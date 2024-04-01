import { FC } from "react";
import { ITaskCardHistory } from "../models/TaskCardHistory";
import DateFormat from "../helpers/DateFormat";

interface TaskActivityLoggerProps {
  taskCardHistory: ITaskCardHistory;
}

const TaskActivityLogger: FC<TaskActivityLoggerProps> = ({
  taskCardHistory
}) => {
  const text =
    taskCardHistory.changeType === "CREATE" ? (
      <span className="max-w-60">You created this task</span>
    ) : taskCardHistory.changeType === "RENAME" ? (
      <span className="max-w-60">
        You renamed this task from <span className="bullet-icon">&#9679;</span>{" "}
        {taskCardHistory.oldValue} to{" "}
        <span className="bullet-icon">&#9679;</span> {taskCardHistory.newValue}
      </span>
    ) : taskCardHistory.changeType === "DESCRIPTION" ? (
      <span className="max-w-60">
        You changed description of this task from{" "}
        <span className="bullet-icon">&#9679;</span> {taskCardHistory.oldValue}{" "}
        to <span className="bullet-icon">&#9679;</span>{" "}
        {taskCardHistory.newValue}
      </span>
    ) : taskCardHistory.changeType === "PRIORITY" ? (
      <span className="max-w-60">
        You changed priority of this task from{" "}
        <span className="bullet-icon">&#9679;</span> {taskCardHistory.oldValue}{" "}
        to <span className="bullet-icon">&#9679;</span>{" "}
        {taskCardHistory.newValue}
      </span>
    ) : taskCardHistory.changeType === "STATUS" ? (
      <span className="max-w-60">
        You changed status of this task from{" "}
        <span className="bullet-icon">&#9679;</span> {taskCardHistory.oldValue}{" "}
        to <span className="bullet-icon">&#9679;</span>{" "}
        {taskCardHistory.newValue}
      </span>
    ) : taskCardHistory.changeType === "DUE_DATE" ? (
      <span className="max-w-60">
        You changed date of this task from{" "}
        <span className="bullet-icon">&#9679;</span> {taskCardHistory.oldValue}{" "}
        to <span className="bullet-icon">&#9679;</span>
        {taskCardHistory.newValue}
      </span>
    ) : (
      "Unknown activity"
    );

  return (
    <ul className="mt-5">
      <li className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-2 h-2 relative top-[1px] bg-gray-500 rounded-full mr-2"></div>
          {text}
        </div>
        <DateFormat date={new Date(taskCardHistory.timestamp)} />
      </li>
    </ul>
  );
};

export default TaskActivityLogger;
