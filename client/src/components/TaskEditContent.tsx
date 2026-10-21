import { FC, useState } from "react";
import { ITaskCard, PriorityLabelType, StatusType } from "../models/TaskCard";
import BoardButton from "./UI/BoardButton";
import IconEdit from "./UI/Icons/IconEdit";
import IconTarget from "./UI/Icons/IconTarget";
import IconCalendar from "./UI/Icons/IconCalendar";
import TaskDatePicker from "./UI/TaskDatePicker";
import IconTag from "./UI/Icons/IconTag";
import ListSelect from "./UI/ListSelect";
import { useAppDispatch } from "../hooks/redux";
import { updateTaskCard } from "../store/reducers/ActionCreators";
import EditableText from "../helpers/EditableText";

interface TaskEditContentProps {
  taskCard: ITaskCard;
}

const TaskEditContent: FC<TaskEditContentProps> = ({ taskCard }) => {
  const dispatch = useAppDispatch();
  const priorityOptions = ["Low", "Medium", "High"];
  const statusOptions = ["To do", "Planned", "In process", "Closed"];
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleUpdateTaskName = (name: string): void => {
    if (name !== taskCard.name) {
      dispatch(updateTaskCard({ ...taskCard, name }));
    }
  };

  const handleUpdateTaskCardStatus = (status: string): void => {
    if (status !== taskCard.status) {
      dispatch(
        updateTaskCard({
          ...taskCard,
          status: status as StatusType
        })
      );
    }
  };

  const handleUpdateTaskCardPriority = (priority: string): void => {
    if (priority !== taskCard.priority) {
      dispatch(
        updateTaskCard({
          ...taskCard,
          priority: priority as PriorityLabelType
        })
      );
    }
  };

  const handleUpdateTaskCardDescription = (description: string): void => {
    if (description !== taskCard.description) {
      dispatch(updateTaskCard({ ...taskCard, description: description }));
    }
  };

  const handleUpdateTaskCardDate = (date: Date): void => {
    if (date.toISOString() !== taskCard.dueDate) {
      dispatch(updateTaskCard({ ...taskCard, dueDate: date.toISOString() }));
    }
  };

  return (
    <div className="p-7 rounded-b-xl rounded-r-none w-[60%]">
      <div className="flex justify-between items-center h-9">
        <EditableText
          isInitialEdit={isEdit}
          initialText={taskCard.name}
          disabled={!isEdit}
          styles={`text-2xl font-bold ${isEdit && "w-full"}`}
          onSave={(text: string) => handleUpdateTaskName(text)}
        />
        {!isEdit && (
          <BoardButton styles="border-2" clickHandler={() => setIsEdit(true)}>
            <IconEdit />
            Edit task
          </BoardButton>
        )}
      </div>

      <div className="flex justify-start items-center pt-5 gap-28">
        <div className="flex items-center gap-3 opacity-65">
          <IconTarget />
          Status
        </div>
        <div className="font-semibold">
          {isEdit ? (
            <ListSelect
              options={[
                taskCard.status,
                ...statusOptions.filter((status) => status !== taskCard.status)
              ]}
              clickHandler={(status: string) =>
                handleUpdateTaskCardStatus(status)
              }
            ></ListSelect>
          ) : (
            taskCard.status
          )}
        </div>
      </div>

      <div className="flex justify-start items-center pt-5 gap-[91px]">
        <div className="flex items-center gap-3 opacity-65">
          <IconCalendar />
          Due date
        </div>
        <TaskDatePicker
          styles="font-semibold"
          disabled={!isEdit}
          initialStartDate={new Date(taskCard.dueDate || '')}
          clickHandler={(date: Date) => handleUpdateTaskCardDate(date)}
        />
      </div>

      <div className="flex justify-start items-center pt-5 gap-[105px]">
        <div className="flex items-center gap-3 opacity-65">
          <IconTag />
          Priority
        </div>
        <div className="font-semibold">
          {isEdit ? (
            <ListSelect
              options={[
                taskCard.priority,
                ...priorityOptions.filter(
                  (priority) => taskCard.priority !== priority
                )
              ]}
              clickHandler={(priority: string) =>
                handleUpdateTaskCardPriority(priority)
              }
            ></ListSelect>
          ) : (
            taskCard.priority
          )}
        </div>
      </div>

      <h5 className="text-lg font-bold pt-12">Description</h5>

      <EditableText
        isInitialEdit={isEdit}
        initialText={taskCard.description}
        useTextarea={true}
        disabled={!isEdit}
        styles="h-36"
        onSave={(text: string) => handleUpdateTaskCardDescription(text)}
      />
    </div>
  );
};

export default TaskEditContent;
