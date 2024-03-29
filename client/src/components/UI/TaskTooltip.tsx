import { FC, ReactNode } from "react";
import { Tooltip } from "react-tooltip";

interface TaskTooltipProps {
  anchor: string;
  children: ReactNode;
}

const TaskTooltip: FC<TaskTooltipProps> = ({ anchor, children }) => {
  return (
    <Tooltip
      anchorSelect={anchor}
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(0, 0, 0)",
        width: "240px"
      }}
      place="bottom-start"
      border="2px solid #e5e7eb"
      clickable
      delayHide={500}
    >
      {children}
    </Tooltip>
  );
};

export default TaskTooltip;
