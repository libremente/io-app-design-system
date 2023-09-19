import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconHealthCard = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM10 4C8.89543 4 8 4.89543 8 6V8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H8V18C8 19.1046 8.89543 20 10 20H14C15.1046 20 16 19.1046 16 18V16H18C19.1046 16 20 15.1046 20 14V10C20 8.89543 19.1046 8 18 8H16V6C16 4.89543 15.1046 4 14 4H10ZM14 9V6H10V9C10 9.55228 9.55228 10 9 10H6V14H9C9.55228 14 10 14.4477 10 15V18H14V15C14 14.4477 14.4477 14 15 14H18V10H15C14.4477 10 14 9.55228 14 9Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconHealthCard;
