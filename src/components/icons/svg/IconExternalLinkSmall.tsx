import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconExternalLinkSmall = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8C7 7.44772 7.44772 7 8 7H8.75C9.30228 7 9.75 6.55228 9.75 6C9.75 5.44772 9.30228 5 8.75 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V15.25C19 14.6977 18.5523 14.25 18 14.25C17.4477 14.25 17 14.6977 17 15.25V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8ZM13 5C12.4477 5 12 5.44772 12 6C12 6.55228 12.4477 7 13 7H15.5858L12.2929 10.2929C11.9024 10.6834 11.9024 11.3166 12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17 8.41421V11C17 11.5523 17.4477 12 18 12C18.5523 12 19 11.5523 19 11V7C19 5.89543 18.1046 5 17 5H13Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconExternalLinkSmall;
