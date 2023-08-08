import React from "react";
import {
  IOColors,
  IOColorsStatusForeground,
  IOTheme
} from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
  IOColors,
  "bluegreyDark" | "white" | "blue" | "bluegrey"
>;
type AllowedColors =
  | PartialAllowedColors
  | IOColorsStatusForeground
  | IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Bold" | "SemiBold">;

type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const h2FontSize = 20;
export const h2LineHeight = 24;
export const h2DefaultColor: AllowedColors = "bluegreyDark";
export const h2DefaultWeight: AllowedWeight = "Bold";

/**
 * Typography component to render `H2` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Bold`, color: `bluegreyDark`
 * @param props
 * @constructor
 */
export const H2: React.FC<OwnProps> = props => {
  const fontName: FontFamily = "TitilliumWeb";
  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: h2DefaultWeight,
    defaultColor: h2DefaultColor,
    font: fontName,
    fontStyle: { fontSize: h2FontSize, lineHeight: h2LineHeight }
  });
};
