import type { IOColors } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = Extract<IOColors, "bluegreyDark" | "bluegrey">;
type AllowedWeight = Extract<IOFontWeight, "Medium">;

type BodyMonospaceProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontName: FontFamily = "DMMono";
const fontSize = 16;
const lineHeight = 24;
const monospaceDefaultWeight = "Medium";
const monospaceDefaultcolor = "bluegrey";

/**
 * `BodyMonospace` typographic style
 */
export const BodyMonospace = (props: BodyMonospaceProps) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: monospaceDefaultWeight,
    defaultColor: monospaceDefaultcolor,
    font: fontName,
    fontStyle: { fontSize, lineHeight }
  });
