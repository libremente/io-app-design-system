import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramObjClock = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M121 240c65.722 0 119-53.726 119-120C240 53.7258 186.722 0 121 0 55.2781 0 2 53.7258 2 120c0 66.274 53.2781 120 119 120Z"
      fill="#AAEEEF"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M117 53c1.105 0 2 .8954 2 2v63.983l52.678 38.401c.893.651 1.089 1.902.438 2.794-.651.893-1.902 1.089-2.794.438l-53.5-39c-.517-.376-.822-.977-.822-1.616V55c0-1.1046.895-2 2-2Z"
      fill="#00C5CA"
    />
  </Svg>
);

export default PictogramObjClock;
