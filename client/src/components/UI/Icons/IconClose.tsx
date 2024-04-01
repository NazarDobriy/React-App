import { FC } from "react";

interface IconCloseProps {
  color?: string;
  props?: React.SVGProps<SVGSVGElement>;
  clickHandler?: () => void;
}

const IconClose: FC<IconCloseProps> = ({ color, props, clickHandler }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      height="1.3em"
      width="1.3em"
      className="cursor-pointer"
      onClick={clickHandler}
      {...props}
    >
      <path
        fill={color}
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
      />
    </svg>
  );
};

export default IconClose;
