import { FC, useRef, useState } from "react";
import IconArrowDown from "./Icons/IconArrowDown";
import useClickOutsideDetector from "../../hooks/clickOutsideDetector";

const DropDown: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (): void => {
    setIsOpen(false);
  };

  useClickOutsideDetector(wrapperRef, () => setIsOpen(false));

  return (
    <div ref={wrapperRef} className={`relative ${isOpen && "z-10"}`}>
      <div
        className="cursor-pointer flex items-center justify-between bg-gray-300 rounded px-2 py-1"
        onClick={toggleDropdown}
      >
        Move to
        <IconArrowDown />
      </div>
      {isOpen && (
        <div className="absolute cursor-pointer bg-gray-300 rounded mt-1 w-full">
          <div
            className="hover:bg-gray-400 py-1 px-2 rounded"
            onClick={closeDropdown}
          >
            Option 1
          </div>
          <div
            className="hover:bg-gray-400 py-1 px-2 rounded"
            onClick={closeDropdown}
          >
            Option 2
          </div>
          <div
            className="hover:bg-gray-400 py-1 px-2 rounded"
            onClick={closeDropdown}
          >
            Option 3
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
