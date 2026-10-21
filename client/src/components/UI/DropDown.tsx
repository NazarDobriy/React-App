import { FC, ReactNode, useRef, useState } from "react";
import IconArrowDown from "./Icons/IconArrowDown";
import useClickOutsideDetector from "../../hooks/clickOutsideDetector";

interface DropDownProps {
  children: ReactNode;
}

const DropDown: FC<DropDownProps> = ({ children }) => {
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
        <div
          className="absolute cursor-pointer bg-gray-300 rounded mt-1 w-full"
          onClick={closeDropdown}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropDown;
