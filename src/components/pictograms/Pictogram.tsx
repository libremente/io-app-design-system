import React, { useMemo } from "react";
import { ColorValue } from "react-native";
import {
  IOColors,
  IOThemeDark,
  IOThemeLight,
  useIOTheme
} from "../../core/IOColors";

import PictogramMessages from "./svg/PictogramMessages";
import PictogramAbacus from "./svg/PictogramAbacus";
import PictogramAirBaloon from "./svg/PictogramAirBaloon";
import PictogramAirship from "./svg/PictogramAirship";
import PictogramAttention from "./svg/PictogramAttention";
import PictogramBaloons from "./svg/PictogramBaloons";
import PictogramBeerMug from "./svg/PictogramBeerMug";
import PictogramCameraRequest from "./svg/PictogramCameraRequest";
import PictogramCameraDenied from "./svg/PictogramCameraDenied";
import PictogramCompleted from "./svg/PictogramCompleted";
import PictogramEmailToValidate from "./svg/PictogramEmailToValidate";
import PictogramEmailValidation from "./svg/PictogramEmailValidation";
import PictogramEmptyArchive from "./svg/PictogramEmptyArchive";
import PictogramError from "./svg/PictogramError";
import PictogramFeedback from "./svg/PictogramFeedback";
import PictogramFireworks from "./svg/PictogramFireworks";
import PictogramHeart from "./svg/PictogramHeart";
import PictogramHourglass from "./svg/PictogramHourglass";
import PictogramInProgress from "./svg/PictogramInProgress";
import PictogramInbox from "./svg/PictogramInbox";
import PictogramNotAvailable from "./svg/PictogramNotAvailable";
import PictogramPiggyBank from "./svg/PictogramPiggyBank";
import PictogramPin from "./svg/PictogramPin";
import PictogramPlaces from "./svg/PictogramPlaces";
import PictogramProcessing from "./svg/PictogramProcessing";
import PictogramPuzzle from "./svg/PictogramPuzzle";
import PictogramQuestion from "./svg/PictogramQuestion";
import PictogramSearch from "./svg/PictogramSearch";
import PictogramSms from "./svg/PictogramSms";
import PictogramTeaBreak from "./svg/PictogramTeaBreak";
import PictogramTimeout from "./svg/PictogramTimeout";
import PictogramUmbrella from "./svg/PictogramUmbrella";
import PictogramUmbrellaNew from "./svg/PictogramUmbrellaNew";
import PictogramUnrecognized from "./svg/PictogramUnrecognized";
import PictogramUploadFile from "./svg/PictogramUploadFile";
import PictogramSuccess from "./svg/PictogramSuccess";
import PictogramHelp from "./svg/PictogramHelp";
import PictogramITWallet from "./svg/PictogramITWallet";
import PictogramFatalError from "./svg/PictogramFatalError";
import PictogramUpdateOS from "./svg/PictogramUpdateOS";
import PictogramIdentityAdd from "./svg/PictogramIdentityAdd";
import PictogramIdentityRefresh from "./svg/PictogramIdentityRefresh";
import PictogramIdentity from "./svg/PictogramIdentity";
import PictogramAccessDenied from "./svg/PictogramAccessDenied";
import PictogramTime from "./svg/PictogramTime";
import PictogramStopSecurity from "./svg/PictogramStopSecurity";
import PictogramSecurity from "./svg/PictogramSecurity";
import PictogramPasscode from "./svg/PictogramPasscode";
import PictogramIdentityCheck from "./svg/PictogramIdentityCheck";
import PictogramCharity from "./svg/PictogramCharity";
import PictogramEmpty from "./svg/PictogramEmpty";
import PictogramCie from "./svg/PictogramCie";
import PictogramFeature from "./svg/PictogramFeature";
import PictogramNotification from "./svg/PictogramNotification";
import PictogramObjClock from "./svg/PictogramObjClock";
import PictogramObjIbanCard from "./svg/PictogramObjIbanCard";
import PictogramObjManual from "./svg/PictogramObjManual";
import PictogramObjTrash from "./svg/PictogramObjTrash";
import PictogramObjKey from "./svg/PictogramObjKey";
import PictogramObjFlyingMessage from "./svg/PictogramObjFlyingMessage";
import PictogramObjFollowMessage from "./svg/PictogramObjFollowMessage";
/* Bleed Pictograms */
import PictogramBleedCharity from "./svg/PictogramBleedCharity";
import PictogramBleedHelp from "./svg/PictogramBleedHelp";
import PictogramBleedITWallet from "./svg/PictogramBleedITWallet";
import PictogramBleedFeedback from "./svg/PictogramBleedFeedback";
import PictogramBleedSecurity from "./svg/PictogramBleedSecurity";
import PictogramBleedFeature from "./svg/PictogramBleedFeature";
import PictogramBleedCie from "./svg/PictogramBleedCie";
import PictogramBleedCameraRequest from "./svg/PictogramBleedCameraRequest";
import PictogramBleedCameraDenied from "./svg/PictogramBleedCameraDenied";
import PictogramBleedNotification from "./svg/PictogramBleedNotification";

