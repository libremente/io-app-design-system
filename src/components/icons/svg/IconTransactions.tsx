import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconTransactions = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.70716 2.29289c.39053.39053.39053 1.02369 0 1.41422L3.41427 9H23.0001c.5522 0 1 .44772 1 1 0 .5523-.4478 1-1 1H1.00006c-.40446 0-.7691-.2436-.92388-.6173-.15478-.3737-.06923-.80381.21677-1.08981l7-7c.39053-.39052 1.02369-.39052 1.41421 0ZM15.2929 21.7071c-.3905-.3905-.3905-1.0237 0-1.4142L20.5858 15H1c-.55229 0-1-.4477-1-1s.44771-1 1-1h22c.4045 0 .7691.2436.9239.6173.1548.3737.0692.8038-.2168 1.0898l-7 7c-.3905.3905-1.0237.3905-1.4142 0Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconTransactions;
