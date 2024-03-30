import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconCalendar from "./Icons/IconCalendar";

interface TaskDatePickerProps {
  clickHandler: () => void;
}

const TaskDatePicker: FC<TaskDatePickerProps> = ({ clickHandler }) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      clickHandler();
    }
  };

  return (
    <label className="flex">
      <IconCalendar />
      <DatePicker
        className="ml-3 cursor-pointer"
        selected={startDate}
        onChange={(date) => handleChange(date)}
        minDate={new Date()}
        dateFormat="EEE, dd MMM"
      />
    </label>
  );
};

export default TaskDatePicker;