export const IOPictograms = {
  // Start legacy pictograms //
  messages: PictogramMessages,
  airBaloon: PictogramAirBaloon,
  abacus: PictogramAbacus,
  emailValidation: PictogramEmailValidation,
  emailToValidate: PictogramEmailToValidate,
  inbox: PictogramInbox,
  piggyBank: PictogramPiggyBank,
  processing: PictogramProcessing,
  baloons: PictogramBaloons,
  places: PictogramPlaces,
  notAvailable: PictogramNotAvailable,
  airship: PictogramAirship,
  search: PictogramSearch,
  unrecognized: PictogramUnrecognized,
  error: PictogramError,
  umbrella: PictogramUmbrella,
  inProgress: PictogramInProgress,
  fireworks: PictogramFireworks,
  puzzle: PictogramPuzzle,
  question: PictogramQuestion,
  pin: PictogramPin,
  timeout: PictogramTimeout,
  uploadFile: PictogramUploadFile,
  hourglass: PictogramHourglass,
  teaBreak: PictogramTeaBreak,
  beerMug: PictogramBeerMug,
  sms: PictogramSms,
  heart: PictogramHeart,
  completed: PictogramCompleted,
  // End legacy pictograms
  empty: PictogramEmpty,
  feature: PictogramFeature,
  charity: PictogramCharity,
  attention: PictogramAttention,
  emptyArchive: PictogramEmptyArchive,
  umbrellaNew: PictogramUmbrellaNew,
  feedback: PictogramFeedback,
  cameraRequest: PictogramCameraRequest,
  cameraDenied: PictogramCameraDenied,
  success: PictogramSuccess,
  fatalError: PictogramFatalError,
  help: PictogramHelp,
  itWallet: PictogramITWallet,
  updateOS: PictogramUpdateOS,
  identity: PictogramIdentity,
  identityAdd: PictogramIdentityAdd,
  identityRefresh: PictogramIdentityRefresh,
  identityCheck: PictogramIdentityCheck,
  accessDenied: PictogramAccessDenied,
  stopSecurity: PictogramStopSecurity,
  security: PictogramSecurity,
  cie: PictogramCie,
  time: PictogramTime,
  passcode: PictogramPasscode,
  notification: PictogramNotification,
  // Start Objects Pictogram
  ibanCard: PictogramObjIbanCard,
  followMessage: PictogramObjFollowMessage,
  manual: PictogramObjManual,
  trash: PictogramObjTrash,
  clock: PictogramObjClock,
  key: PictogramObjKey,
  flyingMessage: PictogramObjFlyingMessage
  // End Objects Pictogram
};

export type IOPictograms = keyof typeof IOPictograms;
export type IOPictogramSizeScale = 48 | 64 | 72 | 80 | 120 | 180;

type IOPictogramsProps = {
  name: IOPictograms;
  color?: IOColors;
  /* Not too happy about the API choice,
  but at least we have the same <StatusBar …>
  component props. */
  pictogramStyle?: "default" | "light-content" | "dark-content";
  size?: IOPictogramSizeScale | "100%";
};

export type SVGPictogramProps = {
  size: IOPictogramSizeScale | "100%";
  color: ColorValue;
  colorValues: Record<string, ColorValue>;
};

type PictogramPalette = {
  hands: ColorValue;
  main: ColorValue;
  secondary: ColorValue;
};

