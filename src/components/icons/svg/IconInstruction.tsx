import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconInstruction = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0C4.23858 0 2 2.23858 2 5V19C2 21.7614 4.23858 24 7 24H17C19.7614 24 22 21.7614 22 19V5C22 2.23858 19.7614 0 17 0H7ZM4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V15.5121C19.5306 15.8357 18.5816 16 17.4294 16H6.57017C5.68794 16 4.56833 16.3214 4 16.7065V5ZM4 18.9233V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V17.6294C19.2725 17.9231 18.3911 18 17.4304 18H6.57122C5.41796 18 4.46881 18.4388 4 18.9233ZM6 6C6 5.44772 6.44772 5 7 5H16C16.5523 5 17 5.44772 17 6C17 6.55228 16.5523 7 16 7H7C6.44771 7 6 6.55228 6 6ZM7 8C6.44772 8 6 8.44771 6 9C6 9.55229 6.44772 10 7 10H13C13.5523 10 14 9.55229 14 9C14 8.44771 13.5523 8 13 8H7Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconInstruction;
