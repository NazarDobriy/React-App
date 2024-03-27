import { FC, ReactNode } from "react";

interface BoardButtonProps {
  styles?: string;
  children: ReactNode;
  clickHandler: () => void
}

const BoardButton: FC<BoardButtonProps> = ({ styles, clickHandler, children }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 py-1 px-4 text-center rounded border-2 font-semibold ${styles}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default BoardButton;
