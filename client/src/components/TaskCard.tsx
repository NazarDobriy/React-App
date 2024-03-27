import { FC } from "react";
import IconCollapse from "./UI/Icons/IconCollapse";
import IconCalendar from "./UI/Icons/IconCalendar";
import PriorityLabel from "./UI/PriorityLabel";
import DropDown from "./UI/DropDown";

const TaskCard: FC = () => {
  return (
    <div className="flex flex-col gap-3 mt-3 border-2 rounded px-4 py-3 select-none">
      <section className="flex items-center justify-between">
        <h5 className="font-semibold">Task name</h5>
        <IconCollapse />
      </section>

      <h5 className="opacity-70">Default description...</h5>

      <section className="flex items-center gap-3">
        <IconCalendar />
        <h5>Wed, 19 Apr</h5>
      </section>

      <PriorityLabel name="Medium" />

      <DropDown />
    </div>
  );
};

export default TaskCard;
