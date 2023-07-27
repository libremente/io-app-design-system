import * as React from "react";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { IOColorsStatusForeground, IOTheme } from "../../core";
import { ExternalTypographyProps, TypographyProps } from "./common";
import { useTypographyFactory } from "./Factory";

type AllowedColors = IOColorsStatusForeground | IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Regular">;

type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

/* Common typographic styles */
export const h3FontSize = 22;
export const h3LineHeight = 33;
/* New typographic styles */
const h3FontName: IOFontFamily = "ReadexPro";
const h3DefaultColor: AllowedColors = "black";
const h3DefaultWeight: AllowedWeight = "Regular";

/**
 * Typography component to render `H2` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Bold`, color: `bluegreyDark`
 * @param props
 * @constructor
 */
export const H3: React.FunctionComponent<OwnProps> = props =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: h3DefaultWeight,
    defaultColor: h3DefaultColor,
    font: h3FontName,
    fontStyle: { fontSize: h3FontSize, lineHeight: h3LineHeight }
  });
