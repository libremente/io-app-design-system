import { SectionList, View } from "react-native";
import * as React from "react";
import {
  IOStyles,
  useIOTheme,
  Divider,
  H1,
  LabelSmall,
  VSpacer,
  ListItemNav,
  useIOExperimentalDesign,
  ListItemSwitch
} from "@pagopa/io-app-design-system";
import APP_ROUTES from "../navigation/routes";
import { AppParamsList } from "../navigation/params";
import { IOStackNavigationRouteProps } from "../utils/types";

type Props = IOStackNavigationRouteProps<AppParamsList, "DESIGN_SYSTEM_MAIN">;

type SingleSectionProps = {
  title: string;
  description?: string;
  route: string;
};

type RoutesProps = Array<SingleSectionProps>;

const DATA_ROUTES_FOUNDATION: RoutesProps = Object.values(
  APP_ROUTES.FOUNDATION
);
const DATA_ROUTES_COMPONENTS: RoutesProps = Object.values(
  APP_ROUTES.COMPONENTS
);
const DATA_ROUTES_SCREENS: RoutesProps = Object.values(APP_ROUTES.SCREENS);

const DATA_ROUTES_SANDBOX: RoutesProps = Object.values(APP_ROUTES.SANDBOX);

const DESIGN_SYSTEM_SECTION_DATA = [
  {
    title: "Foundation",
    data: DATA_ROUTES_FOUNDATION
  },
  {
    title: "Components",
    data: DATA_ROUTES_COMPONENTS
  },
  {
    title: "Screens",
    data: DATA_ROUTES_SCREENS
  },
  {
    title: "Sandbox",
    data: DATA_ROUTES_SANDBOX
  }
];

const MainScreen = (props: Props) => {
  const theme = useIOTheme();
  const { isExperimental, setExperimental } = useIOExperimentalDesign();
  const renderDSNavItem = ({
    item: { title, route }
  }: {
    item: { title: string; route: string };
  }) => (
    <ListItemNav
      accessibilityLabel={`Go to the ${title} page`}
      value={title}
      onPress={() => props.navigation.navigate(route as keyof AppParamsList)}
    />
  );

  const renderDSSection = ({
    section: { title, description }
  }: {
    section: { title: string; description?: string };
  }) => (
    <View style={{ marginTop: 24, marginBottom: 8 }}>
      <H1 color={theme["textHeading-default"]}>{title}</H1>
      {description && (
        <LabelSmall weight={"Regular"} color={theme["textBody-tertiary"]}>
          {description}
        </LabelSmall>
      )}
    </View>
  );

  const renderDSSectionFooter = () => <VSpacer size={24} />;

  return (
    <>
      <View style={IOStyles.horizontalContentPadding}>
        <ListItemSwitch
          label="Abilita Design Sperimentale"
          value={isExperimental}
          onSwitchValueChange={setExperimental}
        />
        <VSpacer size={4} />
      </View>
      <SectionList
        keyExtractor={(item, index) => `${item.route}-${index}`}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={IOStyles.horizontalContentPadding}
        renderSectionHeader={renderDSSection}
        renderSectionFooter={renderDSSectionFooter}
        renderItem={renderDSNavItem}
        ItemSeparatorComponent={() => <Divider />}
        sections={DESIGN_SYSTEM_SECTION_DATA}
      />
    </>
  );
};

export default MainScreen;
