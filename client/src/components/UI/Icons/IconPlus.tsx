import { FC } from "react";

interface IconPlusProps {
  color?: string;
  props?: React.SVGProps<SVGSVGElement>;
}

const IconPlus: FC<IconPlusProps> = ({color, props}) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill={color || 'black'}
      height="1em"
      width="1em"
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
      <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
    </svg>
  );
}

export default IconPlus;