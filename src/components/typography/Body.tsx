import { IOColors, IOTheme } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
  IOColors,
  "bluegreyDark" | "white" | "blue" | "bluegrey" | "bluegreyLight"
>;
type AllowedColors = PartialAllowedColors | IOTheme["textBody-default"];
type AllowedWeight = IOFontWeight | "Regular" | "SemiBold";

type BodyProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontName: FontFamily = "TitilliumWeb";
export const bodyFontSize = 16;
export const bodyLineHeight = 24;
export const bodyDefaultColor: AllowedColors = "bluegrey";
export const bodyDefaultWeight: AllowedWeight = "Regular";

/**
 * `Body` typographic style
 */
export const Body = (props: BodyProps) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: bodyDefaultWeight,
    defaultColor: bodyDefaultColor,
    font: fontName,
    fontStyle: { fontSize: bodyFontSize, lineHeight: bodyLineHeight }
  });
