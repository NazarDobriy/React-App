import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TaskDatePickerProps {
  styles?: string;
  disabled?: boolean;
  clickHandler?: (date: Date) => void;
  initialStartDate?: Date;
}

const TaskDatePicker: FC<TaskDatePickerProps> = ({
  styles,
  disabled,
  clickHandler,
  initialStartDate = new Date()
}) => {
  const [startDate, setStartDate] = useState<Date>(initialStartDate);

  const handleChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      if (clickHandler) {
        clickHandler(date);
      }
    }
  };

  return (
    <DatePicker
      className={styles}
      selected={startDate}
      onChange={(date) => handleChange(date)}
      minDate={new Date()}
      dateFormat="EEE, dd MMM"
      disabled={!!disabled}
    />
  );
};

export default TaskDatePicker;
