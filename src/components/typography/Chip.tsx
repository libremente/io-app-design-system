import { IOColors, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOColors;
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular">;

type ChipProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const chipFontSize = 12;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFont: FontFamily = "TitilliumWeb";
/**
 * `Chip` typographic style
 */
export const Chip = (props: ChipProps) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight,
    defaultColor,
    font: isExperimental ? font : legacyFont,
    fontStyle: { fontSize: chipFontSize }
  });
};
