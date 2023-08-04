import {
  Body,
  H2,
  IOVisualCostants,
  useIOTheme
} from "@pagopa/io-app-design-system";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

export const Search = () => {
  const navigation = useNavigation();
  const theme = useIOTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        textColor: theme["textBody-default"],
        barTintColor: theme["appBackground-secondary"],
        tintColor: theme["interactiveElem-default"],
        placeholder: "Cerca tra i tuoi messaggi",
        cancelButtonText: "Annulla",
        hideWhenScrolling: false
      }
    });
  }, [navigation, theme]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        padding: IOVisualCostants.appMarginDefault
      }}
    >
      <H2>Start</H2>
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>{`Repeated text ${i}`}</Body>
      ))}
      <H2>End</H2>
    </ScrollView>
  );
};
