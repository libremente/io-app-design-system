import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutChangeEvent
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring
} from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
import { IOAccordionRadius, type IOSpacingScale } from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
import { IOColors, hexToRgba } from "../../core/IOColors";
import { H6 } from "../typography";
import { IOSpringValues } from "../../core/IOAnimations";
import { Icon } from "../icons/Icon";

export type AccordionItem = {
  id: number;
  title: string;
  body: string | React.ReactNode;
};

type AccordionBody = {
  children: React.ReactNode;
  expanded: boolean;
};

const accordionBodySpacing: IOSpacingScale = 16;
const accordionIconMargin: IOSpacingScale = 8;
const accordionBorder: IOColors = "grey-200";
const accordionBackground: IOColors = "white";

/* The code below is a re-adaptation of Dima Portenko's code:
https://github.com/dimaportenko/reanimated-collapsable-card-tutorial
*/
export const AccordionBody = ({ children, expanded }: AccordionBody) => {
  const [height, setHeight] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height: onLayoutHeight } = event.nativeEvent.layout;

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const animatedHeightStyle = useAnimatedStyle(
    () => ({
      height: expanded
        ? withSpring(height, IOSpringValues.accordion)
        : withSpring(0, IOSpringValues.accordion)
    }),
    [expanded]
  );

  return (
    <Animated.View
      style={[animatedHeightStyle, styles.accordionCollapsableContainer]}
    >
      <View style={styles.accordionBodyContainer} onLayout={onLayout}>
        {children}
      </View>
    </Animated.View>
  );
};

export const AccordionItem = ({ title, body }: AccordionItem) => {
  const [expanded, setExpanded] = useState(false);

  const onItemPress = () => {
    setExpanded(!expanded);
  };

  const animatedChevron = useAnimatedStyle(
    () => ({
      transform: [
        {
          rotate: expanded
            ? withSpring(`180deg`, IOSpringValues.accordion)
            : withSpring(`0deg`, IOSpringValues.accordion)
        }
      ]
    }),
    [expanded]
  );

  return (
    <View style={styles.accordionWrapper}>
      <TouchableWithoutFeedback
        accessible={true}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        onPress={onItemPress}
      >
        <View style={styles.textContainer}>
          <View style={{ flexShrink: 1, marginRight: accordionIconMargin }}>
            <H6 color="black">{title}</H6>
          </View>
          <Animated.View style={animatedChevron}>
            <Icon name="chevronBottom" color="blueIO-500" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      <AccordionBody expanded={expanded}>
        {typeof body === "string" ? (
          <Text style={styles.accordionBodyText}>{body}</Text>
        ) : (
          body
        )}
      </AccordionBody>
      {/* This gradient adds a smooth end to the content. If it is missing,
      the content will be cut sharply during the height transition. */}
      <LinearGradient
        style={{
          height: accordionBodySpacing,
          position: "absolute",
          // Place at the bottom
          bottom: 0,
          // Avoid gradient overlaps with border radius
          left: accordionBodySpacing,
          right: accordionBodySpacing
        }}
        colors={[
          hexToRgba(IOColors[accordionBackground], 0),
          IOColors[accordionBackground]
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  accordionWrapper: {
    borderColor: IOColors[accordionBorder],
    borderWidth: 1,
    borderRadius: IOAccordionRadius,
    backgroundColor: IOColors[accordionBackground]
  },
  accordionCollapsableContainer: {
    overflow: "hidden"
  },
  accordionBodyContainer: {
    position: "absolute",
    padding: accordionBodySpacing,
    paddingTop: 0
  },
  accordionBodyText: {
    fontSize: 14,
    lineHeight: 21,
    color: IOColors["grey-700"],
    ...makeFontStyleObject("Regular", undefined, "TitilliumWeb")
  },
  textContainer: {
    padding: accordionBodySpacing,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
