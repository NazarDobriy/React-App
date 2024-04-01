import { FC, useState } from "react";
import IconCollapse from "./UI/icons/IconCollapse";
import PriorityLabel from "./UI/PriorityLabel";
import DropDown from "./UI/DropDown";
import { ITaskCard } from "../models/TaskCard";
import TaskDatePicker from "./UI/TaskDatePicker";
import TaskTooltip from "./UI/TaskTooltip";
import BoardButton from "./UI/BoardButton";
import IconEdit from "./UI/icons/IconEdit";
import IconTrash from "./UI/icons/IconTrash";
import { useAppDispatch } from "../hooks/redux";
import {
  createTaskCard,
  deleteTaskCard
} from "../store/reducers/ActionCreators";
import IconCalendar from "./UI/icons/IconCalendar";
import { ITaskList } from "../models/TaskList";
import TaskEditModal from "./UI/TaskEditModal";
import TaskEditContent from "./TaskEditContent";
import ActivityEditContent from "./ActivityEditContent";

interface TaskCardProps {
  taskCard: ITaskCard;
  taskLists: ITaskList[];
}

const TaskCard: FC<TaskCardProps> = ({ taskCard, taskLists }) => {
  const dispatch = useAppDispatch();
  const anchor = `my-anchor-element-task-card-${taskCard.id}`;
  const [modal, setModal] = useState<boolean>(false);

  const handleRemoveTaskCard = (): void => {
    if (taskCard.id) {
      dispatch(deleteTaskCard(taskCard.id));
    }
  };

  const handleMoveTaskCard = (taskListId: number | undefined): void => {
    handleRemoveTaskCard();
    if (taskListId) {
      dispatch(
        createTaskCard({
          taskListId,
          name: taskCard.name,
          description: taskCard.description,
          dueDate: taskCard.dueDate,
          priority: taskCard.priority,
          status: taskCard.status
        })
      );
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-3 border-2 rounded px-4 py-3 select-none">
      <section className="flex items-center justify-between">
        <h5 className="font-semibold">{taskCard.name}</h5>
        <IconCollapse id={anchor} />
      </section>

      <TaskTooltip anchor={`#${anchor}`}>
        <BoardButton
          styles="w-full hover:bg-gray-300"
          clickHandler={() => setModal(true)}
        >
          <IconEdit />
          Edit
        </BoardButton>
        <BoardButton
          styles="group w-full text-red-600 hover:bg-red-600 hover:text-black"
          clickHandler={handleRemoveTaskCard}
        >
          <IconTrash styles="text-red-600 group-hover:text-black" />
          Delete
        </BoardButton>
      </TaskTooltip>

      <TaskEditModal visible={modal} setVisible={setModal}>
        <section className="flex justify-between">
          <TaskEditContent taskCard={taskCard} />
          <ActivityEditContent taskCard={taskCard} />
        </section>
      </TaskEditModal>

      <h5 className="opacity-70">{taskCard.description}</h5>

      <section className="flex">
        <IconCalendar />
        <TaskDatePicker styles="ml-3" disabled={true} />
      </section>

      <PriorityLabel name={taskCard.priority} />

      <DropDown>
        {taskLists
          .filter((taskList) => taskList.id !== taskCard.taskListId)
          .map((taskList) => (
            <div
              key={taskList.id}
              className="hover:bg-gray-400 py-1 px-2 rounded"
              onClick={() => handleMoveTaskCard(taskList.id)}
            >
              {taskList.name}
            </div>
          ))}
      </DropDown>
    </div>
  );
};

export default TaskCard;
