import type { FC, SVGProps } from "react";

interface IconCollapseProps {
  id?: string;
  props?: SVGProps<SVGSVGElement>;
}

const IconCollapse: FC<IconCollapseProps> = ({ id, props }) => {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      className="cursor-pointer outline-none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4m0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402"
      ></path>
    </svg>
  );
};

export default IconCollapse;
