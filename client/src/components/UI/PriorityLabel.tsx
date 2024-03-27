import { FC } from "react";

type PriorityLabelType = "Low" | "Medium" | "High";

const PriorityLabel: FC<{ name: PriorityLabelType }> = ({ name }) => {
  return (
    <section className="flex items-center gap-2 w-fit border-2 rounded-3xl px-3 bg-gray-300 border-gray-300">
      <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
      {name}
    </section>
  );
};

export default PriorityLabel;
