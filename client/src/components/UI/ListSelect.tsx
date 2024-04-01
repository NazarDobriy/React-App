import { FC, useState, ChangeEvent } from "react";

interface ListSelectProps {
  options: string[];
  clickHandler: (option: string) => void;
}

const ListSelect: FC<ListSelectProps> = ({ options, clickHandler }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedValue(event.target.value);
    clickHandler(event.target.value);
  };

  return (
    <select
      className="outline-none cursor-pointer w-24"
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ListSelect;
