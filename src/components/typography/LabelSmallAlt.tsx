import { useIOExperimentalDesign } from "../../core";
import type { IOColors, IOTheme } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
  IOColors,
  | "blue"
  | "bluegrey"
  | "red"
  | "white"
  | "bluegreyDark"
  | "grey-700"
  | "grey-200"
>;
type AllowedColors = PartialAllowedColors | IOTheme["textBody-tertiary"];
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Regular" | "SemiBold">;

type LabelSmallAltProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const labelFontSize = 14;
const labelLineHeight = 21;
const fontName: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyLabelFontSize = 16;
const legacyFontName: FontFamily = "TitilliumWeb";
const legacyDefaultWeight: AllowedWeight = "SemiBold";

/**
 * `LabelSmallAlt` typographic style. It's referenced as `LabelSmallReadex` in the design projects.
 */
export const LabelSmallAlt = (props: LabelSmallAltProps) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: isExperimental ? defaultWeight : legacyDefaultWeight,
    defaultColor,
    font: isExperimental ? fontName : legacyFontName,
    fontStyle: {
      fontSize: isExperimental ? labelFontSize : legacyLabelFontSize,
      lineHeight: labelLineHeight
    }
  });
};
