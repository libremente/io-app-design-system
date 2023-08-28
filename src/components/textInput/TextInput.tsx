import * as React from "react";
import { TextInputBase } from "./TextInputBase";

type TextInputProps = Omit<
  React.ComponentProps<typeof TextInputBase>,
  | "rightElement"
  | "status"
  | "bottomMessageColor"
  | "isPassword"
  | "errorMessage"
>;

export const TextInput = (props: TextInputProps) => (
  <TextInputBase {...props} />
);
