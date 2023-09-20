import * as React from "react";
import { useCallback } from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIcon,
  IOIcons,
  IconClassComponent
} from "../../components/icons";
import {
  IOButtonStyles,
  IOColors,
  IOIconButtonStyles,
  IOScaleValues,
  IOSpringValues,
  hexToRgba,
  useIOExperimentalDesign
} from "../../core";

export type IconButtonContained = WithTestID<{
  icon: IOIcons;
  color?: "primary" | "neutral" | "contrast";
  disabled?: boolean;
  accessibilityLabel: string;
  accessibilityHint?: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

type ColorStates = {
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  icon: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

const mapColorStates: Record<
  NonNullable<IconButtonContained["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    background: {
      default: hexToRgba(IOColors["blueIO-500"], 0),
      pressed: hexToRgba(IOColors["blueIO-500"], 0.15),
      disabled: "transparent"
    },
    icon: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: hexToRgba(IOColors["blueIO-500"], 0.25)
    }
  },
  // Neutral button
  neutral: {
    background: {
      default: IOColors.white,
      pressed: IOColors.greyUltraLight,
      disabled: "transparent"
    },
    icon: {
      default: IOColors.bluegrey,
      pressed: IOColors.black,
      disabled: IOColors.grey
    }
  },
  // Contrast button
  contrast: {
    background: {
      default: hexToRgba(IOColors.white, 0),
      pressed: hexToRgba(IOColors.white, 0.2),
      disabled: "transparent"
    },
    icon: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: hexToRgba(IOColors.white, 0.25)
    }
  }
};

const mapLegacyColorStates: Record<
  NonNullable<IconButtonContained["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    background: {
      default: hexToRgba(IOColors.blue, 0),
      pressed: hexToRgba(IOColors.blue, 0.15),
      disabled: "transparent"
    },
    icon: {
      default: IOColors.blue,
      pressed: IOColors.blue,
      disabled: hexToRgba(IOColors.blue, 0.25)
    }
  },
  // Neutral button
  neutral: {
    background: {
      default: IOColors.white,
      pressed: IOColors.greyUltraLight,
      disabled: "transparent"
    },
    icon: {
      default: IOColors.bluegrey,
      pressed: IOColors.black,
      disabled: IOColors.grey
    }
  },
  // Contrast button
  contrast: {
    background: {
      default: hexToRgba(IOColors.white, 0),
      pressed: hexToRgba(IOColors.white, 0.2),
      disabled: "transparent"
    },
    icon: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: hexToRgba(IOColors.white, 0.25)
    }
  }
};

const AnimatedIconClassComponent =
  Animated.createAnimatedComponent(IconClassComponent);

export const IconButtonContained = ({
  icon,
  color = "primary",
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: IconButtonContained) => {
  const isPressed = useSharedValue(0);
  const { isExperimental } = useIOExperimentalDesign();

  const colorMap = React.useMemo(
    () => (isExperimental ? mapColorStates : mapLegacyColorStates),
    [isExperimental]
  );

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.exaggeratedButton?.pressedState;

  // Using a spring-based animation for our interpolations
  const progressPressed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

  // Interpolate animation values from `isPressed` values

  const pressedAnimationStyle = useAnimatedStyle(() => {
    // Link color states to the pressed states
    const backgroundColor = interpolateColor(
      progressPressed.value,
      [0, 1],
      [colorMap[color].background.default, colorMap[color].background.pressed]
    );

    // Scale down button slightly when pressed
    const scale = interpolate(
      progressPressed.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolate.CLAMP
    );

    return {
      backgroundColor,
      transform: [{ scale }]
    };
  });

  // Animate the <Icon> color prop
  const animatedColor = useAnimatedProps(() => {
    const iconColor = interpolateColor(
      progressPressed.value,
      [0, 1],
      [colorMap[color].icon.default, colorMap[color].icon.pressed]
    );
    return { color: iconColor };
  });

  const handlePressIn = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 1;
  }, [isPressed]);
  const handlePressOut = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 0;
  }, [isPressed]);

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={"button"}
      testID={testID}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessible={true}
      disabled={disabled}
      style={IOButtonStyles.dimensionsDefault}
    >
      <Animated.View
        style={[
          IOIconButtonStyles.button,
          IOIconButtonStyles.buttonSizeDefault,
          !disabled && pressedAnimationStyle
        ]}
      >
        {!disabled ? (
          <AnimatedIconClassComponent
            name={icon}
            animatedProps={animatedColor}
            color={colorMap[color]?.icon?.default}
          />
        ) : (
          <AnimatedIcon name={icon} color={colorMap[color]?.icon?.disabled} />
        )}
      </Animated.View>
    </Pressable>
  );
};

export default IconButtonContained;
