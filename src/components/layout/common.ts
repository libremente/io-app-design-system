import * as React from "react";
import { IconButton } from "../buttons";

export type ActionProp = Pick<
  React.ComponentProps<typeof IconButton>,
  "icon" | "onPress" | "accessibilityLabel" | "accessibilityHint" | "testID"
>;
