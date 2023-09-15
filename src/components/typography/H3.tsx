import { IOTheme, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular" | "Bold">;

type H3Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

/* Common typographic styles */
export const h3FontSize = 22;
export const h3LineHeight = 33;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: FontFamily = "TitilliumWeb";
const legacyDefaultColor: AllowedColors = "bluegreyDark";
const legacyDefaultWeight: AllowedWeight = "Bold";
/**
 * `H3` typographic style
 */
export const H3 = (props: H3Props) => {
  const { isExperimental } = useIOExperimentalDesign();
  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: isExperimental ? defaultWeight : legacyDefaultWeight,
    defaultColor: isExperimental ? defaultColor : legacyDefaultColor,
    font: isExperimental ? font : legacyFontName,
    fontStyle: { fontSize: h3FontSize, lineHeight: h3LineHeight }
  });
};
