import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TaskDatePickerProps {
  styles?: string;
  disabled?: boolean;
  clickHandler?: () => void;
}

const TaskDatePicker: FC<TaskDatePickerProps> = ({
  styles,
  disabled,
  clickHandler
}) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      if (clickHandler) {
        clickHandler();
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
