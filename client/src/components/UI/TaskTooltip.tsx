import { FC, ReactNode, useState } from "react";
import { Tooltip } from "react-tooltip";

interface TaskTooltipProps {
  anchor: string;
  children: ReactNode;
}

const TaskTooltip: FC<TaskTooltipProps> = ({ anchor, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      clickable
    >
      <div onClick={() => setIsOpen(false)}>{children}</div>
    </Tooltip>
  );
};

export default TaskTooltip;
