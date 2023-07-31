import {
  Banner,
  H2,
  IOPictogramsBleed,
  IOVisualCostants,
  VSpacer,
  WithTestID
} from "@pagopa/io-app-design-system";
import React from "react";
import { Alert, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { FeatureInfo } from "../components/FeatureInfo";
import { Screen } from "../components/Screen";

const onLinkPress = () => {
  Alert.alert("Alert", "Action triggered");
};

const onClose = () => {
  Alert.alert("Alert", "Component dismissed");
};

type BannerProps = WithTestID<{
  size: "big" | "small";
  color: "neutral" | "turquoise";
  pictogramName: IOPictogramsBleed;
  viewRef: React.RefObject<View>;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}>;

const bannerBackgroundColours: Array<BannerProps["color"]> = [
  "neutral",
  "turquoise"
];

export const DSAdvice = () => (
  <Screen>
    {renderFeatureInfo()}

    <VSpacer size={24} />

    {renderBanner()}

    <VSpacer size={40} />
  </Screen>
);

const renderFeatureInfo = () => (
  <>
    <H2 color={"bluegrey"} weight={"SemiBold"} style={{ marginBottom: 16 }}>
      FeatureInfo
    </H2>
    <ComponentViewerBox name="FeatureInfo · with Icon">
      <FeatureInfo
        iconName="info"
        body={
          "Dopo questo passaggio non sarà più possibile annullare il pagamento"
        }
      />
      <VSpacer size={24} />
      <FeatureInfo
        iconName="gallery"
        body={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua"
        }
      />
      <VSpacer size={24} />
      <FeatureInfo
        iconName="security"
        actionLabel="Si applicano i Termini e condizioni d’uso e l’Informativa Privacy di Paytipper"
        actionOnPress={onLinkPress}
      />
    </ComponentViewerBox>
    <VSpacer size={16} />
    <ComponentViewerBox name="FeatureInfo · with Pictogram">
      <FeatureInfo
        pictogramName="followMessage"
        body={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. sed do eiusmod tempor ut labore et dolore magna aliqua"
        }
      />
      <VSpacer size={24} />
      <FeatureInfo
        pictogramName="manual"
        body={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua"
        }
      />
      <VSpacer size={24} />
      <FeatureInfo
        pictogramName="followMessage"
        body={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. sed do eiusmod tempor ut labore et dolore magna aliqua"
        }
        actionLabel="Scopri di più"
        actionOnPress={onLinkPress}
      />
    </ComponentViewerBox>
  </>
);

const renderBanner = () => {
  const viewRef = React.createRef<View>();

  return (
    <>
      <H2
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{
          marginBottom: 16,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
      >
        Banner
      </H2>
      {bannerBackgroundColours.map(color => (
        <React.Fragment key={`${color}-block`}>
          <ComponentViewerBox name={`Banner · Big size, ${color} variant`}>
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="big"
              title="Banner title"
              pictogramName="donation"
              action="Action text"
              onPress={onLinkPress}
            />
            <VSpacer size={24} />
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="big"
              content={
                "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
              }
              pictogramName="donation"
            />
            <VSpacer size={24} />
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="big"
              content={
                "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
              }
              pictogramName="donation"
              action="Dona anche tu"
              onPress={onLinkPress}
            />
            <VSpacer size={24} />
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="big"
              title="Banner title"
              content={
                "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
              }
              pictogramName="donation"
            />
            <VSpacer size={24} />
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="big"
              title="Banner title"
              content={
                "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
              }
              pictogramName="donation"
              action="Dona anche tu"
              onPress={onLinkPress}
            />
          </ComponentViewerBox>
          <ComponentViewerBox
            name={`Banner · Big size, ${color} variant, close action`}
          >
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="big"
              title="Banner title"
              content={
                "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
              }
              pictogramName="donation"
              onClose={onClose}
              labelClose="Nascondi questo banner"
            />
            <VSpacer size={24} />
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="big"
              content={
                "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
              }
              action="Dona anche tu"
              onPress={onLinkPress}
              pictogramName="donation"
              onClose={onClose}
              labelClose="Nascondi questo banner"
            />
          </ComponentViewerBox>
          <ComponentViewerBox name={`Banner · Small size, ${color} variant`}>
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="small"
              title="Banner title"
              content={
                "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
              }
              pictogramName="donation"
              action="Dona anche tu"
              onPress={onLinkPress}
            />
            <VSpacer size={24} />
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="small"
              content={
                "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
              }
              action="Dona anche tu"
              onPress={onLinkPress}
              pictogramName="donation"
            />
            <VSpacer size={24} />
            <Banner
              viewRef={viewRef as React.RefObject<any>}
              color={color}
              size="small"
              content={
                "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
              }
              pictogramName="donation"
            />
          </ComponentViewerBox>
        </React.Fragment>
      ))}
    </>
  );
};
