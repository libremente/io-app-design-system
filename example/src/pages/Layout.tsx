import {
  Body,
  ContentWrapper,
  Divider,
  H1,
  H3,
  HSpacer,
  IOAppMargin,
  IOColors,
  IOSpacer,
  IOThemeContext,
  IOVisualCostants,
  LabelSmall,
  VDivider,
  VSpacer
} from "@pagopa/io-app-design-system";
import React, { useContext } from "react";
import { StatusBar, View } from "react-native";
import { NoMarginScreen } from "../components/Screen";
import { SpacerViewerBox } from "../components/SpacerViewerBox";

export const Layout = () => {
  const theme = useContext(IOThemeContext);

  return (
    <NoMarginScreen>
      <StatusBar
        barStyle={"default"}
        backgroundColor={IOColors.black}
      ></StatusBar>
      <ContentWrapper>
        <H1
          color={theme["textHeading-default"]}
          weight={"Bold"}
          style={{
            marginBottom: 16,
            paddingTop: IOVisualCostants.appMarginDefault
          }}
        >
          Grid
        </H1>
        <H3
          color={theme["textHeading-default"]}
          weight={"Bold"}
          style={{ marginBottom: 16 }}
        >
          ContentWrapper
        </H3>
      </ContentWrapper>
      {IOAppMargin.map((value, i, arr) => (
        <React.Fragment key={`${value}-${i}`}>
          <View
            style={{
              backgroundColor: IOColors[theme["appBackground-tertiary"]]
            }}
          >
            <ContentWrapper margin={value}>
              <View
                style={{
                  paddingVertical: 16,
                  backgroundColor: IOColors[theme["appBackground-secondary"]]
                }}
              >
                <Body color={theme["textBody-secondary"]}>Content example</Body>
                <LabelSmall
                  style={{ position: "absolute", right: 4, top: 4 }}
                  fontSize="small"
                  weight="Regular"
                  color={theme["textBody-tertiary"]}
                >
                  {value}
                </LabelSmall>
              </View>
            </ContentWrapper>
          </View>
          {i !== arr.length - 1 && <VSpacer size={16} />}
        </React.Fragment>
      ))}

      <VSpacer size={40} />

      <ContentWrapper>
        <H1
          color={theme["textHeading-default"]}
          weight={"Bold"}
          style={{ marginBottom: 16 }}
        >
          Spacing
        </H1>

        <H3
          color={theme["textHeading-default"]}
          weight={"Bold"}
          style={{ marginBottom: 16 }}
        >
          VSpacer
        </H3>

        {/* Vertical */}
        {IOSpacer.map((spacerEntry, i, arr) => (
          <React.Fragment key={`${spacerEntry}-${i}-vertical`}>
            <SpacerViewerBox orientation="vertical" size={spacerEntry} />
            {/* Don't add spacer to the last item. Quick and dirty
        alternative to the Stack component.
        https://stackoverflow.com/a/60975451 */}
            {i !== arr.length - 1 && <VSpacer size={16} />}
          </React.Fragment>
        ))}

        <VSpacer size={24} />

        <H3
          color={theme["textHeading-default"]}
          weight={"Bold"}
          style={{ marginBottom: 16 }}
        >
          HSpacer
        </H3>

        {/* Horizontal */}
        <View style={{ flexDirection: "row" }}>
          {IOSpacer.map((spacerEntry, i, arr) => (
            <React.Fragment key={`${spacerEntry}-${i}-horizontal`}>
              <SpacerViewerBox orientation="horizontal" size={spacerEntry} />
              {i !== arr.length - 1 && <HSpacer size={8} />}
            </React.Fragment>
          ))}
        </View>

        <VSpacer size={48} />
      </ContentWrapper>

      <ContentWrapper>
        <H1
          color={theme["textHeading-default"]}
          weight={"Bold"}
          style={{ marginBottom: 16 }}
        >
          Divider
        </H1>

        <H3
          color={theme["textHeading-default"]}
          weight={"Bold"}
          style={{ marginBottom: 16 }}
        >
          Default (Horizontal)
        </H3>

        <Divider />
        <VSpacer size={48} />
      </ContentWrapper>
      <Divider />
      <VSpacer size={48} />

      <ContentWrapper>
        <H3
          color={theme["textHeading-default"]}
          weight={"Bold"}
          style={{ marginBottom: 16 }}
        >
          Vertical
        </H3>

        <View style={{ flexDirection: "row", height: 100 }}>
          <VDivider />
        </View>
        <VSpacer size={48} />
      </ContentWrapper>
    </NoMarginScreen>
  );
};
