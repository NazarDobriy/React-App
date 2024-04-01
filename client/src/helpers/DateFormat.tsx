import { FC } from "react";

interface DateFormatProps {
  date: Date;
}

const DateFormat: FC<DateFormatProps> = ({ date }) => {
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return <div className="text-sm">{formatDate(date)}</div>;
};

export default DateFormat;
