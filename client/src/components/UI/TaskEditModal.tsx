import { FC, ReactNode, MouseEvent } from "react";
import IconClose from "./icons/IconClose";

interface TaskEditModalProps {
  children: ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const TaskEditModal: FC<TaskEditModalProps> = ({
  children,
  visible,
  setVisible
}) => {
  return visible ? (
    <section
      className="flex fixed top-0 bottom-0 left-0 right-0 bg-black/50 justify-center items-center z-20"
      onClick={() => setVisible(false)}
    >
      <div
        className="bg-white w-[1050px] select-text rounded-xl"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center h-10 pr-4 bg-sky-800 rounded-t-xl">
          <IconClose color="white" clickHandler={() => setVisible(false)} />
        </div>
        {children}
      </div>
    </section>
  ) : null;
};

export default TaskEditModal;