export const Pictogram = ({
  name,
  color = "aqua",
  pictogramStyle = "default",
  size = 120,
  ...props
}: IOPictogramsProps) => {
  const PictogramElement = IOPictograms[name];
  const theme = useIOTheme();

  const themeObj = useMemo(() => {
    switch (pictogramStyle) {
      case "dark-content":
        return IOThemeLight;
      case "light-content":
        return IOThemeDark;
      case "default":
        return theme;
    }
  }, [pictogramStyle, theme]);

  const colorValues: PictogramPalette = useMemo(
    () => ({
      hands: IOColors[themeObj["pictogram-hands"]],
      main: IOColors[themeObj["pictogram-tint-main"]],
      secondary: IOColors[themeObj["pictogram-tint-secondary"]]
    }),
    [themeObj]
  );

  return (
    <PictogramElement
      {...props}
      size={size}
      color={IOColors[color]}
      colorValues={colorValues}
    />
  );
};

/*
░░░ VARIOUS SETS ░░░
*/

/* Bleed pictograms
    Used in the <Banner /> component
*/

export type IOPictogramsBleed = Extract<
  | "charity"
  | "help"
  | "feedback"
  | "itWallet"
  | "security"
  | "feature"
  | "cie"
  | "cameraRequest"
  | "cameraDenied"
  | "notification",
  IOPictograms
>;

export const IOPictogramsBleed: {
  [key in IOPictogramsBleed]: ({ size }: SVGPictogramProps) => JSX.Element;
} = {
  charity: PictogramBleedCharity,
  help: PictogramBleedHelp,
  feedback: PictogramBleedFeedback,
  itWallet: PictogramBleedITWallet,
  security: PictogramBleedSecurity,
  feature: PictogramBleedFeature,
  cie: PictogramBleedCie,
  cameraRequest: PictogramBleedCameraRequest,
  cameraDenied: PictogramBleedCameraDenied,
  notification: PictogramBleedNotification
};

export const PictogramBleed = ({
  name,
  color = "aqua",
  size = 80,
  pictogramStyle = "default",
  ...props
}: IOPictogramsProps) => {
  const PictogramElement = IOPictogramsBleed[name as IOPictogramsBleed];

  const theme = useIOTheme();

  const themeObj = useMemo(() => {
    switch (pictogramStyle) {
      case "dark-content":
        return IOThemeLight;
      case "light-content":
        return IOThemeDark;
      case "default":
        return theme;
    }
  }, [pictogramStyle, theme]);

  const colorValues: PictogramPalette = useMemo(
    () => ({
      hands: IOColors[themeObj["pictogram-hands"]],
      main: IOColors[themeObj["pictogram-tint-main"]],
      secondary: IOColors[themeObj["pictogram-tint-secondary"]]
    }),
    [themeObj]
  );

  return (
    <PictogramElement
      {...props}
      size={size}
      color={IOColors[color]}
      colorValues={colorValues}
    />
  );
};

/* Object Pictograms */

const { ibanCard, followMessage, manual, trash, clock, key, flyingMessage } =
  IOPictograms;

export const IOPictogramsObject = {
  ibanCard,
  followMessage,
  manual,
  trash,
  clock,
  key,
  flyingMessage
} as const;

export type IOPictogramsObject = keyof typeof IOPictogramsObject;

/* Legacy pictograms */

const {
  messages,
  airBaloon,
  abacus,
  emailValidation,
  emailToValidate,
  inbox,
  piggyBank,
  processing,
  baloons,
  places,
  notAvailable,
  airship,
  search,
  unrecognized,
  error,
  umbrella,
  inProgress,
  fireworks,
  puzzle,
  question,
  pin,
  timeout,
  uploadFile,
  hourglass,
  teaBreak,
  beerMug,
  sms,
  heart,
  completed
} = IOPictograms;

export const IOPictogramsLegacy = {
  messages,
  airBaloon,
  abacus,
  emailValidation,
  emailToValidate,
  inbox,
  piggyBank,
  processing,
  baloons,
  places,
  notAvailable,
  airship,
  search,
  unrecognized,
  error,
  umbrella,
  inProgress,
  fireworks,
  puzzle,
  question,
  pin,
  timeout,
  uploadFile,
  hourglass,
  teaBreak,
  beerMug,
  sms,
  heart,
  completed
} as const;

export type IOPictogramsLegacy = keyof typeof IOPictogramsLegacy;
