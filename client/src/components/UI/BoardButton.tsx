import { FC, ReactNode } from "react";

interface BoardButtonProps {
  styles?: string;
  children: ReactNode;
  clickHandler?: () => void;
}

const BoardButton: FC<BoardButtonProps> = ({
  styles,
  clickHandler,
  children
}) => {
  return (
    <button
      className={`flex items-center gap-2 py-1 px-4 text-center rounded font-semibold transition-all ${styles}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default BoardButton;
