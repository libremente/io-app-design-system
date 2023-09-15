import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconNotification = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 8c2.2091 0 4-1.79086 4-4s-1.7909-4-4-4c-2.2091 0-4 1.79086-4 4s1.7909 4 4 4ZM8 1h3.8027c-.3377.58383-.5799 1.22984-.7052 1.91667H8c-1.65685 0-3 1.28718-3 2.875V19.2083c0 1.5879 1.34315 2.875 3 2.875h6c1.6569 0 3-1.2871 3-2.875V10c.7013 0 1.3744-.12031 2-.34141v9.54971C19 21.8547 16.7614 24 14 24H8c-2.76142 0-5-2.1453-5-4.7917V5.79167C3 3.1453 5.23858 1 8 1Zm4 18.2083c0 .5293-.4477.9584-1 .9584s-1-.4291-1-.9584c0-.5292.4477-.9583 1-.9583s1 .4291 1 .9583Z"
    />
  </Svg>
);

export default IconNotification;
